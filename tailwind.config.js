module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        periwinkle: {
          100: '#FAF8FF',
          200: '#F3E8FF',
          300: '#DACFFF',
          400: '#ADA3DA',
          500: '#9289BE',
          600: '#736B9E',
          700: '#554E7E',
          800: '#383361',
          900: '#1B1A44'
        },
        yellow: '#f3e001',
        midGrey: '#8c8e90',
        purplishGrey: '#878da4',
        borderGrey: '#eeeeee'
      },
      fontFamily: {
        serif: ['Esteban'],
        sans: ['Montserrat'],
        Roboto: ['Roboto']
      },
      width: {
        '11/10': '110%',
      }
    },
  },
  plugins: [],
}
