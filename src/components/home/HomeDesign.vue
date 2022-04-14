<template>
  <section class="mt-8 flex justify-center" id="projects">
    <div
      class="container flex flex-col gap-4 rounded-2xl bg-white-second py-12 shadow-sm dark:bg-dark dark:shadow-xl md:p-4 xl:p-12"
    >
      <HomeTitle
        titleTextSmile="Design"
        class="pl-4 sm:mx-auto sm:max-w-4xl md:max-w-none xl:pl-0"
      />
      <div
        class="grid w-full grid-cols-2 gap-2 p-2 md:grid-cols-3 md:gap-4 xl:p-4"
      >
        <div
          class="flex max-w-sm flex-col gap-4"
          v-for="designeArray in designMultipleArray"
          :key="designeArray.id"
        >
          <template v-for="desginEl in designeArray">
            <HomeDesignCard
              :design="desginEl"
              v-if="desginEl"
              :key="desginEl.id"
              :id="'designCard-' + desginEl.id"
              @click="openModalHandler(desginEl)"
            />
          </template>
        </div>
      </div>
    </div>
    <ModalImage
      v-if="isModalOpen"
      :modalData="activeItemModalData"
      @click="closeModalHandler"
      @keyup.esc="closeModalHandler"
      tabindex="-1"
    />
  </section>
</template>

<script>
import HomeTitle from './HomeTitle.vue';

import HomeDesignCard from './HomeDesignCard.vue';
import { ref } from '@vue/reactivity';
import { onMounted, watch, watchEffect, defineEmits } from '@vue/runtime-core';
import { useQuery, useResult } from '@vue/apollo-composable';

import gql from 'graphql-tag';
import ModalImage from './ModalImage.vue';
export default {
  components: {
    HomeTitle,
    HomeDesignCard,
    ModalImage,
  },
  setup() {
    const designMultipleArray = ref([]);
    const columnLength = ref(null);
    const createDesignArray = (start) => {
      let newArray = [];
      designData.value.forEach((element, index) => {
        index = index + start;
        if (index % columnLength.value === 0) {
          newArray.push(element);
        }
      });
      designMultipleArray.value.push(newArray);
    };
    const handlerCreateDoubleDesignArray = () => {
      designMultipleArray.value.length = 0;
      columnLength.value = 2;
      createDesignArray(0);
      createDesignArray(1);
    };
    const handlerCreateTripleDesignArray = () => {
      designMultipleArray.value.length = 0;
      columnLength.value = 3;
      createDesignArray(0);
      createDesignArray(2);
      createDesignArray(1);
    };
    const checkForScreenSize = () => {
      if (window.innerWidth <= 768 && columnLength.value !== 2) {
        handlerCreateDoubleDesignArray();
      } else if (window.innerWidth > 768 && columnLength.value !== 3) {
        handlerCreateTripleDesignArray();
      }
    };
    const { result } = useQuery(gql`
      query {
        designs(pagination: { start: 0, limit: 20 }) {
          data {
            id
            attributes {
              title
              color {
                value
              }
              img {
                data {
                  attributes {
                    url
                    formats
                    alternativeText
                  }
                }
              }
            }
          }
        }
      }
    `);
    const designData = useResult(result, null, (data) => data.designs.data);
    window.addEventListener('resize', checkForScreenSize);
    onMounted(() => {});
    watchEffect(() => {
      if (designData.value) {
        checkForScreenSize();
      }
    });
    const activeItemModalData = ref(null);
    const isModalOpen = ref(false);
    const openModalHandler = (data) => {
      activeItemModalData.value = data;
      isModalOpen.value = true;
    };
    const closeModalHandler = () => {
      isModalOpen.value = false;
      changeFocusToElement();
    };
    const changeFocusToElement = () => {
      document.querySelector('#designCard-' + activeItemModalData.value.id).focus()
    };
    return {
      designMultipleArray,
      openModalHandler,
      isModalOpen,
      closeModalHandler,
      activeItemModalData,
    };
  },
};
</script>

<style lang="scss" scoped></style>
