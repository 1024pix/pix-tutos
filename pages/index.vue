<template>
  <PixTypography tag="h1"
    ><nuxt-link to="edu">Tutos Pix+Édu</nuxt-link></PixTypography
  >
</template>

<script>
import PixTypography from '../components/PixTypography.vue';
export default {
  components: { PixTypography },
  head() {
    return {
      title: 'Accueil',
    };
  },
};
</script>
