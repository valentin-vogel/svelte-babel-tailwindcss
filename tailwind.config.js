module.exports = {
  purge: {
    content: ['./src/**/*.svelte', './public/index.html'],
    enabled: !process.env.ROLLUP_WATCH,
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
