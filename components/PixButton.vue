<template>
  <button
    class="pix-button pix-button--border pix-button--shape-squircle pix-button--size-small"
    :class="`pix-button--background-${backgroundColor}`"
    :onClick="action"
  >
    <slot />
  </button>
</template>

<script>
export default {
  name: 'PixButtonLink',
  props: {
    action: {
      type: Function,
      required: true,
    },
    backgroundColor: {
      type: String,
      default: 'blue',
      validator(val) {
        return ['blue', 'transparent-light'].includes(val);
      },
    },
  },
};
</script>

<style lang="scss" scoped>
.pix-button {
  display: block;
  text-decoration: none;
  font-family: $font-roboto;
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.25rem;
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
    color: white;
    background: $blue-50;

    &:hover,
    &:focus {
      background: $blue-hover;
      border-color: white;
      box-shadow: 0 0 0 2px $blue-hover;
    }
  }

  &--background-transparent-light {
    color: $black-90;
    background: transparent;
    border-color: $black-50;

    &:hover {
      background-color: $hover-grey;
    }
  }
}
</style>
