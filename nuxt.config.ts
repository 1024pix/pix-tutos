import isSeoIndexingEnabled from './services/is-seo-indexing-enabled'
import { config } from './config/environment'

// https://nuxt.com/docs/api/configuration/nuxt-config

const script = []
if (config.matomo.containerUrl) {
  script.push(
    {
      type: 'text/javascript',
      src: config.matomo.containerUrl,
      async: true,
      defer: true,
    },
    {
      'type': 'text/javascript',
      'src': '/scripts/start-matomo-event.js',
      'data-matomo-debug-mode': config.matomo.debug,
    },
  )
}

export default defineNuxtConfig({
  modules: ['@nuxt/content'],

  css: ['~/assets/scss/globals.scss', 'plyr/dist/plyr.css'],

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
      script,
    },
  },

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @use "@/assets/scss/_design-tokens.scss" as *;
            @import "@fontsource/roboto";
            @import "@fontsource/open-sans";
          `,
        },
      },
    },
  },

  content: {
    markdown: {
      anchorLinks: false,
    },
  },
})
