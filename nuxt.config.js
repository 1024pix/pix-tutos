import { config } from './config/environment';
import isSeoIndexingEnabled from './services/is-seo-indexing-enabled';

const nuxtConfig = {
  target: 'static',
  components: true,
  generate: {
    fallback: '404.html',
  },
  head: {
    titleTemplate: '%s - Pix+Édu',
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
    script: [],
  },
  modules: ['@nuxt/content', '@nuxtjs/style-resources'],
  styleResources: {
    scss: [
      'node_modules/modern-normalize/modern-normalize.css',
      'assets/scss/globals.scss',
    ],
  },
};

if (config.matomo.containerUrl) {
  nuxtConfig.head.script.push(
    {
      type: 'text/javascript',
      src: config.matomo.containerUrl,
      async: true,
      defer: true,
    },
    {
      type: 'text/javascript',
      src: '/scripts/start-matomo-event.js',
      'data-matomo-debug-mode': config.matomo.debug,
    }
  );
}

export default nuxtConfig;
