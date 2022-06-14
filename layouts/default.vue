<template>
  <div id="app" class="app-viewport">
    <PixHeader :is-connected="isConnected" />
    <main role="main" class="main-container">
      <nuxt />
    </main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isConnected: false,
    };
  },

  // The `mounted` lifecycle hook is called client side
  // https://nuxtjs.org/docs/concepts/nuxt-lifecycle/#client
  mounted() {
    if (location.search.includes('connecte')) {
      this.isConnected = true;
    }
  },
};
</script>

<style lang="scss">
#app {
  min-height: 100vh;
  font-family: $open-sans;
  background-color: $background-light;
}

.main-container {
  padding: 4rem 1rem;
  max-width: 980px;
  margin: 0 auto;
}
</style>
