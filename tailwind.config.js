module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container:{
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    screens:{
      sm: '640px',
      md: '766px',
      lg: '1024px'
    },
    extend: {
      colors:{
        enotblue: '#071521',
        secondbg: '#04111b',
        blueborder: '#0d2538',
        lightblue: '#00B6FF',
        thirtbg: '#091a28',
        bordercolor: '#0d2538',
        menuColor: '#0d2538',
        menuColor2: '#061B2C',
        menucolornotimportant: '#204A6B',
        bg:{
          'primary': '#666'
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
