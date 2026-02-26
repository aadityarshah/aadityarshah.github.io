/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#3b82f6',
        secondary: '#6b7280',
        background: '#ffffff',
        'dark-background': '#111827',
        text: '#1f2937',
        'dark-text': '#f3f4f6',
      },
    },
  },
  plugins: [],
}
