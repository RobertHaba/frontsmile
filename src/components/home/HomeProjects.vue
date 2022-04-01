<template>
  <section class="mt-8 flex justify-center xl:p-4" id="projects">
    <div
      class="container flex flex-col gap-4 rounded-2xl bg-white-second p-4 py-12 shadow-sm dark:bg-dark dark:shadow-xl xl:p-12"
    >
      <HomeTitle
        titleTextSmile="Projekty"
        class="sm:mx-auto sm:max-w-4xl md:max-w-none"
      />
      <div
        class="flex w-full flex-col justify-between gap-8 xl:flex-row xl:gap-16"
      >
        <div
          class="w-full sm:mx-auto sm:max-w-4xl md:mx-0 md:max-w-none xl:max-w-sm xl:pr-4"
        >
          <div
            class="flex flex-col gap-8 rounded-2xl bg-main p-4 py-8 dark:bg-dark-light"
          >
            <h3 class="text-xl font-semibold">Szybki podgląd</h3>
            <ul
              class="flex h-20 snap-x gap-4 overflow-y-hidden overflow-x-scroll xl:h-[290px] xl:snap-none xl:flex-col xl:overflow-x-hidden xl:overflow-y-scroll"
            >
              <li
                v-for="project in projects"
                class="group shrink-0 snap-center"
                :key="project.attributes.id"
              >
                <button
                  class="flex items-center gap-4"
                  @click="(activeProject = project.id), scrollToProject()"
                >
                  <div
                    class="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white-second dark:bg-dark"
                  >
                    <img
                      class="bg-center transition-all group-hover:p-2"
                      :class="[activeProject == project.attributes.id ? 'p-2' : 'p-3']"
                      :src="backendURL + project.attributes.img.data.attributes.formats.thumbnail.url"
                      alt=""
                    />
                  </div>
                  <div class="">
                    <p
                      class="text-left text-lg font-semibold transition-all group-hover:opacity-100"
                      :class="[
                        activeProject == project.attributes.id
                          ? 'font-bold dark:text-main'
                          : 'opacity-80',
                      ]"
                    >
                      {{ project.attributes.title }}
                    </p>
                    <p
                      class="text-sm"
                      :class="[
                        activeProject == project.attributes.id
                          ? 'font-semibold'
                          : 'opacity-60',
                      ]"
                    >
                      {{ project.attributes.subtitle }}
                    </p>
                  </div>
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div
          class="relative flex h-[400px] w-full max-w-4xl flex-col gap-8 overflow-y-scroll pr-2 sm:mx-auto md:mx-0 md:max-w-none xl:px-4"
          id="projectsContainer"
        >
          <div
            class="relative flex min-h-[240px] w-full shrink-0 flex-col gap-4 overflow-hidden rounded-2xl bg-white p-4 dark:bg-dark-light sm:flex-row"
            v-for="project in projects"
            :key="project.id"
            :data-project-id="project.id"
          >
            <div
              class="flex h-full w-full shrink-0 basis-52 items-center justify-center rounded-2xl bg-main"
            >
              <img class="w-full rounded-2xl p-2" :src="backendURL + project.attributes.img.data.attributes.formats.small.url" alt="" />
            </div>
            <div class="flex flex-col gap-2">
              <h3 class="text-2xl font-bold">{{ project.attributes.title }}</h3>
              <p class="text-gradient w-fit text-sm font-bold">
                {{ project.attributes.technologies }}
              </p>
              <p class="text-sm opacity-80">
                {{ project.attributes.description }}
              </p>
              <div class="my-4 flex h-full items-end gap-4 xl:m-0">
                <a
                  :href="project.attributes.linkLive"
                  class="rounded-2xl border-2 border-second p-8 py-1 text-sm font-bold"
                  ><span class="opacity-80">Otwórz</span></a
                >
                <a
                  :href="project.attributes.linkCode"
                  class="rounded-2xl border-2 border-second p-8 py-1 text-sm font-bold"
                  ><span class="opacity-80">Kod</span></a
                >
              </div>
            </div>
            <div
              v-if="project.attributes.isNew"
              class="gradient absolute -right-10 top-0 flex w-32 translate-y-2/4 rotate-45 justify-center px-4 py-1"
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
import { ref } from '@vue/reactivity';
import { inject, onMounted, watch } from '@vue/runtime-core';
import { useQuery, useResult } from '@vue/apollo-composable';
import gql from 'graphql-tag';

export default {
  components: {
    HomeTitle,
  },
  setup() {
    const backendURL = inject('backendURL')
    const activeProject = ref(null);
    let projectsContainer = null;
    const scrollToProject = () => {
      const projectElement = document.querySelector(
        `[data-project-id="${activeProject.value}"]`
      );
      projectsContainer.scrollTop = projectElement.offsetTop;
    };
    onMounted(() => {
      projectsContainer = document.querySelector('#projectsContainer');
    });
    const {result} = useQuery(gql`
      query {
        portfolios {
          data {
            id
            attributes {
              title
              subtitle
              technologies
              description
              linkLive
              linkCode
              img{
                data{
                  attributes{
                    url
                    formats
                  }
                }
              }
            }
          }
        }
      }
    `);
    const projects = useResult(result,null,data=> data.portfolios.data)
    return { activeProject, scrollToProject, projects, backendURL };
  },
};
</script>
