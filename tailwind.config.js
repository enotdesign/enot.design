module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container:{
      center: true,
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
