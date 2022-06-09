<template>
  <main>
    <h1>{{ page.title }}</h1>
    <p>{{ page.description }}</p>
  </main>
</template>

<script>
export default {
  async asyncData({ $content, params, error }) {
    const slug = params.slug || 'index';

    const page = await $content(slug)
      .fetch()
      .catch((err) => {
        console.error(err);
        error({ statusCode: 404, message: "Ce tuto n'existe pas." });
      });

    return {
      page,
    };
  },
};
</script>
