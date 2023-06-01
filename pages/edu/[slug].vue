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
import { ref, computed } from 'vue';
import customizeEmbedVideo from '~/services/customizing-embed-video';

definePageMeta({ layout: 'edu' })

export default {
  async setup() {
    const page = ref(null);

    const videoEmbedSrc = computed(() => {
        return customizeEmbedVideo(page.value.videoEmbedSrc);
    });


    const slug = useRoute().params.slug || 'index';

    page.value = await queryContent(`/edu/${slug}`)
      .findOne()
      .catch((err) => {
        console.error(err);
        useError({ statusCode: 404, message: "Ce tuto n'existe pas." });
      });

    useHead({
      title: page.value.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: page.value.description,
        },
      ],
    });

    return {
      page,
      videoEmbedSrc,
    };
  },
};
</script>
