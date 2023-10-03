/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'red' : '#F42619',
      'white': '#FFFFFF',
      'gray': '#D9D9D9',
      'dark-gray': '#C6C0C0',
      'light-green': '#52BD94',
    },
    extend: {},
  },
  plugins: [],
}