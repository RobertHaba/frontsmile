<template>
  <article class="bg-white-second dark:bg-dark shadow-sm dark:shadow-xl rounded-2xl p-6 max-w-md">
    <a :href="articleData.URL">
      <HomeTitle titleText="Ostatni" :titleTextSmile="articleData.cardTitle"/>
      <header class="flex gap-4 w-full">
        <picture>
          <img
            class="w-40 bg-dark-light h-24 rounded-2xl object-cover max-w-none border border-main"
            v-lazy="articleData.thumbnail"
            alt=""
          />
        </picture>
        <div class="flex flex-col justify-between">
          <h3 class="font-bold">
            {{articleData.title}}
          </h3>
          <div class="flex gap-1">
            <p class="text-gradient font-bold text-xs">{{articleData.tags}}</p>
          </div>
        </div>
      </header>
      <p class="text-sm py-4 opacity-80">
        {{articleData.shortDescription}}
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
  props:{
    articleData:Object
  }
};
</script>

<style lang="scss" scoped></style>
