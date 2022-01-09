const defaultTheme = require("tailwindcss/defaultTheme");
const plugin = require('tailwindcss/plugin');
const colors = require('tailwindcss/colors');
module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["'InterVariable'", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        color:{
          '1':'#F7F9FF',
          '2':'#2A2D46',
          '3':'#F7F9FF',
          '4':'#E1E3EA',
        },
        primary:{
          '100': '#DADEFE',
          '200': '#B6BEFD',
          '300': '#919BFA',
          '400': '#7480F5',
          '500': '#4250E8',
          '600': '#3440CD',
          '800': '#161D8A',
          '900': '#0D1272',
        },

        success:{
          '100': '#EDFDD8',
          '200': '#D6FBB2',
          '300': '#B6F48A',
          '400': '#97E96B',
          '500': '#6ADB3D',
          '600': '#4BBC2C',
          '800': '#1C7F13',
          '900': '#0C690B',
        }, 
        
        error:{
          '100': '#FEEAD4',
          '200': '#FECFA9',
          '300': '#FEAE7F',
          '400': '#FD8F5E',
          '500': '#FC5B2A',
          '600': '#D83C1E',
          '800': '#920F0D',
          '900': '#78080E',
        },
         warning:{
          '100': '#FEFAD6',
          '200': '#FEF3AE',
          '300': '#FEEA85',
          '400': '#FDE267',
          '500': '#FCD435',
          '600': '#D8B126',
          '800': '#927010',
          '900': '#78590A',
        },
        neutral:{
          '50': '#F9F9FB',
          '100': '#ECEDF4',
          '200': '#DFE0EC',
          '300': '#C5C8DD',
          '400': '#ACAFCD',
          '500': '#9FA3C6',
          '600': '#545669',
          '700': '#78590A',
          '800': '#22253A',
          '900': '#1B1D2D',
        },



      },



      boxShadow:{
        '1':'0px 0px 40px rgba(190, 204, 202, 0.2)',
        '2':'0px 0px 20px rgba(98, 105, 104, 0.1)',
        '3':'0px 0px 20px rgba(98, 105, 104, 0.2)',
       '4': '#1EA0EB 0px 0px 0px 2px',

      },

      opacity: {
        '4': '.04',
        '15': '.15',
        '35': '.35',
        '42': '.42  ',
        '63': '.63',
        '53': '.53',
        '63': '.63',
        '65': '.65',
        '92': '.92',
        '95': '.95',
      },

      backgroundImage:{
         'gradient-radial': 'radial-gradient(50% 50% at 50% 50%, #FFFFFF 0%, #EAF7F4 100%)',
         'gradient-1': 'linear-gradient(90deg, #1DD1B1 36.96%, #1D8FD1 87.96%)',
         'bg-pettern': 'url(../img/bg-pettern.svg)',
      },

      spacing: {
        '15': '3.75rem',
        '17': '4.375rem', // navbar height 70px
        '18': '4.5rem',
        '22': '5.5rem',
        '26': '6.5rem',
        '30': '7.5rem',
        '34': '8.5rem',
        '38': '9.5rem',
        '42': '10.5rem',
        '46': '11.5rem',
        '50': '12.5rem',
        '54': '13.5rem',
        '58': '14.5rem',
        '62': '15.5rem',
        '66': '16.5rem',
        '68': '16.875rem', // Sidebar width 270px
        '70': '17.5rem',
        '74': '18.5rem',
        '78': '19.5rem',
        '82': '20.5rem',
        '86': '21.5rem',
        '90': '22.5rem',
        '94': '23.5rem',
        '98': '24.5rem',
        '102': '25.5rem',
        '106': '26.5rem',
        '110': '27.5rem',
        'xs': '28rem',
        'sm': '32rem',
        'md': '36rem',
        'ml': '40rem',
        'mxg': '44rem',
        'mxl': '46rem',
        'mlg': '48rem',
        'lg': '52rem',
        'llg': '54rem',
        'xl': '60rem',
        '2xl': '72rem',
        '3xl': '80rem',
        '4xl': '96rem',
    },

    minWidth: (theme) => ({
      ...theme('spacing'),
    }),

  minHeight: (theme) => ({
      ...theme('spacing'),
    }),

    borderWidth: {
        '3': '3px',
        '5': '5px',
        '6': '6px',
        '7': '7px',
        '8': '8px',
    },

    borderRadius: {
      'ml': '0.3125rem', // for 5px rounded
      '4xl': '2.5rem' // for 40px rounded
  },


    fontSize: {
        mi: '.75rem',
        xs: '.814rem',
        md: '.9375rem',
        '2.5xl': '1.75rem',
        '3.5xl': '2rem',
        '4.5xl': '2.5rem',
        '5.5xl': '3.5rem',
        '6.5xl': '4rem',
        '7.5xl': '5rem',
    }


    },
    screens: {
      'mv': '375px',
      // => @media (min-width: 480px) { ... }

      'xs': '480px',
      // => @media (min-width: 480px) { ... }

      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'ml': '992px', // Medium Large
      // => @media (min-width: 992px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'sl': '1199px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }    

      '3xl': '1922px',
      // => @media (min-width: 1922px) { ... }    

      'wrap': '1164px',
      // => @media (min-width: 1920px) { ... }    

  },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
