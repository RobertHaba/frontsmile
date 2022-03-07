<template>
  <header class="w-full bg-dark rounded-2xl h-[60vh] flex justify-center">
    <div
      class="relative top-14 container h-full grid grid-cols-2 items-center justify-evenly gap-8 p-8"
    >
      <div class="relative w-full">
        <span
          class="absolute inset-x-0 bottom-0 block w-full max-w-md gradient h-36 rounded-full z-0"
        ></span>
        <img class="relative w-2/4 z-10" src="../../assets/img/me.png" alt="" />
      </div>
      <div class="max-w-md flex flex-col gap-4">
        <p class="font-bold text-7xl">Hej, tu Haba</p>
        <h1 class="relative font-bold text-4xl">
          a to jest Frontend ze
          <span class="relative w-fit block text-gradient smile-line"
            >Smilem</span
          >
        </h1>
      </div>
    </div>
  </header>
  <div class="container h-[35vh] flex gap-8 pt-8">
    <article class="bg-dark rounded-2xl p-6 max-w-sm">
      <a href="#">
        <h2 class="text-2xl mb-6 font-bold">
          Ostatni <span class="relative w-fit smile-line">artykuł</span>
        </h2>
        <header class="flex gap-4">
          <picture class="w-60 bg-dark-light h-24 rounded-2xl"></picture>
          <div class="flex flex-col justify-between">
            <h3 class="font-bold">
              Lorem, ipsum dolor sit amet consectetur adipisic
            </h3>
            <div class="flex gap-1">
              <p class="text-gradient font-bold text-xs">HTML</p>
              <p class="text-gradient font-bold text-xs">CSS</p>
              <p class="text-gradient font-bold text-xs">JS</p>
            </div>
          </div>
        </header>
        <p class="text-sm py-4 opacity-80">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim
        </p>
      </a>
    </article>
  </div>
</template>

<script>
export default {
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped></style>
