import isSeoIndexingEnabled from './services/is-seo-indexing-enabled';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxt/content'],

  css: ['~/assets/scss/globals.scss'],

  app: {
    head: {
      titleTemplate: '%s - Tutos Pix',
      htmlAttrs: {
        lang: 'fr',
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content:
            'Pix est le service public en ligne pour évaluer, développer et certifier ses compétences numériques tout au long de la vie.',
        },
        isSeoIndexingEnabled() ? {} : { name: 'robots', content: 'noindex' },
      ],
      script: [{ src: '/scripts/start-matomo-event.js' }],
    },
  },

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/scss/_design-tokens.scss" as *;',
        },
      },
    },
  },

  content: {
    markdown: {
      anchorLinks: false,
    },
  },
});
