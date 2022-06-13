export default {
  target: 'static',
  components: true,
  modules: ['@nuxt/content', '@nuxtjs/style-resources'],
  styleResources: {
    scss: [
      'node_modules/modern-normalize/modern-normalize.css',
      'assets/scss/globals.scss',
    ],
  },
};
