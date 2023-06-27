module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ['@antfu', '@nuxt/eslint-config'],
  // add your custom rules here
  rules: {
    'no-console': 'off',
  },
}
