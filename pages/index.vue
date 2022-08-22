<template>
  <ul>
    <li v-for="tuto in tutos" :key="tuto.slug">
      <nuxt-link :to="{ name: 'slug', params: { slug: tuto.slug } }">
        {{ tuto.title }}
      </nuxt-link>
    </li>
  </ul>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const tutos = await $content().fetch();
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
