/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Professional trucking industry colors
        'rodax-blue': '#1e40af', // Professional blue
        'rodax-orange': '#ea580c', // Truck orange
        'rodax-gray': '#374151', // Industrial gray
        'rodax-dark': '#111827', // Dark professional
        'rodax-light': '#f8fafc', // Clean light
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
} 