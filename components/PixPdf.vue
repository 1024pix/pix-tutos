<script setup>
defineProps({
  id: {
    type: String,
    required: true,
  },
  pdfFilePath: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <section class="pdf">
    <ul
      class="pdf__actions"
    >
      <li
        v-if="pdfFilePath"
        class="pdf-actions__item"
      >
        <PixButtonLink
          id="download-pdf"
          :href="pdfFilePath"
          target="_blank"
          rel="noopener noreferrer"
        >
          Télécharger la pdf
        </PixButtonLink>
      </li>
    </ul>

    <ContentDoc :value="page">
      <template #empty />
    </ContentDoc>
  </section>
</template>

<style lang="scss">
.pdf {
  &__actions {
    display: flex;
    flex-wrap: wrap;
    list-style-type: none;
    gap: 1rem;
    padding: 0;
    margin: 0 0 2rem;
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
