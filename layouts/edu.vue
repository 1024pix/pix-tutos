<template>
  <div
    id="app"
    class="app-viewport"
  >
    <PixHeader :hide-actions="false" />
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

@media print {
  #app {
    background-color: $pix-neutral-0;
  }

  .main-container {
    padding: 0;
  }

  // Nous mettons le !important pour éviter la surcharge du style par celui de la page qui est appliqué ensuite.
  .main-header, .tuto__description, .tuto__video, .tuto__actions {
    display: none !important;
  }
}
</style>
