<template>
  <section class="tuto">
    <h1 class="tuto__title">{{ page.title }}</h1>
    <p class="tuto__description">{{ page.description }}</p>
    <iframe class="tuto__video" :src="page.videoEmbedSrc" />
    <ul class="tuto__actions">
      <li class="tuto-actions__item">
        <a class="tuto-actions__link" :href="page.videoDLHref">
          Télécharger la video
        </a>
      </li>
      <li class="tuto-actions__item">
        <a class="tuto-actions__link" :href="page.fichePdfHref" target="_blank">
          Télécharger la fiche
        </a>
      </li>
      <li class="tuto-actions__item">
        <a
          class="tuto-actions__link"
          :href="page.transcriptPdfHref"
          target="_blank"
        >
          Télécharger la retranscription
        </a>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  async asyncData({ $content, params, error }) {
    const slug = params.slug || 'index';

    const page = await $content(slug)
      .fetch()
      .catch((err) => {
        console.error(err);
        error({ statusCode: 404, message: "Ce tuto n'existe pas." });
      });

    return {
      page,
    };
  },
};
</script>
