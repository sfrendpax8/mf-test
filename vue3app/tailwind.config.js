module.exports = {
  presets: [
    // Import the root design system from shared-components (all colors and customizations)
    require('../shared-components/tailwind.config')
  ],
  purge: {
    enabled: true,
    content: ['./src/**/*.{vue,js,ts,jsx,tsx}'],
  },
  corePlugins: {
    preflight: false, // disable reset styles (should carry over from propulsion)
    animation: false, // should carry over from propulsion
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
