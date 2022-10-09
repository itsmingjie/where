/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    './pages/**/*.{js,jsx,ts,tsx,html}',
    './features/**/*.{js,jsx,ts,tsx,html}',
  ],
  theme: {
    extend: {
      colors: {
        accent: colors.indigo,
      },
      gridTemplateColumns: {
        'fill-3': 'repeat(auto-fill, minmax(396px, 3fr))',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
