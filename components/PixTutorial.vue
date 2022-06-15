<template>
  <section class="tuto">
    <h1 class="tuto__title">{{ title }}</h1>
    <p class="tuto__description">{{ description }}</p>
    <iframe class="tuto__video" :src="videoEmbedSrc" />
    <ul
      v-if="videoDlHref || fichePdfHref || transcriptPdfHref"
      class="tuto__actions"
    >
      <li v-if="videoDlHref" class="tuto-actions__item">
        <PixButtonLink
          :href="videoDlHref"
          target="_blank"
          rel="noopener noreferrer"
        >
          Télécharger la video
        </PixButtonLink>
      </li>
      <li v-if="fichePdfHref" class="tuto-actions__item">
        <PixButtonLink
          :href="fichePdfHref"
          target="_blank"
          rel="noopener noreferrer"
        >
          Télécharger la fiche
        </PixButtonLink>
      </li>
      <li v-if="transcriptPdfHref" class="tuto-actions__item">
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
  </section>
</template>

<script>
import PixButtonLink from './PixButtonLink.vue';
export default {
  name: 'PixTutorial',
  components: { PixButtonLink },
  props: {
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
.tuto__title {
  margin: 0;
  font-weight: 300;
  font-size: 3rem;
  line-height: 1.25;
  text-align: center;
  letter-spacing: -0.04em;
  color: $black-90;
}

.tuto__description {
  margin: 1rem 0 0;
  font-style: normal;
  font-weight: 400;
  font-size: 1.25rem;
  line-height: 1.4;
  text-align: center;
  color: $black-60;
}

.tuto__video {
  width: 100%;
  max-height: 95vmin;
  aspect-ratio: 16/9;
  margin: 2rem 0;
}

.tuto__actions {
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  gap: 1rem;
  padding: 0;
  margin: 0;
}
</style>
