/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#D4AF37',
          light: '#F5D061',
          dark: '#B89320',
        },
        gold: {
          DEFAULT: '#D4AF37',
          light: '#F5D061',
          dark: '#B89320',
          50: '#FDFBF0',
          100: '#FBF5D5',
          200: '#F6E9A6',
          300: '#F1DC77',
          400: '#E7C84D',
          500: '#D4AF37',
          600: '#B89320',
          700: '#8C6F14',
          800: '#614B0A',
          900: '#3D2E04',
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        heading: ['Outfit', 'system-ui', 'sans-serif'],
        display: ['Fraunces', 'Georgia', 'serif'],
        editorial: ['Fraunces', 'Georgia', 'serif'],
        fraunces: ['Fraunces', 'Georgia', 'serif'],
        poster: ['Fraunces', 'Georgia', 'serif'],
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
