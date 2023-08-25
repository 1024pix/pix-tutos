<script setup>
import Plyr from 'plyr'

defineProps({
  id: {
    type: String,
    required: true,
  },
  sourceMp4: {
    type: String,
    required: true,
  },
  captionVtt: {
    type: String,
    required: true,
  },
})

const video = ref(null)
onMounted(() => {
  // eslint-disable-next-line no-new
  new Plyr(video.value, { hideControls: false })
})
</script>

<template>
  <video
    :id="id"
    ref="video"
    class="pix-video-player"
    playsinline
    controls
  >
    <source
      :src="sourceMp4"
      type="video/mp4"
    >
    <track
      kind="captions"
      label="Sous titres"
      :src="captionVtt"
      srclang="fr"
      default
    >
  </video>
</template>

<style lang="scss">
.pix-video-player {
  width: 100%;
}
</style>
