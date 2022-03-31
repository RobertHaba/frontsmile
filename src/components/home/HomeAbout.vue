<template>
  <section class="xl:p-8 mt-8 flex justify-center" id="about">
    <div
      class="container grid w-full grid-rows-auto xl:grid-rows-1 xl:grid-cols-2 px-8 py-12 gap-8 bg-white-second dark:bg-dark rounded-2xl shadow-sm dark:shadow-xl"
    >
      <div class="w-full max-w-lg justify-self-center">
        <HomeTitle titleTextSmile="O mnie" />
        <p class="opacity-80">
          Hej, tu <span>Haba</span>👋! <br />
          Na wstępie powiem, że pracuje w serwisie komputerowym i zostałem
          wylosowany przez życie na darmowego rodzinnego informatyka 😐 <br />
          Oczywiście będąc dumnym Technikiem Informatykiem 🦸 nie mogłem
          zaprzestać tylko na serwisie, więc postanowiłem zagłębiać techniki UI,
          YouTube, Social Media (marketing) i oczywiście uwielbianego
          <span class="line-through">przez wszystkich</span> Frontendu🥳. <br />
          Frontend od kilku dobrych lat gości w moim życiu, a w szczególności w
          ostatnim roku🤭 <br />
          Z okazji, że lubie dzielić się doświadczeniem i wiedzą, to
          postanowiłem otworzyć kanał na YouTube - gdzie póki co zaczynam od
          prostszych zagadnień. 🧑‍🏫 <br />
          Odchodząc od powyższej
          <span class="line-through">typowej</span> postaci Informatyka, dodam
          że uwielbiam uprawiać sport m.in pływanie🏊‍♂️, jazda na rowerze🚴‍♂️,
          bieganie🏃‍♂️, siłownie🏋️‍♂️, siatkówkę🏐 i czasami powalczę z wiszącym
          workiem🤛.
          <br />
          Lubię również grać w planszówki, podróżować, a także atrakcje np.
          kino, gokarty, kajaki itp.🧩
          <br />
          Kończąc ten kawałek tekstu, chciałbym Ci życzyć dużo uśmiechu i
          zachęcam Cię do podjęcia współpracy👨‍💼
        </p>
      </div>
      <div class="w-full max-w-lg grid justify-self-center items-center">
        <div class="flex flex-col md:grid md:grid-cols-2 md:grid-rows-2 gap-4">
          <div class="bg-white dark:bg-dark-light rounded-2xl p-4">
            <h3 class="mb-4 font-bold">Doświadczenie</h3>
            <p class="opacity-80 text-sm font-bold">Serwisman.com - Serwisant</p>
            <p class="opacity-80 text-sm">2019 - aktualnie</p>
          </div>
          <div
            class="order-first md:col-start-2 md:row-start-1 md:row-end-3 grid md:grid-rows-5 bg-white dark:bg-dark-light rounded-2xl p-4"
          >
            <div class="bg-main w-full row-span-2 rounded-2xl">
              <img class="rounded-2xl" src="../../assets/img/me.jpg" alt="" />
            </div>
            <div class="row-span-3 mt-4">
              <p class="font-bold">Robert Hapka</p>
              <ul>
                <li><p class="opacity-80">Wiek: 23 lata</p></li>
                <li><p class="opacity-80">Województwo: Pomorskie</p></li>
              </ul>
            </div>
          </div>
          <div class="bg-white dark:bg-dark-light rounded-2xl p-4">
            <h3 class="mb-4 font-bold">Zainteresowania</h3>
            <p class="opacity-80 text-sm">
              technologie, IT, pływanie, bieganie, siłownia, siatkówka, jazda na
              rowerze, boks, muzyka, filmy, kajaki, gokarty, planszówki
            </p>
          </div>
        </div>
        <div class="flex flex-wrap gap-6 sm:gap-4 justify-center sm:justify-between mt-8 ">
          <a
            href="#"
            class="flex items-center gap-4 w-fit px-8 py-2 bg-second text-white rounded-xl hover:animate-pulse"
          >
            <span
              class="w-4 h-4 icon icon--download invert group-hover:animate-bounce"
            ></span
            >Pobierz CV</a
          >
          <a
            href="#"
            class="flex items-center gap-4 w-fit px-8 py-2 border border-second text-second rounded-xl hover:animate-pulse"
          >
            <span
              class="w-4 h-4 icon icon--briefcase-purple  group-hover:animate-bounce"
            ></span
            >Skontaktuj się</a
          >
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import HomeTitle from './HomeTitle.vue';
HomeTitle;
export default {
  components: {
    HomeTitle,
  },
};
</script>

<style lang="scss" scoped></style>
