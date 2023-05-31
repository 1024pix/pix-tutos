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
      <slot />
    </main>
  </div>
</template>

<script setup>
  useHead({ titleTemplate: '%s - Pix+Édu' })
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
