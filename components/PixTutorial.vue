<template>
  <section class="tuto">
    <h1 class="pix-title-m tuto__title">
      {{ title }}
    </h1>
    <p class="pix-body-l tuto__description">
      {{ description }}
    </p>

    <iframe
      class="tuto__video"
      :src="videoEmbedSrc"
      allowfullscreen
    />

    <ul
      v-if="videoDlHref || fichePdfHref || transcriptPdfHref"
      class="tuto__actions"
    >
      <li
        v-if="videoDlHref"
        class="tuto-actions__item"
      >
        <PixButtonLink
          :href="videoDlHref"
          target="_blank"
          rel="noopener noreferrer"
        >
          Télécharger la video
        </PixButtonLink>
      </li>
      <li
        v-if="fichePdfHref"
        class="tuto-actions__item"
      >
        <PixButtonLink
          :href="fichePdfHref"
          target="_blank"
          rel="noopener noreferrer"
        >
          Télécharger la fiche
        </PixButtonLink>
      </li>
      <li
        v-if="transcriptPdfHref"
        class="tuto-actions__item"
      >
        <PixButtonLink
          :href="transcriptPdfHref"
          background-color="transparent-light"
          target="_blank"
          rel="noopener noreferrer"
        >
          Télécharger la retranscription
        </PixButtonLink>
      </li>
    </ul>

    <ContentDoc :value="page">
      <template #empty />
    </ContentDoc>
  </section>
</template>

<script>
import PixButtonLink from './PixButtonLink.vue';
export default {
  name: 'PixTutorial',
  components: { PixButtonLink },
  props: {
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
    videoEmbedSrc: {
      type: String,
      required: true,
    },
    videoDlHref: {
      type: String,
      default: null,
    },
    fichePdfHref: {
      type: String,
      default: null,
    },
    transcriptPdfHref: {
      type: String,
      default: null,
    },
  },
};
</script>

<style lang="scss">
.tuto {
  .tuto__description {
    margin: 1rem 0 0;
    color: $pix-neutral-50;
  }

  &__video {
    width: 100%;
    max-height: 95vmin;
    aspect-ratio: 16/9;
    margin: 2rem 0 1rem;
  }

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
