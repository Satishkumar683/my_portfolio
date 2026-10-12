/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#8B5CF6',
          light: '#a78bfa',
          dark: '#7C3AED',
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        poster: ['Syne', 'Impact', 'sans-serif'],
        display: ['Syne', 'sans-serif'],
        cursive: ['Caveat', 'cursive'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      letterSpacing: {
        tightest: '-0.04em',
        widest: '0.25em',
      },
    },
  },
  plugins: [],
};
