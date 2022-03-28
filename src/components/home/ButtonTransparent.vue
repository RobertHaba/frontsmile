<template>
  <a
    v-for="contact in otherContacts"
    :key="contact.id"
    class="border border-white px-8 py-2 rounded-xl flex items-center gap-2 group transition hover:animate-pulse hover:bg-white hover:text-dark"
    :href="contact.URL"
    ><span
      class="w-4 h-4 icon invert transition group-hover:invert-0"
      :class="contact.icon"
    ></span>
    {{ buttonData.title }}</a
  >
</template>

<script>
export default {
  props: {
    buttonData:Object
  },
};
</script>

<style lang="scss" scoped></style>
