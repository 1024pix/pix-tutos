<script setup>
defineProps({
  page: {
    type: Object,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <section class="tuto">
    <h1 class="pix-title-m tuto__title">
      {{ title }}
    </h1>
    <p class="pix-body-l tuto__description">
      {{ description }}
    </p>

    <slot />

    <ContentDoc :value="page">
      <template #empty />
    </ContentDoc>
  </section>
</template>

<style lang="scss">
.tuto {
  .tuto__description {
    margin: 1rem 0 1rem 0;
    color: var(--pix-neutral-500);
  }
}
</style>
