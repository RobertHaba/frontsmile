<template>
  <div class="text-white">
    <Navbar />
    <HeaderSection />
    <HomeAbout />
    <HomeTechnology />
    <HomeProjects />
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue';
import HeaderSection from '../components/home/HeaderSection.vue';
import HomeAbout from '../components/home/HomeAbout.vue';
import HomeTechnology from '../components/home/HomeTechnology.vue';
import HomeProjects from '../components/home/HomeProjects.vue';

export default {
  components: {
    Navbar,
    HeaderSection,
    HomeAbout,
    HomeTechnology,
    HomeProjects,
  },
  setup() {
    return {};
  },
};
</script>
