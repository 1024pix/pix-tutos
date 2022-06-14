import isSeoIndexingEnabled from './services/is-seo-indexing-enabled';

export default {
  target: 'static',
  components: true,
  generate: {
    fallback: '404.html'
  },
  head: {
    title: 'Pix+Edu tutos',
    htmlAttrs: {
      lang: 'fr',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'Pix est le service public en ligne pour évaluer, développer et certifier ses compétences numériques tout au long de la vie.',
      },
      isSeoIndexingEnabled() ? {} : { name: 'robots', content: 'noindex' },
    ],
  },
  modules: ['@nuxt/content', '@nuxtjs/style-resources'],
  styleResources: {
    scss: [
      'node_modules/modern-normalize/modern-normalize.css',
      'assets/scss/globals.scss',
    ],
  },
};
