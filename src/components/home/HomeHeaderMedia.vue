<template>
  <section
    class="relative mt-8 flex h-auto w-full items-center justify-center rounded-2xl xl:h-[35vh]"
  >
    <div
      class="container mx-auto flex flex-wrap items-stretch justify-center gap-8 xl:flex-nowrap xl:justify-between xl:px-8"
    >
      <HomeArticle
        v-for="article in articles"
        :key="article.id"
        :articleData="article"
      />
      <div
        class="flex w-full max-w-md flex-col justify-between rounded-2xl bg-white-second p-6 shadow-sm dark:bg-dark dark:shadow-xl xl:max-w-sm"
        :class="[smileWasCreated ? 'gap-2' : 'gap-8']"
        v-if="quantity"
      >
        <p>
          <span class="text-gradient mb-4 block text-5xl font-bold">{{
            quantity
          }}</span>
          <span v-if="!smileWasCreated"
            >Zostawionych <strong>uśmiechów</strong>, wszyscy czekamy na
            <strong>Twój!</strong></span
          >
          <span v-if="smileWasCreated"
            >Wspólnie zostawionych <strong>uśmiechów!</strong>
          </span>
        </p>
        <div class="flex h-48 justify-center sm:h-48" v-if="smileWasCreated">
          <img
            class="h-full rounded-full"
            v-lazy="[
              store.theme === 'light'
                ? 'src/assets/video/smiley-light.gif'
                : 'src/assets/video/smiley-dark.gif',
            ]"
            alt="Gif - ilustracja - Mężczyna ma uśmiechniętą emotkę w miejscu głowy, kobieta trzyma uśmiechniętą emotkę w rękach. W tle ruszające się cztery uśmiechnięte emotki"
          />
        </div>
        <button
          class="button-shadow confetti-button relative z-10 flex w-full items-center justify-center gap-1 rounded-xl bg-second px-4 py-2 text-white hover:animate-pulse"
          @click="updateSmileCounter"
          v-if="!smileWasCreated"
        >
          <span class="icon icon--happy mr-4 h-8 w-8"></span>
          Zostaw <span class="smile-line">uśmiech</span>
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useMutation, useQuery, useResult } from '@vue/apollo-composable';
import { store } from '../../store/store';
import articlesData from '../../data/article.json';
import HomeArticle from './HomeArticle.vue';
import gql from 'graphql-tag';
import { ref } from '@vue/reactivity';
import { inject, watch } from '@vue/runtime-core';
import axios from 'axios';

const backendURL = inject('backendURL');
const articles = articlesData.articles;
const smileWasCreated = ref('smileHasBeenAdded' in localStorage);
const { result } = useQuery(
  gql`
    query {
      smileCounters {
        data {
          attributes {
            quantity
          }
        }
      }
    }
  `
);
const smileCounter = useResult(result, null, (data) => data.smileCounters.data);
const quantity = ref(null);
watch(smileCounter, (currentValue) => {
  quantity.value = currentValue[0].attributes.quantity;
});
const updateSmileCounter = () => {
  if (smileWasCreated.value) {
  } else {
    axios
      .put(backendURL + '/api/smile-counters/1', {
        data: {
          quantity: quantity.value + 1,
        },
      })
      .then(() => {
        quantity.value = quantity.value + 1;
        smileWasCreated.value = true
        createSmileInLocalStorage();
      });
  }
};
const createSmileInLocalStorage = () => {
  localStorage.setItem('smileHasBeenAdded', 'true');
};
</script>
