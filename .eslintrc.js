module.exports = {
  root: true,
  env: {
    node: true,
    'jest/globals': true,
  },
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false,
  },
  extends: [
    '@nuxtjs',
    'plugin:prettier/recommended',
    'plugin:nuxt/recommended',
    'prettier',
  ],
  plugins: ['prettier', 'jest'],
  // add your custom rules here
  rules: {
    'no-console': 'off',
  },
};
