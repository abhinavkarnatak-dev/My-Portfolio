/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        Purple1: '#8a2ce2',
        Purple2: '#a156e7',
      },
      brightness: {
        175: '1.25',
      },
    },
  },
  plugins: [],
}