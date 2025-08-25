/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'saffron': '#FF9933',
        'maroon': '#800020',
        'gold': '#FFD700',
        'cream': '#F5F5DC',
        'dark-red': '#5D001E',
        'light-saffron': '#FFB366'
      },
      fontFamily: {
        'traditional': ['Crimson Text', 'serif'],
        'modern': ['Inter', 'sans-serif']
      }
    },
  },
  plugins: [],
};