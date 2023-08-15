/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: { Euclid: "Euclid Circular A" },
      listStyleType: {
        none: 'none',
        disc: 'disc',
        decimal: 'decimal',
        square: 'square',
        roman: 'upper-roman',
      },
      colors:{
        primaryCol : '#54A4CC',
        formBlue: '#009FE3'
      }
    },
  },
  plugins: [],
}

