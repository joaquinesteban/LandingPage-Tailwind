/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/index.html", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'bali':" URL('./public/img/bali.jpg')",
        'chicago':" URL('./public/img/chicago.jpg')",
        'europe':" URL('./public/img/europe.jpg')",
        'iceland':" URL('./public/img/iceland.jpg')",

        'LA':" URL('./public/img/LA.jpg')",
        'miami':" URL('./public/img/miami.jpg')",
        'new_york':" URL('./public/img/new_york.jpg')",
        'norway':" URL('./public/img/norway.jpg')",
        'sanFrancisco':" URL('./public/img/sanFrancisco.jpg')",
        'sanFranciscoDesktop':" URL('./public/img/sanFranciscoDesktop.jpg')",
        'seattle':" URL('./public/img/seattle.jpg')",
        'switzerland':" URL('./public/img/switzerland.jpg')",
        'sydney':" URL('./public/img/sydney.jpg')",
        'yosemite':" URL('./public/img/yosemite.jpg')",
        

      },
      backgroundColor: theme => ({
        ...theme('colors'),
        'primary':'#CC2D4A',
        'secundary':'#8FA206',
        'terciary':'#61AEC9'
      }),
      textColor: {
        'primary':'#CC2D4A',
        'secundary':'#8FA206',
        'terciary':'#61AEC9'
      },
      fontFamily:{
       ' Roboto':['Roboto', 'sans-serif']
      }
    },
  },
  plugins: [],
};