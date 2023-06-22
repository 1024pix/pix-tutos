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

      <section class="partners">
        <img
          class=""
          src="~/assets/images/partners.png"
          alt="Financé par le Gouvernement de la République française, liberté égalité fraternité, le plan France Relance et l'Union européenne (NextGenerationEU)"
        >
      </section>
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

.partners {
  margin-top: 48px;
  padding: 32px 0;
  border-top: 1px solid $pix-neutral-20;
  border-bottom: 1px solid $pix-neutral-20;

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
    background-color: $pix-neutral-0;
  }

  .main-container {
    padding: 0;
  }

  // Nous mettons le !important pour éviter la surcharge du style par celui de la page qui est appliqué ensuite.
  .main-header, .tuto__description, .tuto__video, .tuto__actions {
    display: none !important;
  }

  .logo {
    display: block;
  }
}
</style>
