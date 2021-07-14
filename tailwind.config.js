const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      main: {
        50: '#a8cdd3',
        100: '#91c0c8',
        200: '#7ab3bd',
        300: '#64a6b1',
        400: '#5196a2',
        500: '#46818b',
        600: '#3a6c75',
        700: '#2f575e',
        800: '#244247',
        900: '#182d31',
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
