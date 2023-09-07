<script setup>
import { computed, ref } from 'vue'
import customizeEmbedVideo from '~/services/customizing-embed-video'

definePageMeta({ layout: 'edu' })

const page = ref(null)

const videoEmbedSrc = computed(() => {
  return customizeEmbedVideo(page.value.videoEmbedSrc)
})

const slug = useRoute().params.slug || 'index'

page.value = await queryContent(`/edu/${slug}`)
  .findOne()
  .catch((err) => {
    console.error(err)
    useError({ statusCode: 404, message: 'Ce tuto n\'existe pas.' })
  })

useHead({
  title: page.value.title,
  meta: [
    {
      hid: 'description',
      name: 'description',
      content: page.value.description,
    },
  ],
})

function downloadTranscript() {
  window.print()
}
</script>

<template>
  <article>
    <PixTutorial
      :page="page"
      :title="page.title"
      :description="page.description"
    >
      <iframe
        class="tuto__video"
        :src="videoEmbedSrc"
        allowfullscreen
      />

      <ul
        class="tuto__actions"
      >
        <li
          v-if="page.videoDownloadHref"
          class="tuto-actions__item"
        >
          <PixButtonLink
            id="download-video"
            :href="page.videoDownloadHref"
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
    </PixTutorial>
  </article>
</template>

<style lang="scss">
.tuto {
  &__video {
    width: 100%;
    max-height: 95vmin;
    aspect-ratio: 16/9;
    margin: 1rem 0 1rem;
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
</style>
