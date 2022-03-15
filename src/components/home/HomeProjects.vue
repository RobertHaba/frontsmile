<template>
  <section class="xl:p-4 mt-8 flex justify-center" id="projects">
    <div
      class="container p-4 xl:p-12 py-12 flex flex-col gap-4 bg-white-second dark:bg-dark rounded-2xl shadow-sm dark:shadow-xl"
    >
      <HomeTitle
        titleTextSmile="Projekty"
        class="sm:max-w-4xl sm:mx-auto md:max-w-none"
      />
      <div
        class="w-full flex flex-col xl:flex-row justify-between gap-8 xl:gap-16"
      >
        <div
          class="w-full xl:max-w-sm xl:pr-4 sm:max-w-4xl sm:mx-auto md:mx-0 md:max-w-none"
        >
          <div
            class="flex flex-col gap-8 p-4 py-8 bg-main dark:bg-dark-light rounded-2xl"
          >
            <h3 class="text-xl font-semibold">Szybki podgląd</h3>
            <ul
              class="snap-x xl:snap-none flex xl:flex-col gap-4 h-20 xl:h-[290px] overflow-x-scroll overflow-y-hidden xl:overflow-x-hidden xl:overflow-y-scroll"
            >
              <li
                v-for="project in projects"
                class="snap-center group shrink-0"
                :key="project.id"
              >
                <button
                  class="flex gap-4 items-center"
                  @click="
                    (activeProject = project.id),
                      scrollToPreview(),
                      scrollToProject()
                  "
                  :data-preview-project-id="project.id"
                >
                  <div
                    class="flex shrink-0 items-center justify-center w-14 h-14 bg-white-second dark:bg-dark rounded-2xl"
                  >
                    <img
                      class="bg-center transition-all group-hover:p-2"
                      :class="[activeProject == project.id ? 'p-2' : 'p-3']"
                      src="https://tailwindcss.com/_next/static/media/tailwindcss-mark.79614a5f61617ba49a0891494521226b.svg"
                      alt=""
                    />
                  </div>
                  <div class="">
                    <p
                      class="text-lg font-semibold text-left transition-all group-hover:opacity-100"
                      :class="[
                        activeProject == project.id
                          ? 'dark:text-main font-bold'
                          : 'opacity-80',
                      ]"
                    >
                      {{ project.title }}
                    </p>
                    <p
                      class="text-sm"
                      :class="[
                        activeProject == project.id
                          ? 'font-semibold'
                          : 'opacity-60',
                      ]"
                    >
                      {{ project.subtitle }}
                    </p>
                  </div>
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div
          class="w-full max-w-4xl flex flex-col gap-8 h-[400px] sm:mx-auto md:mx-0 md:max-w-none overflow-y-scroll pr-2 xl:px-4"
          id="projectsContainer"
        >
          <div
            class="relative flex flex-col sm:flex-row gap-4 p-4 w-full shrink-0 min-h-[240px] bg-white dark:bg-dark-light rounded-2xl overflow-hidden"
            v-for="project in projects"
            :key="project.id"
            :data-project-id="project.id"
          >
            <div
              class="h-full w-full flex items-center justify-center shrink-0 basis-52 bg-main rounded-2xl"
            >
              <img class="p-2 rounded-2xl" :src="project.image" alt="" />
            </div>
            <div class="flex flex-col gap-2">
              <h3 class="text-2xl font-bold">{{ project.title }}</h3>
              <p class="text-gradient text-sm font-bold w-fit">
                {{ project.technologies }}
              </p>
              <p class="opacity-80 text-sm">
                {{ project.description }}
              </p>
              <div class="h-full flex items-end gap-4 my-4 xl:m-0">
                <a
                  :href="project.linkLive"
                  class="p-8 py-1 border-2 border-second rounded-2xl text-sm font-bold"
                  ><span class="opacity-80">Otwórz</span></a
                >
                <a
                  :href="project.linkCode"
                  class="p-8 py-1 border-2 border-second rounded-2xl text-sm font-bold"
                  ><span class="opacity-80">Kod</span></a
                >
              </div>
            </div>
            <div
              v-if="project.isNew"
              class="absolute flex justify-center w-32 -right-10 top-0 px-4 py-1 gradient rotate-45 translate-y-2/4"
            >
              <p class="text-xs">New</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import HomeTitle from './HomeTitle.vue';
import projectsData from '../../data/projects.json';
import { ref } from '@vue/reactivity';
export default {
  components: {
    HomeTitle,
  },
  data() {
    return {
      projects: projectsData.projects,
    };
  },
  setup() {
    const activeProject = ref(null);
    const scrollToPreview = () => {
      console.log(activeProject.value);
      const elementToScroll = document.querySelector(
        `[data-preview-project-id="${activeProject.value}"]`
      );
      console.log(elementToScroll);
      elementToScroll.scrollIntoView();
    };
    const scrollToProject = () => {
      console.log('asd');

      const projectElement = document.querySelector(
        `[data-project-id="${activeProject.value}"]`
      );
      projectElement.scrollIntoView({ behavior: 'smooth' });
    };
    return { activeProject, scrollToProject, scrollToPreview };
  },
};
</script>
