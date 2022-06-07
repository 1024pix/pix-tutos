<template>
  <main>
    <h1>{{ doc.title }}</h1>
    <p>{{ doc.description }}</p>
    <nuxt-content :document="doc" />
  </main>
</template>

<script>
export default {
  mounted() {
    console.log('mounted');
  },
  async asyncData({$content, params}) {
    console.log('coucou');
    const doc = await $content('tutos', params.slug).fetch();
    console.log(doc);
    return { doc }
  }
}
</script>
