<template>
  <div
    class="sm:bottom-none inset-center bg fixed bottom-0 z-[2147483645] flex w-full justify-center bg-white dark:bg-dark sm:top-0"
    :class="{
      'drop-shadow-2xl sm:bg-white sm:drop-shadow-xl sm:dark:bg-dark':
        isScrollMove,
    }"
    id="navbar"
  >
    <div
      class="container flex h-16 items-center justify-between gap-6 pl-8 pr-4 sm:h-20 sm:gap-4 sm:px-4"
    >
      <router-link to="/" class="text-2xl font-bold">
        <span class="sr-only">Front Smile</span>
        <span
          class="icon icon--logo-small sm:icon--logo dark:icon--logo-dark-small sm:dark:icon--logo-dark h-20 w-10 sm:w-32"
        ></span>
      </router-link>
      <div class="flex w-full gap-1 sm:w-fit">
        <nav class="relative flex w-full sm:w-fit">
          <ul
            class="flex w-full justify-around gap-4 border border-t-0 border-b-0 border-l-0 border-transparent pr-4 sm:w-fit"
          >
            <li
              class="group relative duration-300 ease-in hover:text-main"
              v-for="linkItem in linkData"
              :key="linkItem.id"
            >
              <a
                :href="linkItem.link"
                class="flex flex-col items-center gap-1 text-xs focus:border-b-2 focus:border-main focus:text-main focus:outline-none sm:text-base"
              >
                <span
                  class="icon h-5 w-5 opacity-70 dark:invert sm:hidden sm:opacity-100"
                  :class="`icon--${linkItem.icon}`"
                ></span>
                <span class="opacity-60 sm:opacity-100">{{
                  linkItem.title
                }}</span>
                <span
                  class="inset-center absolute -bottom-0.5 h-0.5 w-0 bg-main duration-300 ease-in group-hover:w-full"
                ></span
              ></a>
            </li>
          </ul>
        </nav>
        <button
          class="relative px-4 sm:m-0 sm:hidden"
          @click="isMenuOpen = !isMenuOpen"
        >
          <span
            class="icon icon--menu-burger h-5 w-5 opacity-70 dark:invert"
          ></span>
        </button>
        <div
          class="sm:bottom-none absolute -right-full bottom-full -z-10 mb-1 flex flex-col items-center rounded-lg bg-white p-2 dark:bg-second sm:static sm:right-0 sm:z-0 sm:mb-0 sm:flex sm:flex-row sm:gap-1 sm:bg-none sm:p-0 sm:dark:bg-dark sm:dark:bg-none"
          :class="{
            'f-animate-slide-to-right': isMenuOpen,
            'f-animate-slide-hide-right animate-reverse ': isMenuOpen === false,
          }"
        >
          <button
            @click="toggleDarkTheme"
            class="group relative p-4 sm:p-0 sm:px-1"
            title="Przełącz tryb"
          >
            <span
              class="icon h-5 w-5 opacity-80 group-hover:opacity-100"
              :class="[store.theme === 'light' ? 'icon--moon' : 'icon--sun invert']"
            >
              <span class="sr-only"
                >Przełącz tryb na span
                {{ store.theme === 'light' ? 'ciemny' : 'jasny' }}</span
              >
            </span>
            <span
              class="inset-center absolute -bottom-0.5 h-0.5 w-0 bg-main duration-300 ease-in group-hover:w-full"
            ></span>
          </button>
          <ul
            class="flex flex-col gap-2 sm:flex-row sm:border sm:border-t-0 sm:border-b-0 sm:border-r-0 sm:border-transparent sm:pl-2"
          >
            <li
              v-for="iconLink in iconLinkData"
              :key="iconLink.id"
              class="group relative shrink-0 sm:px-1"
            >
              <a
                :href="iconLink.link"
                :title="`Przejdź do ${iconLink.title}`"
                class="flex p-4 sm:p-0"
              >
                <span
                  class="icon block h-6 w-6 opacity-80"
                  :class="[
                    store.theme === 'light' ? '' : 'invert',
                    `icon--${iconLink.icon}`,
                  ]"
                ></span>
                <span class="sr-only">{{ iconLink.title }}</span>
                <span
                  class="inset-center absolute -bottom-0.5 h-0.5 w-0 bg-main duration-300 ease-in group-hover:w-full"
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
import { store } from '../store/store';
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
    link: '#contact',
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
    title: 'YouTube',
    link: 'https://github.com/RobertHaba',
    icon: 'youtube-black',
  },
  {
    id: 4,
    title: 'Linkedin',
    link: '#about',
    icon: 'linkedin',
  },
  {
    id: 4,
    title: 'Facebook',
    link: 'https://www.facebook.com/frontsmile',
    icon: 'facebook-black',
  },
]);
const isScrollMove = ref(null);
const isMenuOpen = ref(undefined);
const handlerOnScroll = (e) => {
  isScrollMove.value = window.scrollY > 0;
};
const toggleDarkTheme = () => {
  const themeMode = localStorage.theme === 'dark' ? 'light' : 'dark';
  document.documentElement.classList.remove('dark');
  document.documentElement.classList.add(themeMode);
  store.theme = themeMode;
  setThemeInLocalStorage(themeMode);
};
const setThemeInLocalStorage = (themeMode) => {
  localStorage.setItem('theme', themeMode);
};
const loadThemeFromLocalStorage = () => {
  if (localStorage.getItem('theme')) {
    document.documentElement.classList.add(localStorage.getItem('theme'));
    store.theme = localStorage.getItem('theme');
  }
};
loadThemeFromLocalStorage();
window.addEventListener('scroll', handlerOnScroll);
</script>

<style lang="scss" scoped></style>
