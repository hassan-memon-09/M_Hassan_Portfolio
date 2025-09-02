/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-gradient': 'linear-gradient(to right, #6366f1, #a855f7)',
        'button-gradient': 'linear-gradient(to right, #8b5cf6, #6366f1)',
      },
      colors: {
        'slate-dark': '#1e293b',
        'indigo-accent': '#6366f1',
        'purple-accent': '#a855f7',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Add via Google Fonts in index.html
      },
    },
  },
  plugins: [
    require('tailwindcss-animate'), // For Tailwind animations
  ],
};