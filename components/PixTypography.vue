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
h1 {
  font-family: $open-sans;
  font-weight: 300;
  font-size: 3.75rem;
  line-height: 4.5rem;
  letter-spacing: -0.04em;
  color: $black-90;
  margin: 0;
}

h2 {
  font-family: $open-sans;
  font-weight: 600;
  font-size: 1.5rem;
  line-height: 2rem;
  letter-spacing: -0.02em;
  color: $black-90;
  margin: 0;
}

h3 {
  font-family: $open-sans;
  font-weight: 700;
  font-size: 1.25rem;
  line-height: 1.75rem;
  letter-spacing: 0em;
  color: $black-90;
  margin: 0;
}

p {
  font-family: $roboto;
  font-style: normal;
  font-weight: 400;
  font-size: 1.5rem;
  line-height: 2rem;
  color: $black-90;
  margin: 0;
}
</style>
