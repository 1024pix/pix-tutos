<template>
  <div
    id="app"
    class="app-viewport"
  >
    <PixHeader :hide-actions="shouldDisplayActions" />
    <main
      role="main"
      class="main-container"
    >
      <nuxt />
    </main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isConnected: undefined,
    };
  },

  head: {
    titleTemplate: '%s - Pix+Édu',
  },

  computed: {
    // Hide actions while loading to avoid layout shift
    shouldDisplayActions() {
      return this.isConnected ?? true;
    },
  },

  // The `mounted` lifecycle hook is called client side
  // https://nuxtjs.org/docs/concepts/nuxt-lifecycle/#client
  mounted() {
    this.isConnected = location.search.startsWith('?c');
  },
};
</script>

<style lang="scss">
#app {
  min-height: 100vh;
  font-family: $font-roboto;
  background-color: $background-light;
}

.main-container {
  padding: 4rem 1rem;
  max-width: 980px;
  margin: 0 auto;
}
</style>
