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
import getAreas from '../../services/get-areas';

export default {
  layout: 'edu',
  async asyncData({ $content }) {
    const tutos = await $content('edu').sortBy('area').fetch();

    const tutosGroupedByArea = tutos.reduce((acc, tuto) => {
      if (!acc[tuto.area]) {
        acc[tuto.area] = [];
      }
      acc[tuto.area].push(tuto);
      return acc;
    }, {});

    return {
      areas: getAreas(),
      tutosGroupedByArea,
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
