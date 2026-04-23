/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'dark': '#000000',
        'darkGray': '#666666',
        'midGray': '#979797',
        'lightGray': '#eeeeee',
        'blue': '#0088cc',
        'accentBlue': '#0088cc',
      },
      spacing: {
        'safe': 'clamp(1rem, 4vw, 2rem)',
      },
      fontFamily: {
        'sans': ['-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', '"Helvetica Neue"', 'Arial', 'sans-serif'],
        'serif': ['Georgia', '"Times New Roman"', 'serif'],
      },
    },
  },
  plugins: [],
};
