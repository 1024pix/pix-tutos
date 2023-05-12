<template>
  <article>
    <PixTutorial
      :page="page"
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
