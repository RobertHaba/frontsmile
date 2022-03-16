<template>
  <div class="dark:text-white">
    <Navbar />
    <HeaderSection />
    <HomeAbout />
    <HomeTechnology />
    <HomeProjects />
    <HomeSocial />
    <HomeDesign />
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue';
import HeaderSection from '../components/home/HeaderSection.vue';
import HomeAbout from '../components/home/HomeAbout.vue';
import HomeTechnology from '../components/home/HomeTechnology.vue';
import HomeProjects from '../components/home/HomeProjects.vue';
import HomeSocial from '../components/home/HomeSocial.vue';
import HomeDesign from '../components/home/HomeDesign.vue';



export default {
  components: {
    Navbar,
    HeaderSection,
    HomeAbout,
    HomeTechnology,
    HomeProjects,
    HomeSocial,
    HomeDesign
  },
  setup() {
    return {};
  },
};
</script>
