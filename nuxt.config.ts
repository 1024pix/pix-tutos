import { createResolver } from '@nuxt/kit'
import isSeoIndexingEnabled from './services/is-seo-indexing-enabled'
import { config } from './config/environment'

const { resolve } = createResolver(import.meta.url)

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

  css: [
    '@1024pix/pix-ui/addon/styles/normalize-reset/index.scss',
    '@1024pix/pix-ui/addon/styles/_pix-button-base.scss',
    '@1024pix/pix-ui/addon/styles/_pix-button.scss',
    '~/assets/scss/globals.scss',
    'plyr/dist/plyr.css',
  ],

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
            @use "@1024pix/pix-ui/addon/styles/pix-design-tokens/index.scss" as *;
          `,
        },
      },
    },
  },

  nitro: {
    publicAssets: [
      {
        dir: resolve('./node_modules/@1024pix/pix-ui/public'),
        baseURL: '/@1024pix/pix-ui',
      },
    ],
  },

  content: {
    markdown: {
      anchorLinks: false,
    },
  },
})
