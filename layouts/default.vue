<template>
  <div id="app" class="app-viewport">
    <header class="main-header">
      <div class="main-header__container">
        <div class="main-header__logos">
          <img
            src="~/assets/images/marianne-logo.svg"
            class="main-header__logo"
            alt=""
          />
          <a
            class="main-header__link"
            href="https://pix.fr"
            title="Site officiel Pix.fr"
          >
            <img
              src="~/assets/images/pix-logo.svg"
              class="main-header__logo"
              alt="Pix"
            />
          </a>
        </div>
        <div v-if="!isConnected" class="main-header__actions">
          <PixButtonLink
            href="https://app.pix.fr/connexion"
            background-color="transparent-light"
          >
            Se connecter
          </PixButtonLink>
          <PixButtonLink href="https://app.pix.fr/inscription">
            S'inscrire
          </PixButtonLink>
        </div>
      </div>
    </header>
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

.main-header {
  background-color: white;
  box-shadow: $box-shadow-xs;
}

.main-header__container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1.5rem;
  padding: 1rem;
  max-width: 1280px;
  margin: 0 auto;

  > * {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 1.5rem;
  }
}

.main-header__logo {
  display: block;
  height: 60px;
}

.main-container {
  padding: 4rem 1rem;
  max-width: 980px;
  margin: 0 auto;
}
</style>
