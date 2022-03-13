<template>
  <header class="w-full h-[60vh] flex justify-center p-8">
    <div
      class="relative top-14 container h-full grid grid-cols-2 items-center justify-evenly gap-8 p-8 bg-main rounded-2xl"
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
          <span class="block text-gradient smile-line">Smilem</span>
        </h1>
      </div>
    </div>
  </header>
  <section
    class="w-full mt-8 h-[35vh] rounded-2xl flex items-center justify-center"
  >
    <div
      class="container flex gap-8 mx-auto justify-between items-stretch px-8"
    >
      <HomeArticle class="bg-dark" />
      <HomeArticle class="bg-dark" />
      <div
        class="flex flex-col gap-8 justify-between max-w-sm bg-dark-light rounded-2xl p-6 bg-dark"
      >
        <p>
          <span class="block text-5xl text-gradient font-bold mb-4">56</span>
          Zostawionych <strong>uśmiechów</strong>, wszyscy czekamy na
          <strong>Twój!</strong>
        </p>
        <button
          class="w-full flex justify-center items-center gap-1 rounded-xl border-gradient p-2"
        >
          <span class="icon w-8 h-8 icon--happy mr-4"></span>
          Zostaw <span class="smile-line">uśmiech</span>
        </button>
      </div>
    </div>
  </section>
</template>

<script>
import HomeArticle from './HomeArticle.vue';

export default {
  components: {
    HomeArticle,
  },
  setup() {
    return {};
  },
};
</script>
