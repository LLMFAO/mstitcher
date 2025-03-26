/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./index.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#8B5A2B', // Brown color similar to the existing site
          light: '#A67C52',
          dark: '#704626',
        },
        secondary: {
          DEFAULT: '#F5F0E8', // Light beige from the existing site
          light: '#FAF7F2',
          dark: '#E8DFD0',
        },
        text: {
          DEFAULT: '#333333',
          light: '#666666',
          dark: '#111111',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Georgia', 'serif'],
      },
    },
  },
  plugins: [],
}

