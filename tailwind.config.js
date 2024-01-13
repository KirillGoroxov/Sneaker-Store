/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './index.html'],
  theme: {
    screens: {
      md: '768px',
      lg: '1000px',
    },
    fontFamily: {
      inter: ['Inter Tight', 'sans-serif'],
      pacific: 'Pacifico',
    },
    extend: {
      colors: {
        'dark-green': '#212b22',
        'shop-orange': '#ffbd5b',
      },
    },
  },
  plugins: [],
};
