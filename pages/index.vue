<template>
<ul>
    <li v-for="doc in docs" :key="doc.slug">
        <nuxt-link :to="{ name: 'slug', params: { slug: doc.slug } }">{{doc.title}}</nuxt-link>
    </li>
</ul>
</template>

<script>
export default {
async asyncData({$content, params}) {
    console.log('coucou');
    const docs = await $content('tutos').fetch();
    return { docs }
  }
}
</script>