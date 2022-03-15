<template>
  <div
    class="fixed top-0 left-0 w-full flex justify-center inset-center z-20 bg dark:bg-dark-light"
    :class="{ 'drop-shadow-xl bg-white dark:bg-dark': isScrollMove }"
    id="navbar"
  >
    <div class="container h-20 flex items-center justify-between px-4">
      <router-link to="/" class="font-bold text-2xl"
        >Front<span class="relative w-fit smile-line text-gradient"
          >Smile</span
        ></router-link
      >
      <div class="flex gap-1">
        <nav>
          <ul class="flex gap-4 border border-transparent border-t-0 border-b-0  border-l-0 pr-4">
            <li
              class="relative ease-in duration-300 hover:text-main group"
              v-for="linkItem in linkData"
              :key="linkItem.id"
            >
              <a
                :href="linkItem.link"
                class="focus:border-b-2 focus:outline-none focus:border-main focus:text-main"
                >{{ linkItem.title }}
                <span
                  class="absolute inset-center -bottom-0.5 w-0 h-0.5 bg-main group-hover:w-full ease-in duration-300"
                ></span
              ></a>
            </li>
          </ul>
        </nav>
        <button
          @click="toggleDarkTheme"
          class="relative px-1 group"
          title="Przełącz tryb"
        >
          <span
            class="w-5 h-5 icon opacity-80 group-hover:opacity-100"
            :class="[theme === 'light' ? 'icon--moon' : 'icon--sun invert']"
          >
            <span class="sr-only"
              >Przełącz tryb na span
              {{ theme === 'light' ? 'ciemny' : 'jasny' }}</span
            >
          </span>
          <span
            class="absolute inset-center -bottom-0.5 w-0 h-0.5 bg-main group-hover:w-full ease-in duration-300"
          ></span>
        </button>
        <ul class="flex gap-2 border border-transparent border-t-0 border-b-0 border-r-0 pl-2">
          <li
            v-for="iconLink in iconLinkData"
            :key="iconLink.id"
            class="relative group shrink-0 px-1"
          >
            <a :href="iconLink.link" :title="`Przejdź do ${iconLink.title}`" >
              <span
                class="block w-6 h-6 icon opacity-80"
                :class="[
                  theme === 'light' ? '' : 'invert',
                  `icon--${iconLink.icon}`,
                ]"
              ></span>
              <span class="sr-only">{{ iconLink.title }}</span>
              <span
                class="absolute inset-center -bottom-0.5 w-0 h-0.5 bg-main group-hover:w-full ease-in duration-300"
              ></span>
            </a>
          </li>
        </ul>
      </div>
    </div>
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
    link: '#projects',
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
    icon: 'github',
  },
  {
    id: 4,
    title: 'Linkedin',
    link: '#about',
    icon: 'linkedin',
  },
  {
    id: 4,
    title: 'BLOG',
    link: '#about',
    icon: 'https://developer.mozilla.org/static/media/github-mark-small.348586b8.svg',
  },
]);
const isScrollMove = ref(false);
const theme = ref('light');
const handlerOnScroll = (e) => {
  isScrollMove.value = window.scrollY > 0;
};
const toggleDarkTheme = () => {
  const themeMode = localStorage.theme === 'dark' ? 'light' : 'dark';
  document.documentElement.classList.remove('dark');
  document.documentElement.classList.add(themeMode);
  theme.value = themeMode;
  setThemeInLocalStorage(themeMode);
};
const setThemeInLocalStorage = (themeMode) => {
  localStorage.setItem('theme', themeMode);
};
const loadThemeFromLocalStorage = () => {
  if (localStorage.getItem('theme')) {
    document.documentElement.classList.add(localStorage.getItem('theme'));
    theme.value = localStorage.getItem('theme');
  }
};
loadThemeFromLocalStorage();
window.addEventListener('scroll', handlerOnScroll);
</script>

<style lang="scss" scoped></style>
