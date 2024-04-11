<script setup>
defineProps({
  href: { type: String, required: true },
  backgroundColor: {
    type: String,
    default: 'primary',
    validator(value) {
      return ['primary', 'neutral'].includes(value)
    },
  },
})
</script>

<template>
  <a
    class="pix-button pix-button--size-small pix-button-link"
    :class="`pix-button--${backgroundColor}`"
    :href="href"
  >
    <slot />
  </a>
</template>
