/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Real Rodax brand colors - exact colors from user
        'rodax-light-blue': '#93EEFF', // Light blue
        'rodax-blue': '#2675AF', // Main blue  
        'rodax-white': '#ECEFF4', // Off-white
        'rodax-dark': '#1a202c', // Dark navy
        'rodax-gray': '#4a5568', // Gray for text
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
} 