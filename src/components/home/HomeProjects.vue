<template>
  <section class="p-4 mt-8 flex justify-center" id="projects">
    <div class="container p-12 py-12 flex flex-col gap-4 bg-dark rounded-2xl">
      <HomeTitle titleTextSmile="Projekty" />
      <div class="w-full flex justify-between gap-16">
        <div
          class="w-full max-w-sm pr-4 h-[400px] overflow-y-scroll"
        >
          <div class="flex flex-col gap-8 p-4 py-8 bg-dark-light rounded-2xl">
            <h3 class="text-xl font-semibold">Szybki podgląd</h3>
            <ul class="flex flex-col gap-4">
              <li v-for="project in projects" :key="project.id">
                <button class="flex gap-4 items-center">
                  <div class="w-14 h-14 bg-dark rounded-2xl">
                    <img src="" alt="" />
                  </div>
                  <div>
                    <p class="opacity-80 text-lg font-semibold text-left">
                      {{ project.title }}
                    </p>
                    <p class="opacity-60 text-sm">{{ project.subtitle }}</p>
                  </div>
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div
          class="w-full max-w-4xl flex flex-col gap-8 h-[400px] overflow-y-scroll px-4"
        >
          <div
            class="relative flex gap-4 p-4 w-full shrink-0 min-h-[240px] bg-dark-light rounded-2xl overflow-hidden"
            v-for="project in projects"
            :key="project.id"
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
              <div class="h-full flex items-end gap-4">
                <a
                  :href="project.linkLive"
                  class="p-8 py-1 border-gradient rounded-2xl text-sm font-bold"
                  ><span class="opacity-80">Otwórz</span></a
                >
                <a
                  :href="project.linkCode"
                  class="p-8 py-1 border-gradient rounded-2xl text-sm font-bold"
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
export default {
  components: {
    HomeTitle,
  },
  data() {
    return {
      projects: projectsData.projects,
    };
  },
};
</script>
