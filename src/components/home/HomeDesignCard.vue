<template>
  <button class="flex flex-col gap-3 sm:gap-4 w-full group" aria-label="Naciśnij enter, aby otworzyć podgląd zdjęcia" title="Podgląd">
    
    <div
      class="relative w-full bg-main px-2 py-1 sm:px-8 sm:py-4 rounded-xl shadow-md overflow-hidden"
      :style="`background-color:${design.attributes.color[0].value}CC`"
    >
      <img class="rounded-xl shadow-lg transition group-hover:scale-125" v-lazy="backendURL + design.attributes.img.data.attributes.formats.small.url" :alt="design.attributes.img.data.attributes.alternativeText" />
    </div>
    <div class="flex items-center justify-between w-full">
      <h3 class="opacity-80 font-semibold text-xs sm:text-base">{{ design.attributes.title }}</h3>
      <div class="flex gap-0.5 sm:gap-1">
        <div
          class="w-4 h-4 rounded-full bg-main border border-dark/20 dark:border-white/20"
          :style="`background-color:${color.value}`"
          v-for="color in design.attributes.color"
          :key="color.id"
        ></div>
      </div>
    </div>
  </button>
</template>

<script>
import { inject } from '@vue/runtime-core';
export default {
  props: {
    design: Object,
  },
  setup(){
    const backendURL = inject('backendURL')
    return {backendURL}
  }
};
</script>

<style lang="scss" scoped></style>
