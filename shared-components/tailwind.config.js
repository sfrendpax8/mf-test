module.exports = {
  purge: {
    enabled: true,
    content: ['./src/**/*.{vue,js,ts,jsx,tsx}'],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      white: '#FFFFFF',
      black: '#000000',
      primary: '#1D253C',
      error: '#D22015',
      success: '#44D62C',
      info: '#00E4F4',
      warning: '#FAFF13',
      gray: {
        700: '#363636',
        600: '#4A4A4A',
        500: '#7A7A7A',
        400: '#B5B5B5',
        200: '#DBDBDB',
        100: '#F5F5F5',
        50: '#FAFAFA',
        DEFAULT: '#4A4A4A',
      },
    },
    fontFamily: {
      sans: ['Helvetica Neue', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
