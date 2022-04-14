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
import HomeTechnology from '../components/home/HomeTechnology.vue';
import HomeProjects from '../components/home/HomeProjects.vue';
import HomeSocial from '../components/home/HomeSocial.vue';
import HomeDesign from '../components/home/HomeDesign.vue';
import HomeFooter from '../components/home/HomeFooter.vue';

export default {
  components: {
    Navbar,
    HeaderSection,
    HomeHeaderMedia,
    HomeAbout,
    HomeTechnology,
    HomeProjects,
    HomeSocial,
    HomeDesign,
    HomeFooter
  },
  setup() {
    return {};
  },
};
</script>
