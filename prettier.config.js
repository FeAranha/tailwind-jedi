module.exports = {
  semi: false,
  singleQuote: true,
  plugins: ['prettier-plugin-tailwindcss'],
  tailwindcss: {
    separator: '_',
    wrap: true,
    mode: 'jit',
    theme: {
      extend: {},
    },
    plugins: [],
    presets: [],
  },
}
