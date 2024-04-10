<script setup>
defineProps({
  href: { type: String, required: true },
  backgroundColor: {
    type: String,
    default: 'blue',
    validator(value) {
      return ['blue', 'transparent-light'].includes(value)
    },
  },
})
</script>

<template>
  <a
    class="pix-button pix-button--border pix-button--shape-squircle pix-button--size-small"
    :class="`pix-button--background-${backgroundColor}`"
    :href="href"
  >
    <slot />
  </a>
</template>

<style lang="scss" scoped>
.pix-button {
  @extend %pix-body-s;

  display: block;
  text-decoration: none;
  white-space: nowrap;

  &--size-small {
    padding: 0.5rem 1rem;
  }

  &--shape-squircle {
    border-radius: 0.25rem;
  }

  &--border {
    border: 2px solid transparent;
  }

  &--background-blue {
    color: var(--pix-neutral-0);
    background: var(--pix-primary-500);

    &:hover,
    &:focus {
      background: var(--pix-primary-900);
      border-color: var(--pix-neutral-0);
      box-shadow: 0 0 0 2px var(--pix-primary-900);
    }
  }

  &--background-transparent-light {
    color: var(--pix-neutral-900);
    background: transparent;
    border-color: var(--pix-neutral-500);

    &:hover {
      background-color: var(--pix-neutral-100);
    }
  }
}
</style>
