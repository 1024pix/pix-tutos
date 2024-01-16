import antfu from '@antfu/eslint-config'

export default antfu({

}, {
  files: ['**/*.md'],
  rules: { 'no-irregular-whitespace': 'off' },
})
