<template>
  <div
    ref="refModalEl"
    class="max-w-screen fixed top-0 left-0 z-40 flex h-full max-h-screen w-full justify-center bg-dark/80 p-8 py-24"
    aria-label="Naciśnij esc, aby zamknąć modal"
  >
    <picture class="relative flex items-center">
      <source media="(min-width: 1000px)" :srcset="hasLargeFormat" />
      <source
        media="(min-width: 750px)"
        :srcset="
          props.modalData.attributes.img.data.attributes.formats.medium.url
        "
      />
      <img
        class="max-h-full"
        v-lazy="
          props.modalData.attributes.img.data.attributes.formats.small.url
        "
        alt=""
      />
    </picture>
    <button class="sr-only">Close</button>
  </div>
</template>

<script setup>
import { computed, inject, onMounted, onUnmounted, ref } from 'vue';
const props = defineProps({
  modalData: Object,
});
const refModalEl = ref(null);
const hasLargeFormat = computed(() => {
  return props.modalData.attributes.img.data.attributes.formats.large
    ? props.modalData.attributes.img.data.attributes.formats.large.url
    : '';
});
onMounted(() => {
  refModalEl.value.focus();
  document.querySelector('body').style.overflow = 'hidden';
});
onUnmounted(() => {
  document.querySelector('body').style.overflow = 'auto';
});
</script>

<style lang="scss" scoped></style>
