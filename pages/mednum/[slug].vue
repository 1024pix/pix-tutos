<script setup>
import { ref } from 'vue'

definePageMeta({ layout: 'mednum' })

const page = ref(null)

const slug = useRoute().params.slug || 'index'

page.value = await queryContent(`/mednum/${slug}`)
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

function printTranscript() {
  window.print()
}
</script>

<template>
  <article>
    <PixTutorial
      :page="page"
      :title="page.title"
      :description="page.description || ''"
    >
      <PixVideoPlayer
        v-if="page.videoEmbedSrc"
        :id="slug"
        :source-mp4="page.videoEmbedSrc"
        :caption-vtt="page.captionFilePath"
      />

      <ul
        v-if="page.videoEmbedSrc"
        class="tuto__actions"
      >
        <li
          class="tuto-actions__item"
        >
          <PixButtonLink
            id="download-video"
            :href="page.videoEmbedSrc"
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
            id="print-transcript"
            :action="printTranscript"
          >
            Imprimer la transcription
          </PixButton>
        </li>
      </ul>
      <PixPdf
        v-if="page.pdfFilePath"
        :id="slug"
        :pdf-file-path="page.pdfFilePath"
      />
    </PixTutorial>
  </article>
</template>

<style lang="scss">
.plyr {
  margin: 2rem 0 1rem;
}

.plyr--fullscreen-fallback {
  margin: 0;
}

.tuto__actions {
    display: flex;
    flex-wrap: wrap;
    list-style-type: none;
    gap: 1rem;
    padding: 0;
    margin: 0 0 2rem;
  }
</style>
