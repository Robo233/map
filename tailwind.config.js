module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  content: [],
  theme: {
    extend: {
      width: {
        '600': '600px',
        '800': '800px',
       },
       height: {
        '500': '500px',
       },
       left: {
         '100': '100px',
       },
       backgroundColor: {
         'steelblue': 'steelblue'
       },
       textColor: {
        'dark-green': '00491c'
       },
       
       screens: {
        'tablet-lg': {'max': '1070px'},
        'tablet': {'max': '850px'},
        'mobile': {'max': '700px'},
        'mid-mobile': {'max': '550px'},
        'small-mobile' : {'max': '370px'},
        
      }
      
       
    }
   
  },
  plugins: [],
}
