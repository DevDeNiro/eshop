/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        appear: 'appear 0.3s ease-in-out forwards',
        disappear: 'disappear 0.3s ease-in-out forwards',
      },
      keyframes: {
        appear: {
          'from': {opacity: 0, transform: 'scale(0.95)'},
          'to': {opacity: 1, transform: 'scale(1)'}
        },
        disappear: {
          '0%': {opacity: 1, transform: 'scale(1)'},
          '95%': {opacity: 0, transform: 'scale(0.95)'},
          '100%': {opacity: 0, transform: 'scale(0)'}
        }
      }
    },
  },
  plugins: [ require('@tailwindcss/forms')],
}
