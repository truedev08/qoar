module.exports = {
  theme: {

    /* ---------------------------------- Responsive Design ---------------------------------- */

    screens: {
      'tablet': '640px',
      // => @media (min-width: 640px) { ... }

      'laptop': '1024px',
      // => @media (min-width: 1024px) { ... }

      'desktop': '1280px',
      // => @media (min-width: 1280px) { ... }
    },

    //-------------------------- transitions --------------------------

    transitionProperty: { // defaults to these values
     'none': 'none',
     'all': 'all',
     'color': 'color',
     'bg': 'background-color',
     'border': 'border-color',
     'colors': ['color', 'background-color', 'border-color'],
     'opacity': 'opacity',
     'transform': 'transform',
   },
   transitionDuration: { // defaults to these values
     'default': '250ms',
     '0': '0ms',
     '100': '100ms',
     '250': '250ms',
     '500': '500ms',
     '750': '750ms',
     '1000': '1000ms',
   },
   transitionTimingFunction: { // defaults to these values
     'default': 'ease',
     'linear': 'linear',
     'ease': 'ease',
     'ease-in': 'ease-in',
     'ease-out': 'ease-out',
     'ease-in-out': 'ease-in-out',
   },
   transitionDelay: { // defaults to these values
     'default': '0ms',
     '0': '0ms',
     '100': '100ms',
     '250': '250ms',
     '500': '500ms',
     '750': '750ms',
     '1000': '1000ms',
   },
   willChange: { // defaults to these values
     'auto': 'auto',
     'scroll': 'scroll-position',
     'contents': 'contents',
     'opacity': 'opacity',
     'transform': 'transform',
   },

    borderRadius: {
      'none': '0',
      '10px': '10px',
      '12px': '12px',
      '16px': '16px',
      '20px': '20px',
      '24px': '24px',
      '36px': '36px',
      '48px': '48px',
      '60px': '60px',
    },

    //-------------------------- Gradients --------------------------

    linearGradients: ({
      colors: {
        'green-blue': ['#C5FE8D', '#7DE0FE'],
        'white-gray': ['#FEFEFE', '#C5FE8D'],
        'gray-white': ['#C5FE8D', '#FEFEFE'],
      },
    }),
    radialGradients: theme => ({
      colors: theme('colors'),
    }),
    conicGradients: theme => ({
      colors: theme('colors'),
    }),


    container: {

    },



    extend: {
      spacing: {
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
        '128': '32rem',
        '160': '40rem',
        '200': '50rem',
      },



      colors: {
        black: {
          '101': '#010000',
          '102': '#393939',
        },
        white: {
          '101': '#FEFEFE',
        },
        gray: {
          '101': '#DFDFDF',
          '102': '#DBDADA',
          '103': '#D5D5D5',
          '104': '#C8C8C8',
          '105': '#BABABA',
          '106': '#7D7D7D',
          '107': '#4A4A4A',
        },
        red: {
          '101': '#FE0101',
        },
        orange: {
          '101': '#FEB201',
        },
        yellow: {

        },
        green: {
          '101': '#C5FE8D',
        },
        blue: {
          '101': '#F0F8FF',
          '102': '#CCEBFF',
          '103': '#338AFF',
          '104': '#0023FF',
        },
        purple: {

        },
        pink: {

        },
        opacWhite: {
          '101': "rgba(254, 254, 254,0.3)",
          '102': "rgba(254, 254, 254,0.6)",
        },
        opacGray: {
          '101': "rgba(69, 69, 69,0.3)",
        },
      }
    }
  },
  variants: {
    backgroundColor: ['responsive', 'hover', 'focus'],
    transitionProperty: ['responsive'],
    transitionDuration: ['responsive'],
    transitionTimingFunction: ['responsive'],
    transitionDelay: ['responsive'],
    willChange: ['responsive'],
  },
  plugins: [
    require('tailwindcss-gradients')(),
    require('tailwindcss-transitions')(),
  ]
}
