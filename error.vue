<script setup>
defineProps({
  error: {
    type: Object,
    default: () => {},
  },
})
useHead({ title: 'Erreur' })
definePageMeta({ layout: 'simple' })
</script>

<template>
  <div class="error">
    <a href="https://pix.fr/">
      <img
        class="error__logo"
        src="./assets/images/pix-logo.svg"
        alt="Lien pour revenir à l'accueil"
      >
    </a>
    <p class="error__message">
      {{ error?.message }}
    </p>
  </div>
</template>

<style lang="scss">
.error {
  width: 300px;
  padding-top: var(--pix-spacing-12x);
  margin: auto;

  &__logo {
    display: block;
    margin: auto;
  }

  &__message {
    text-align: center;
  }
}
</style>
