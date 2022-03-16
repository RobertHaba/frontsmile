<template>
  <div class="flex flex-col gap-3 sm:gap-4 w-full ">
    <div
      class="w-full bg-main px-2 py-1 sm:px-8 sm:py-4 rounded-xl shadow-md"
      :style="`background-color:${design.palette[0]}`"
    >
      <img class="rounded-xl shadow-lg" :src="design.URL" alt="" />
    </div>
    <div class="flex items-center justify-between">
      <h3 class="opacity-80 font-semibold text-xs sm:text-base">{{ design.title }}</h3>
      <div class="flex gap-0.5 sm:gap-1">
        <div
          class="w-4 h-4 rounded-full bg-main border border-dark/20 dark:border-white/20"
          :style="`background-color:${color}`"
          v-for="color in design.palette"
          :key="color.id"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    design: Object,
  },
};
</script>

<style lang="scss" scoped></style>
