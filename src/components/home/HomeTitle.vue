<template>
  <h2 class="text-2xl font-bold w-full h-14">
    {{titleText}} <span class="smile-line">{{titleTextSmile}}</span>
  </h2>
</template>

<script>
export default {
  props: {
    titleText: String,
    titleTextSmile: String
  },
};

</script>
