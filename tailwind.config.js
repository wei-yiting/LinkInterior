const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      main: {
        100: '#cbdfe5',
        200: '#b5d2d9',
        300: '#9ec4ce',
        400: '#87b6c3',
        500: '#71a9b7',
        600: '#5a9bac',
        700: '#4d8898',
        800: '#417481',
        900: '#365f6a',
      },
      gray: colors.coolGray,
      white: colors.white,
      black: colors.black,
    },
    extend: {},
  },
  variants: {
    extend: {
      borderWidth: ['last'],
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
