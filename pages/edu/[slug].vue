<template>
  <article>
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
  async setup() {
    const slug = useRoute().params.slug || 'index';

    const page = await queryContent(`/edu/${slug}`)
      .findOne()
      .catch((err) => {
        console.error(err);
        useError({ statusCode: 404, message: "Ce tuto n'existe pas." });
      });

    useHead({
      title: page.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: page.description,
        },
      ],
    });

    return {
      page,
    };
  },
  computed: {
    videoEmbedSrc() {
      return customizeEmbedVideo(this.page.videoEmbedSrc);
    },
  },
};
</script>
