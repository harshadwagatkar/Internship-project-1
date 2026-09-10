// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        royal: {
          50: '#F8F6FF',
          100: '#F0ECFF',
          200: '#E0D9FF',
          300: '#C4B8FF',
          400: '#A891FF',
          500: '#8B6DFF',
          600: '#7A5AE6',
        },
        gold: {
          50: '#FFFBF0',
          100: '#FFF5E0',
          200: '#FFEAB8',
          300: '#FFD98C',
          400: '#FFC960',
          500: '#FFB833',
          600: '#E6A62E',
        },
        blush: {
          50: '#FFF8F7',
          100: '#FFEFED',
          200: '#FFDCD8',
          300: '#FFC4BE',
        },
        navy: {
          50: '#F0F3F8',
          100: '#DCE3EE',
          200: '#B8C4D9',
          300: '#94A5C4',
        }
      },
      backgroundImage: {
        'gradient-royal': 'linear-gradient(135deg, #F8F6FF 0%, #F0ECFF 30%, #FFF5E0 70%, #FFFBF0 100%)',
        'gradient-hero': 'linear-gradient(145deg, #F0ECFF 0%, #FFF5E0 50%, #FFEFED 100%)',
        'gradient-section': 'linear-gradient(90deg, #F8F6FF 0%, #FFFBF0 50%, #FFF8F7 100%)',
        'gradient-card': 'linear-gradient(135deg, #FFFFFF 0%, #F8F6FF 50%, #FFFBF0 100%)',
        'gradient-cta': 'linear-gradient(145deg, #F0ECFF 0%, #FFEFED 30%, #FFF5E0 70%, #F8F6FF 100%)',
      }
    },
  },
  plugins: [],
}