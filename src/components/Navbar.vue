<template>
  <div
    class="fixed container h-14 flex items-center justify-between px-4 inset-center"
  >
    <router-link to="/" class="font-bold text-2xl"
      >Front<span class="relative w-fit smile-line text-gradient"
        >Smile</span
      ></router-link
    >
    <nav class="flex gap-4">
      <ul class="flex gap-4">
        <li
          class="relative ease-in duration-300 hover:text-main group"
          v-for="linkItem in linkData"
          :key="linkItem.id"
        >
          <a :href="linkItem.link" class="focus:border-b-2 focus:outline-none focus:border-main focus:text-main"
            >{{ linkItem.title }}
            <span
              class="absolute inset-center -bottom-0.5 w-0 h-0.5 bg-main group-hover:w-full ease-in duration-300"
            ></span
          ></a>
        </li>
      </ul>
      <ul class="flex gap-2">
        <li v-for="iconLink in iconLinkData" :key="iconLink.id">
          <a :href="iconLink.link" :title="`Przejdź do ${iconLink.title}`">
            <span
              class="block w-6 h-6 bg-auto bg-center"
              :style="`background-image:url(${iconLink.icon})`"
            ></span>
            <span class="sr-only">{{ iconLink.title }}</span>
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script setup>
import { ref } from '@vue/reactivity';
const linkData = ref([
  {
    id: 0,
    title: 'O mnie',
    link: '#about',
    icon: '',
  },
  {
    id: 1,
    title: 'Projekty',
    link: '#about',
    icon: '',
  },
  {
    id: 2,
    title: 'YouTube',
    link: '#about',
    icon: '',
  },
  {
    id: 3,
    title: 'BLOG',
    link: '#about',
    icon: '',
  },
]);
const iconLinkData = ref([
  {
    id: 4,
    title: 'GitHub',
    link: 'https://github.com/RobertHaba',
    icon: 'https://developer.mozilla.org/static/media/github-mark-small.348586b8.svg',
  },
  {
    id: 4,
    title: 'BLOG',
    link: '#about',
    icon: 'https://developer.mozilla.org/static/media/github-mark-small.348586b8.svg',
  },
  {
    id: 4,
    title: 'BLOG',
    link: '#about',
    icon: 'https://developer.mozilla.org/static/media/github-mark-small.348586b8.svg',
  },
]);
</script>

<style lang="scss" scoped></style>
