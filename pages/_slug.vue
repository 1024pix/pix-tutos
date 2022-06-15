<template>
  <PixTutorial
    :title="page.title"
    :description="page.description"
    :video-embed-src="page.videoEmbedSrc"
    :video-dl-href="page.videoDLHref"
    :fiche-pdf-href="page.fichePdfHref"
    :transcript-pdf-href="page.transcriptPdfHref"
  />
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
};
</script>
