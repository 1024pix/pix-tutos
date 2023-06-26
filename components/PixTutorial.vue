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
      class="tuto__actions"
    >
      <li
        v-if="videoDownloadHref"
        class="tuto-actions__item"
      >
        <PixButtonLink
          id="download-video"
          :href="videoDownloadHref"
          target="_blank"
          rel="noopener noreferrer"
        >
          Télécharger la video
        </PixButtonLink>
      </li>
      <li
        class="tuto-actions__item"
      >
        <PixButton
          id="download-transcript"
          :action="downloadTranscript"
        >
          Télécharger la transcription
        </PixButton>
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
    videoDownloadHref: {
      type: String,
      default: null,
    },
  },
  methods: {
    downloadTranscript() {
      window.print();
    },
  }
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
