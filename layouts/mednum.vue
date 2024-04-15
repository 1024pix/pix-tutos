<script setup>
useHead({ titleTemplate: '%s - Mednum' })
</script>

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
      <img
        src="~/assets/images/pix-logo.svg"
        class="logo"
        alt="Pix"
      >

      <slot />
    </main>
  </div>
</template>

<style lang="scss">
#app {
  @extend %pix-body-l;

  min-height: 100vh;
  background-color: var(--pix-neutral-20);
}

.main-container {
  padding: 4rem 1rem;
  max-width: 980px;
  margin: 0 auto;
}

.partners {
  margin-top: var(--pix-spacing-12x);
  padding: var(--pix-spacing-8x) 0;
  border-top: 1px solid var(--pix-neutral-20);
  border-bottom: 1px solid var(--pix-neutral-20);

  img {
    display: block;
    width: 450px;
    max-width: 100%;
    margin: 0 auto;
  }
}

.logo {
  display: none;
  width: 100px;
}

@media print {
  #app {
    background-color: var(--pix-neutral-0);
  }

  .main-container {
    padding: 0;
  }

  // Nous mettons le !important pour éviter la surcharge du style par celui de la page qui est appliqué ensuite.
  .main-header, .tuto__description, .plyr, .tuto__actions {
    display: none !important;
  }

  .logo {
    display: block;
  }
}
</style>
