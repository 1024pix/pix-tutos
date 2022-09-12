<template>
  <article>
    <NuxtLink :to="{ name: 'edu' }"> ‹ Retour à la liste </NuxtLink>

    <PixTutorial
      :title="page.title"
      :description="page.description"
      :video-embed-src="videoEmbedSrc"
      :video-dl-href="page.videoDLHref"
      :fiche-pdf-href="page.fichePdfHref"
      :transcript-pdf-href="page.transcriptPdfHref"
    />
  </article>
</template>

<script>
import customizeEmbedVideo from '~/services/customizing-embed-video';

export default {
  layout: 'edu',
  async asyncData({ $content, params, error }) {
    const slug = params.slug || 'index';

    const page = await $content('edu', slug)
      .fetch()
      .catch((err) => {
        console.error(err);
        error({ statusCode: 404, message: "Ce tuto n'existe pas." });
      });

    return {
      page,
    };
  },
  head() {
    return {
      title: this.page.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.page.description,
        },
      ],
    };
  },
  computed: {
    videoEmbedSrc() {
      return customizeEmbedVideo(this.page.videoEmbedSrc);
    },
  },
};
</script>

<style lang="scss" scoped>
a {
  font-family: $roboto;
  font-style: normal;
  font-weight: 400;
  font-size: 1.5rem;
  line-height: 2rem;
  color: $black-90;
  margin: 0;

  &:hover {
    color: $blue-hover;
    text-decoration-color: $blue-hover;
  }
}
</style>
