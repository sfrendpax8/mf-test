module.exports = {
  presets: [
    require('./tw')
  ],
  purge: {
    enabled: true,
    content: ['./src/**/*.{vue,js,ts,jsx,tsx}'],
  },
  corePlugins: {
    preflight: false, // disable reset styles (they should come from elsewhere so they don't happen multiple times)
  },
  theme: {
    extend: {
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
