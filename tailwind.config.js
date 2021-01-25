const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        lightblue: colors.lightBlue,
        trueGray: colors.trueGray,
      },
      //
    },
  },
  variants: {
    extend: {
      //
      opacity: ['disabled'],
      backgroundColor: ['responsive', 'hover', 'focus', 'active'],
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    //
  ],
};
