// eslint-disable-next-line no-undef
const { addDynamicIconSelectors } = require('@iconify/tailwind');
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      'sf' : ['SF Pro', 'sans-serif'],
    },
    colors: {
      'inactive' : '#D9D9D9',
      'active' : '#FFFFFF',
      'gray-main-nav' : '#001329',
    },
    backgroundImage: {
      'mainBackground' : "url('/background.svg')",
    },
    dropShadow :{
      'box' : '0px 0px 15px 0px rgba(97, 160, 188, 0.16)',
    },
  },
  plugins: [
    addDynamicIconSelectors(),
  ],
};
