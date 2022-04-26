<template>
  <div class="relative flex w-full max-w-sm justify-center pt-8">
    <button
      class="rounded-md border px-6 py-2 font-bold transition-all hover:animate-pulse hover:bg-second hover:text-white"
      title="Otwórz podgląd dla Geeka"
      @click="toggleModal = !toggleModal"
    >
      GeekSmiler🤓
    </button>
    <div
      class="absolute bottom-full flex w-full max-w-sm flex-col gap-4 rounded-lg bg-dark p-4 text-white shadow-xl"
      v-if="toggleModal"
    >
      <button
        class="absolute left-0 top-0 flex w-full justify-center"
        @click="toggleModal = !toggleModal"
        title="Zamknij podgląd dla Geeka"
      >
        <div class="mt-1 rounded-b-full bg-dark px-3.5 py-1.5">
          <span
            class="icon icon--close h-6 w-6 invert transition-all hover:opacity-70"
          ></span>
        </div>
        <span class="sr-only">Zamknij</span>
      </button>
      <div
        class="gradient flex items-center justify-between rounded-md p-4 py-2"
      >
        <h3 class="text-xl font-bold">GeekSmiler</h3>
        <span class="icon icon--illustration-design h-16 w-16"></span>
      </div>
      <div class="flex flex-col gap-4">
        <div class="flex flex-col gap-3">
          <h4>{{ geekObject.colors.title }}</h4>
          <div class="flex flex-wrap gap-3">
            <span
              class="h-8 w-8 rounded-md border"
              v-for="geekColor in geekObject.colors.data"
              :style="`background-color: ${geekColor}`"
              :key="geekColor"
              :title="'Kolor: ' + geekColor"
            ></span>
          </div>
        </div>
        <div
          class="flex flex-col gap-3"
          v-for="geekInfo in geekObject.info"
          :key="geekInfo.title"
        >
          <h4>{{ geekInfo.title }}</h4>
          <div class="flex flex-wrap gap-3">
            <component
              :is="geekData.link ? 'a' : 'p'"
              class="w-fit rounded-md bg-dark-light px-4 py-2 text-xs opacity-90"
              v-for="geekData in geekInfo.data"
              :key="geekData"
              :href="geekData.link"
            >
              {{ geekData.text }}
            </component>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from '@vue/reactivity';
import geekObject from '../../data/geekinfo.json';
const toggleModal = ref(false);
</script>
