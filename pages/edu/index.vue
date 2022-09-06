<template>
  <ul>
    <li v-for="tuto in tutos" :key="tuto.slug">
      <nuxt-link :to="{ name: 'edu-slug', params: { slug: tuto.slug } }">
        {{ tuto.title }}
      </nuxt-link>
    </li>
  </ul>
</template>

<script>
export default {
  layout: 'edu',
  async asyncData({ $content }) {
    const tutos = await $content('edu').fetch();
    return {
      tutos,
    };
  },
  head() {
    return {
      title: 'Accueil',
    };
  },
};
</script>
