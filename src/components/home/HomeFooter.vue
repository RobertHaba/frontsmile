<template>
  <footer class="mt-8 flex justify-center h-auto" id="projects">
    <div
      class="container flex flex-col items-center gap-12 px-4 xl:p-12 py-12 bg-second rounded-2xl shadow-sm dark:shadow-xl"
    >
      <div
        class="flex flex-col md:flex-row justify-between items-center  gap-8 w-full max-w-4xl"
      >
        <div class="w-full max-w-xs h-80 p-4 rounded-full bg-white-second shrink-0">
          <img class="w-full h-full rounded-full" src="../../assets/video/job.gif" alt="" />
        </div>
        <div class="flex flex-col gap-4">
          <p class="text-white text-xl">
            Wspólnie doszliśmy do końca strony, ale tutaj nie musi kończyć się
            ta historia.
          </p>
          <h2 class="text-white text-2xl font-bold">
            Podejmijmy współpracę z uśmiechem
          </h2>
        </div>
      </div>
      <div class="flex flex-col xl:flex-row gap-8 justify-between w-full max-w-4xl">
        <form action="" class="flex flex-col gap-4 w-full max-w-xs">
          <div class="flex flex-col gap-2">
            <label for="" class="text-white font-semibold">Twój email</label>
            <input
              type="text"
              class="h-10 rounded-2xl shadow-md px-4"
              placeholder="nazwa@email.pl"
            />
          </div>
          <div class="flex flex-col gap-2">
            <label for="" class="text-white font-semibold">Tytuł</label>
            <input
              type="text"
              class="h-10 rounded-2xl shadow-md px-4"
              placeholder="tytuł"
            />
          </div>
          <div class="flex flex-col gap-2">
            <label for="" class="text-white font-semibold">Treść</label>
            <textarea
              type="text"
              class="h-36 rounded-2xl shadow-md px-4 py-2"
              placeholder="treść"
            ></textarea>
          </div>
          <button
            type="submit"
            class="border  text-white border-white px-8 py-2 rounded-xl flex items-center justify-center gap-2 group transition hover:animate-pulse hover:bg-white hover:text-dark"
          >
            <span
              class="w-4 h-4 icon icon--send invert transition group-hover:invert-0"
            ></span
            >Wyślij
          </button>
        </form>
        <div class="flex flex-col gap-6 text-white">
          <div class="flex flex-col gap-2">
            <p>
              Nie lubisz formularzy? Nic, nie szkodzi skorzystaj z poniższych
              opcji!
            </p>
            <div class="flex flex-wrap gap-4">
              <a
                v-for="contact in otherContacts"
                :key="contact.id"
                class="border border-white px-8 py-2 rounded-xl flex items-center gap-2 group transition hover:animate-pulse hover:bg-white hover:text-dark"
                :href="contact.URL"
                ><span
                  class="w-4 h-4 icon invert transition group-hover:invert-0"
                  :class="contact.icon"
                ></span>
                {{ contact.title }}</a
              >
            </div>
          </div>
          <div class="flex flex-col gap-2">
            <p>Zgubiłeś CV?</p>
            <button
              class="border border-white px-8 py-2 rounded-xl flex justify-center items-center gap-2 group transition-all hover:font-bold"
            >
              <span
                class="w-4 h-4 icon icon--download invert group-hover:animate-bounce"
              ></span>
              Pobierz CV
            </button>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
const otherContacts = [
  {
    title: 'robert@frontsmile.pl',
    URL: 'mailto:robert@frontsmile.pl',
    icon: 'icon--mail',
  },
  {
    title: '570-354-121',
    URL: 'tel:+48570354121',
    icon: 'icon--phone',
  },
  {
    title: 'Robert Hapka',
    URL: 'mailto:robert@frontsmile.pl',
    icon: 'icon--linkedin',
  },
];
</script>

<style lang="scss" scoped></style>
