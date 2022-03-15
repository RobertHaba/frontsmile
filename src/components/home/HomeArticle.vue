<template>
  <article class="bg-white-second dark:bg-dark shadow-sm dark:shadow-xl rounded-2xl p-6 max-w-md">
    <a href="#">
      <HomeTitle titleText="Ostatni" titleTextSmile="filmik"/>
      <header class="flex gap-4 w-full">
        <picture>
          <img
            class="w-40 bg-dark-light h-24 rounded-2xl object-cover max-w-none border border-main"
            src="../../assets/img/article.png"
            alt=""
          />
        </picture>
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
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      </p>
    </a>
  </article>
</template>
<script>
import HomeTitle from './HomeTitle.vue';
export default {
  components: {
    HomeTitle,
  },
};
</script>

<style lang="scss" scoped></style>
