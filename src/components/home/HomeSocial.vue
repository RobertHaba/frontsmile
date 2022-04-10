<template>
  <section class="xl:p-4 mt-8 flex justify-center text-white" id="projects">
    <div
      class="relative container p-4 sm:p-12 py-12 flex flex-col-reverse lg:flex-row justify-center items-center gap-8 xl:items-center bg-second rounded-2xl shadow-sm dark:shadow-xl"
    >
      <div
        class="flex flex-col gap-4 sm:flex-wrap pb-2 h-fit text-center sm:text-left"
      >
        <h2 class="flex items-center font-bold text-2xl">
          Śledź mnie na mediach społecznościowych!
        </h2>
        <p class="mb-4">To właśnie tutaj jestem najbardziej aktywny</p>
        <div class="flex justify-center sm:justify-start flex-wrap gap-4">
          <a
            class="flex items-center w-fit bg-white rounded-2xl px-5 py-3 gap-4 shadow-md group hover:animate-pulse"
            v-for="social in socials"
            :key="social.id"
            :href="social.URL"
            :aria-label="'Naciśnij enter, aby przejść do strony ' + social.subtitle"
          >
            <div class="">
              <span class="w-8 h-8 icon" :class="social.icon"></span>
            </div>
            <p
              class="text-xl font-semibold text-dark transition group-hover:text-second"
            >
              {{ social.title }}
            </p>
          </a>
        </div>
      </div>
      <div class="h-60 sm:h-80">
        <img
          class="h-full rounded-full"
          src="../../assets/video/feed.gif"
          alt=""
        />
      </div>
    </div>
  </section>
</template>

<script>
import socialsData from '../../data/socials.json';
export default {
  data() {
    return {
      socials: socialsData.socials,
    };
  },
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped></style>
