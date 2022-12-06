<template>
  <component :is="tag" :class="`pix-typography pix-typography--scale-${scale}`">
    <slot />
  </component>
</template>

<script>
export default {
  name: 'PixTypography',
  props: {
    tag: {
      type: String,
      required: true,
    },
    scale: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss">
.pix-typography {
  color: $black-90;
  margin: 0;
}

/**
* Scales
*/

// Titles
[class*='pix-typography--scale-title'] {
  line-height: 1.25;
  font-weight: 500;
  letter-spacing: -0.04em;
}

.pix-typography--scale-title-large {
  font-family: $open-sans;
  font-size: 2rem;

  @media (min-width: 768px) {
    font-size: 2.5rem;
  }

  @media (min-width: 980px) {
    font-size: 3rem;
  }
}

.pix-typography--scale-title-medium {
  font-family: $open-sans;
  font-size: 1.625rem;
  letter-spacing: -0.02em;

  @media (min-width: 768px) {
    letter-spacing: -0.04em;
    font-size: 2rem;
  }

  @media (min-width: 980px) {
    font-size: 2.25rem;
  }
}

.pix-typography--scale-title-small {
  font-family: $open-sans;
  font-size: 1.375rem;
  letter-spacing: -0.02em;

  @media (min-width: 768px) {
    font-size: 1.5rem;
  }

  @media (min-width: 980px) {
    font-size: 1.75rem;
  }
}

.pix-typography--scale-title-extra-small {
  font-family: $open-sans;
  font-size: 1.25rem;
  letter-spacing: -0.02em;
}

// Bodys
[class*='pix-typography--scale-body'] {
  font-family: $roboto;
  line-height: 1.5;
}

.pix-typography--scale-body-large {
  font-size: 1.125rem;
}

.pix-typography--scale-body-medium {
  font-size: 1rem;
}

.pix-typography--scale-body-small {
  font-size: 0.875rem;
}

.pix-typography--scale-body-extra-small {
  font-size: 0.75rem;
  letter-spacing: 0.02rem;
}
</style>
