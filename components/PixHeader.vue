<template>
  <header class="main-header">
    <div class="main-header__container">
      <div class="main-header__logos">
        <img
          src="~/assets/images/marianne-logo.svg"
          class="main-header__logo"
          alt=""
        >
        <a
          class="main-header__link"
          href="https://pix.fr"
          title="Site officiel Pix.fr"
        >
          <img
            src="~/assets/images/pix-logo.svg"
            class="main-header__logo"
            alt="Pix"
          >
        </a>
      </div>

      <div
        v-if="!hideActions"
        class="main-header__actions"
      >
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
</template>

<script>
export default {
  props: {
    hideActions: {
      type: Boolean,
      default: true,
    },
  },
};
</script>

<style lang="scss">
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
</style>
