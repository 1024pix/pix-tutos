<template>
  <PixTypography
    tag="h1"
    scale="title-l"
  >
    <nuxt-link to="edu">
      Tutos Pix+Édu
    </nuxt-link>
  </PixTypography>
</template>

<script>
import PixTypography from '../components/PixTypography.vue';
export default {
  components: { PixTypography },
  setup() {
    useHead({ title: 'Accueil' });
  },
};
</script>
