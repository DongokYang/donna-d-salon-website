/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {

      rotate: {
        '2': '2deg',
      },

      colors: {
        customGoldStart: '#FFC74D',
        customGoldEnd: '#D98F20',
        customGrayDark: '#1D1D1D', 

      },

      backgroundImage: {
        'gradient-custom-gold': 'linear-gradient(to right, #FFC74D, #D98F20)',
      },

      fontFamily: {
        Aboreto: ['"Aboreto", serif'],
        Brush: ['"Alex Brush", serif'],
        Lato: ['"Lato", serif'],
        
      },

      fontSize: {
        'h1': ['30px', { lineHeight: '1.5', letterSpacing: '0.03em' }],
        'h1-md': ['40px', { lineHeight: '1.5' }],
        'h2': ['23px', { lineHeight: '1.5' }],
        'h2-md': ['25px', { lineHeight: '1.5' }], 
        'h3': ['23px', { lineHeight: '1.5' }],
        'h3-md': ['24px', { lineHeight: '1.5' }], 
        'h4': ['16px', { lineHeight: '1.5' }], 
        'h4-md': ['17px', { lineHeight: '1.5' }], 
        'h4-lg': ['18px', { lineHeight: '1.5' }],
        'p': ['15px', { lineHeight: '1.8' }],
        // 'p-md': ['16px', { lineHeight: '1.9' }],
        'p-lg': ['16px', { lineHeight: '1.9' }], 
      },
      
    },
  },
  plugins: [
    function ({ addComponents, addUtilities, theme }) {

      addComponents({
        'h1': {
          '@apply font-Aboreto text-h1 font-bold': {},
          '@screen md': {
            '@apply text-h1-md': {},
          },
        },
        'h2': {
          '@apply font-Aboreto text-h2': {},
          '@screen md': {
            '@apply text-h2-md': {},
          },
        },
        'h3': {
          '@apply font-Brush text-h3': {},
          '@screen md': {
            '@apply text-h3-md': {},
          },
        },
        'h4': {
          '@apply font-Aboreto text-h4': {},
          '@screen md': {
            '@apply text-h4-md': {},
          },
          '@screen lg': {
            '@apply text-h4-lg': {},
          },
        },
        'p': {
          '@apply font-Lato text-p text-white font-[300]': {},
          // '@screen md': {
          //   '@apply text-p-md': {},
          // },
          '@screen lg': {
            '@apply text-p-lg': {},
          },
        },
      });
    },
  ],
};