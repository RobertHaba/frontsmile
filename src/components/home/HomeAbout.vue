<template>
  <section class="p-8 mt-8 flex justify-center" id="about">
    <div
      class="container grid w-full grid-cols-2 py-12 gap-8 bg-dark rounded-2xl"
    >
      <div class="w-full max-w-md justify-self-center">
        <HomeTitle titleTextSmile="O mnie" />
        <p class="opacity-80">
          Nazywam się Robert Hapka i obecnie jestem w klasie maturalnej na
          kierunku Technik Informatyk. Moja pasja do kodowania stron
          internetowych rozpoczęła się jakieś dwa lata temu. <br />
          Większość mojej wiedzy pochodzi z nauki praktycznej (wymyślanie
          projektu, a następnie wdrażanie), a także z umiejętności szukania w
          internecie :).<br />
          Większość moich projektów opiera się na czystym html'u, css'ie i
          js'ie, myślę, że niedługo do nich może dołączyć Vue.js, a co dalej to
          zobaczymy. Wolny czas spędzam uprawiając sport (siatkówka, siłownia
          itp.), korzystając z komputera, spotykając się ze znajomymi lub
          spacerując :). Czasami nudzi mnie chodzenie na nogach i wtedy prace
          nóg odgrywają ręce ;)
        </p>
      </div>
      <div class="w-full max-w-lg grid items-center">
        <div class="grid grid-cols-2 grid-rows-2 gap-4">
          <div class="bg-dark-light rounded-2xl p-4">
            <h3 class="mb-4 font-bold">
              <span class="smile-line">Zainteresowania</span>
            </h3>
            <p class="opacity-80 text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequatur aliquam optio sed,
            </p>
          </div>
          <div
            class="col-start-2 row-start-1 row-end-3 grid grid-rows-5 bg-dark-light rounded-2xl p-4"
          >
            <div class="bg-main w-full row-span-2"></div>
            <div class="row-span-3 mt-4">
              <p class="font-bold">Robert Hapka</p>
              <ul>
                <li><p class="opacity-80">Wiek: 23 lata</p></li>
                <li><p class="opacity-80">Województwo: Pomorskie</p></li>
              </ul>
            </div>
          </div>
          <div class="bg-dark-light rounded-2xl p-4">
            <h3 class="mb-4 font-bold">
              <span class="smile-line">Zainteresowania</span>
            </h3>
            <p class="opacity-80 text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequatur aliquam optio sed,
            </p>
          </div>
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
