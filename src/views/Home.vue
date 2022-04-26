<template>
  <div class="dark:text-white">
    <Navbar />
    <HeaderSection />
    <HomeHeaderMedia />
    <HomeAbout />
    <HomeTechnology />
    <HomeProjects />
    <HomeSocial />
    <HomeDesign />
    <HomeFooter />
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue';
import HeaderSection from '../components/home/HeaderSection.vue';
import HomeHeaderMedia from '../components/home/HomeHeaderMedia.vue';
import HomeAbout from '../components/home/HomeAbout.vue';
import { defineAsyncComponent } from '@vue/runtime-core';


export default {
  components: {
    Navbar,
    HeaderSection,
    HomeHeaderMedia,
    HomeAbout,
    "HomeTechnology": defineAsyncComponent(()=> import('../components/home/HomeTechnology.vue')),
    "HomeProjects": defineAsyncComponent(()=> import('../components/home/HomeProjects.vue')),
    "HomeSocial": defineAsyncComponent(()=> import('../components/home/HomeSocial.vue')),
    "HomeDesign": defineAsyncComponent(()=> import('../components/home/HomeDesign.vue')),
    "HomeFooter": defineAsyncComponent(()=> import('../components/home/HomeFooter.vue')),
    
  },
  setup() {
    return {};
  },
};
</script>
