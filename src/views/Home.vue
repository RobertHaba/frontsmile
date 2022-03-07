<template>
  <div class="text-white">
    <Navbar />
    <HeaderSection />
  </div>
</template>

<script>
import HeaderSection from '../components/home/HeaderSection.vue';
import Navbar from '../components/Navbar.vue';

export default {
  components: {
    HeaderSection,
    Navbar
  },
  setup() {
    return {};
  },
};
</script>
