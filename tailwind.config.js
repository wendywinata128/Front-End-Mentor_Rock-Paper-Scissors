/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'score-text': "hsl(229, 64%, 46%)",
        'dark-text': "hsl(229, 25%, 31%)",
        'danger': "hsl(349, 71%, 52%)",
        'primary-white': 'hsl(217, 16%, 45%)',
      }
    },
  },
  plugins: [],
};
