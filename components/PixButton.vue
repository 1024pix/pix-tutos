<script setup>
defineProps({
  action: { type: Function, required: true },
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
  <button
    class="pix-button pix-button--size-small"
    :class="`pix-button--${backgroundColor}`"
    :onClick="action"
  >
    <slot />
  </button>
</template>
