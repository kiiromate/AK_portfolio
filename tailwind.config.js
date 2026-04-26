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
        'dark': '#333333',
        'darkGray': '#666666',
        'midGray': '#979797',
        'lightGray': '#eeeeee',
        'blue': '#333333',
        'accentBlue': '#333333',
      },
      spacing: {
        'safe': 'clamp(1rem, 4vw, 2rem)',
      },
      fontFamily: {
        'sans': ['var(--font-dm-sans)', 'DM Sans', 'sans-serif'],
        'serif': ['var(--font-dm-sans)', 'DM Sans', 'sans-serif'],
        'mono': ['var(--font-dm-sans)', 'DM Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
};