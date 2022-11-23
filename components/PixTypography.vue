<template>
  <component :is="tag" :class="`pix-${scale}`"><slot /></component>
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

<style lang="scss" scoped>
* {
  color: $black-90;
  margin: 0;
}

.pix-title-large {
  font-family: $open-sans;
  font-size: 2rem;
  line-height: 2.5625rem;
  letter-spacing: -0.04em;
  font-weight: 500;
}

/* Tablet */
@media (min-width: 768px) {
  .pix-title-large {
    font-size: 2.5rem;
    line-height: 3.125rem;
    letter-spacing: -0.04em;
  }
}

/* Desktop */
@media (min-width: 980px) {
  .pix-title-large {
    font-size: 3rem;
    line-height: 3.76rem;
    letter-spacing: -0.04em;
  }
}

.pix-title-medium {
  font-family: $open-sans;
  font-size: 1.625rem;
  line-height: 2.0625rem;
  letter-spacing: -0.02em;
  font-weight: 500;
}

@media (min-width: 768px) {
  .pix-title-medium {
    font-size: 2rem;
    line-height: 2.5625rem;
    letter-spacing: -0.04em;
  }
}

@media (min-width: 980px) {
  .pix-title-medium {
    font-size: 2.25rem;
    line-height: 2.875rem;
    letter-spacing: -0.04em;
  }
}

.pix-title-small {
  font-family: $open-sans;
  font-size: 1.375rem;
  line-height: 1.75rem;
  letter-spacing: -0.02em;
  font-weight: 500;
}

@media (min-width: 768px) {
  .pix-title-small {
    font-size: 1.5rem;
    line-height: 2rem;
    letter-spacing: -0.02em;
  }
}

@media (min-width: 980px) {
  .pix-title-small {
    font-size: 1.75rem;
    line-height: 2.25rem;
    letter-spacing: -0.02em;
  }
}

.pix-title-extra-small {
  font-family: $open-sans;
  font-size: 1.25rem;
  line-height: 1.5rem;
  letter-spacing: -0.02em;
  font-weight: 500;
}

.pix-body-large {
  font-family: $roboto;
  font-size: 1.125rem;
  line-height: 1.6875rem;
  font-weight: 400;
}

.pix-body-medium {
  font-family: $roboto;
  font-size: 1rem;
  line-height: 1.5rem;
  font-weight: 400;
}

.pix-body-small {
  font-family: $roboto;
  font-size: 0.875rem;
  line-height: 1.3125rem;
  font-weight: 400;
}

.pix-body-extra-small {
  font-family: $roboto;
  font-size: 0.75rem;
  line-height: 0.875rem;
  letter-spacing: 0.02rem;
  font-weight: 400;
}
</style>
