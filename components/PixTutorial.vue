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
    color: $pix-neutral-50;
  }
}

.nuxt-content {
  margin-top: 32px;
  color: $pix-neutral-70;
  font-size: 0.875rem;
  line-height: 1.25rem;
  border-top: 1px solid $pix-neutral-22;

  h2 {
    margin: 32px 0 8px;
    color: $pix-neutral-90;
    font-size: 1.25rem;
    font-weight: 500;
  }
}
</style>
