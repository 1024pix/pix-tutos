<script setup>
defineProps({
  hideActions: {
    type: Boolean,
    default: true,
  },
})
</script>

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
          background-color="neutral"
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

<style lang="scss">
.main-header {
  @extend %pix-shadow-xs;

  background-color: var(--pix-neutral-0);
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
