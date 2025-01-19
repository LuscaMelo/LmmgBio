/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        brand: '#0B9D90',
        secondary: '#3D4A26',
        dark: '#2B2B2B',
        light: '#363636',
        clear: '#414141'
      }
    }
  },
  plugins: [],
}