<template>
  <section class="mt-4 flex w-full justify-center text-white">
    <div
      class="container grid grid-rows-2 gap-8 xl:grid-cols-2 xl:grid-rows-none xl:p-4"
    >
      <div
        class="flex w-full max-w-lg justify-self-center rounded-2xl bg-second p-8 shadow-sm dark:shadow-xl"
        v-for="technology in technologies"
        :key="technology.id"
      >
        <div class="max-w-md">
          <h2 class="mb-2 text-2xl font-bold">
            {{ technology.attributes.title }}
          </h2>
          <div
            class="mb-3"
            v-for="technologyContent in technology.attributes.technology"
            :key="technologyContent.id"
          >
            <p class="mb-1">{{ technologyContent.title }}</p>
            <div class="flex gap-4 flex-wrap">
              <div
                v-for="technologyIcon in technologyContent.icon"
                :key="technologyIcon.id"
                class="flex flex-col items-center gap-0.5"
              >
                <span
                  class="icon h-8 w-8"
                  :style="`background-image:url('${technologyIcon.icon.data[0].attributes.url}')`"
                  :title="technologyIcon.title"
                ></span>
                <p class="text-[0.7rem]">{{ technologyIcon.title }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useQuery, useResult } from '@vue/apollo-composable';
import gql from 'graphql-tag';
const { result } = useQuery(gql`
  query {
    technologies {
      data {
        attributes {
          title
          technology {
            title
            icon {
              title
              icon {
                data {
                  attributes {
                    url
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`);
const technologies = useResult(result, null, (data) => data.technologies.data);
</script>
