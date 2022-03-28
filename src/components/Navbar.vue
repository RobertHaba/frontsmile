<template>
  <div
    class="fixed bottom-0 sm:bottom-none sm:top-0 w-full flex justify-center inset-center z-20 bg bg-white dark:bg-dark"
    :class="{
      'drop-shadow-2xl sm:drop-shadow-xl sm:bg-white sm:dark:bg-dark': isScrollMove,
    }"
    id="navbar"
  >
    <div
      class="container h-16 sm:h-20 flex items-center justify-between pl-8 pr-4 sm:px-4 gap-6 sm:gap-4"
    >
      <router-link to="/" class="font-bold text-2xl">
        <span class="sr-only">Front Smile</span>
        <span
          class="w-10 sm:w-32 h-20 icon icon--logo-small sm:icon--logo dark:icon--logo-dark-small sm:dark:icon--logo-dark"
        ></span>
      </router-link>
      <div class="flex w-full sm:w-fit gap-1">
        <nav class="flex w-full sm:w-fit">
          <ul
            class="flex w-full sm:w-fit justify-around gap-4 border border-transparent border-t-0 border-b-0 border-l-0 pr-4"
          >
            <li
              class="relative ease-in duration-300 hover:text-main group"
              v-for="linkItem in linkData"
              :key="linkItem.id"
            >
              <a
                :href="linkItem.link"
                class="flex flex-col gap-1 text-xs items-center sm:text-base focus:border-b-2 focus:outline-none focus:border-main focus:text-main"
              >
                <span
                  class="w-5 h-5 icon opacity-70 sm:opacity-100 dark:invert sm:hidden"
                  :class="`icon--${linkItem.icon}`"
                ></span>
                <span class="opacity-60 sm:opacity-100">{{
                  linkItem.title
                }}</span>
                <span
                  class="absolute inset-center -bottom-0.5 w-0 h-0.5 bg-main group-hover:w-full ease-in duration-300"
                ></span
              ></a>
            </li>
          </ul>
        </nav>
        <button class="px-4 sm:m-0 sm:hidden" @click="isMenuOpen = !isMenuOpen">
          <span class="w-5 h-5 icon icon--menu-burger opacity-70 dark:invert"></span>
        </button>
        <div
          class="flex items-center p-2 sm:p-0 -z-10 bg-white dark:bg-second sm:dark:bg-dark sm:bg-none sm:dark:bg-none rounded-lg flex-col sm:flex-row absolute right-0 mb-1 sm:mb-0 sm:relative sm:bottom-none sm:gap-1"
        :class="[isMenuOpen?'f-animate-slide-to-top':'hidden sm:flex']"
        >
          <button
            @click="toggleDarkTheme"
            class="relative group p-4 sm:p-0 sm:px-1"
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
          <ul
            class="flex flex-col sm:flex-row gap-2 sm:border sm:border-transparent sm:border-t-0 sm:border-b-0 sm:border-r-0 sm:pl-2"
          >
            <li
              v-for="iconLink in iconLinkData"
              :key="iconLink.id"
              class="relative group shrink-0 sm:px-1"
            >
              <a
                :href="iconLink.link"
                :title="`Przejdź do ${iconLink.title}`"
                class="flex p-4 sm:p-0"
              >
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
  </div>
</template>

<script setup>
import { ref } from '@vue/reactivity';
const linkData = ref([
  {
    id: 0,
    title: 'O mnie',
    link: '#about',
    icon: 'user',
  },
  {
    id: 1,
    title: 'Projekty',
    link: '#projects',
    icon: 'apps',
  },
  {
    id: 2,
    title: 'Kontakt',
    link: '#about',
    icon: 'mail',
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
    icon: 'linkedin',
  },
]);
const isScrollMove = ref(false);
const theme = ref('light');
const isMenuOpen = ref(false)
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
