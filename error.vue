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

<script setup>
  useHead({ title: 'Erreur' })
  definePageMeta({ layout: 'simple' })

  defineProps({
    error: {
      type: Object,
      default: () => {}
    }
  })
</script>

<style lang="scss">
.error {
  width: 300px;
  padding-top: 48px;
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
