<script setup>
import player_fr from 'assets/translation/player_fr'
import plyrSprites from 'plyr/dist/plyr.svg'
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
    // ToDo: should be required when sixieme transcriptions are available
  },
})

const video = ref(null)
onMounted(() => {
  // eslint-disable-next-line no-new
  new Plyr(video.value, {
    hideControls: false,
    disableContextMenu: false,
    i18n: player_fr,
    loadSprite: false,
    iconUrl: plyrSprites,
  })
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
    <!-- ToDo: v-if can be deleted when sixieme transcriptions are available -->
    <track
      v-if="captionVtt"
      kind="captions"
      label="Français"
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
