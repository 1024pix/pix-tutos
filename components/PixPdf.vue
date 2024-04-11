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
          id="open-pdf"
          :href="pdfFilePath"
          target="_blank"
          rel="noopener noreferrer"
        >
          Ouvrir le PDF
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
</style>
