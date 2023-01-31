/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'pacifico' : ['Pacifico']
      },
      colors: {
        'primary' : '#E88F2A',
        'secondary' : '#FAF3EB'
      }
    },
  },
  plugins: [],
}
