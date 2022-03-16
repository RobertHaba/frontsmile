<template>
  <section class="mt-8 flex justify-center" id="projects">
    <div
      class="container md:p-4 xl:p-12 py-12 flex flex-col gap-4 bg-white-second dark:bg-dark rounded-2xl shadow-sm dark:shadow-xl"
    >
      <HomeTitle
        titleTextSmile="Designe"
        class="sm:max-w-4xl pl-4 xl:pl-0 sm:mx-auto md:max-w-none"
      />
      <div class="w-full p-2 xl:p-4 grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-4">
        <div
          class="flex flex-col gap-4 max-w-sm"
          v-for="designeArray in designMultipleArray"
          :key="designeArray.id"
        >
          <HomeDesignCard
            :design="desginEl"
            v-for="desginEl in designeArray"
            :key="desginEl.id"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import HomeTitle from './HomeTitle.vue';

import HomeDesignCard from './HomeDesignCard.vue';
import designeData from '../../data/designe.json';
import { ref } from '@vue/reactivity';
import { onMounted } from '@vue/runtime-core';
export default {
  components: {
    HomeTitle,
    HomeDesignCard,
  },
  setup() {
    const designMultipleArray = ref([]);
    const columnLength = ref(null);
    const createDesignArray = (start) => {
      let newArray = [];
      designeData.desgin.forEach((element, index) => {
        index = index + start;
        if (index % columnLength.value === 0) {
          newArray.push(element);
        }
      });
      console.log(designMultipleArray.value);
      designMultipleArray.value.push(newArray);
    };
    const handlerCreateDoubleDesignArray = () => {
      designMultipleArray.value.length = 0;
      columnLength.value = 2;
      createDesignArray(0);
      createDesignArray(1);
    };
    const handlerCreateTripleDesignArray = () => {
      designMultipleArray.value.length = 0;
      columnLength.value = 3;
      createDesignArray(0);
      createDesignArray(2);
      createDesignArray(1);
    };
    const checkForScreenSize = () => {
      if (window.innerWidth <= 768 && columnLength.value !== 2) {
        handlerCreateDoubleDesignArray();
      } else if (window.innerWidth > 768 && columnLength.value !== 3) {
        handlerCreateTripleDesignArray();
      }
    };
    window.addEventListener('resize', checkForScreenSize);
    onMounted(() => {
      checkForScreenSize()
    });
    return { designMultipleArray };
  },
};
</script>

<style lang="scss" scoped></style>
