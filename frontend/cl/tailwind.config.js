/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", 
  ],
  theme: {
    extend: {
      colors:{
        mine:'#181818',
        mine_lighter: '#545454',
      },
      margin: {
        '2p':'2%',
        '3p':'3%',
        '4p':'4%',
        '5p':'5%',
        '10p': '10%',  
        '15p': '15%',  
        '19p': '19%', 
        '25p': '25%',
        '8p': '8%',
        '34p': '34%',
        '37p': '37%', 
        '40p': '40%',
        '45p': '45%',
        '50p': '50%',
        '60p': '60%',
        '70p': '70%',
        '80p': '80%',
        '90p': '90%',
        '100p': '100%',
        '99p%': '99%',
      },
      fontFamily: {
        'lucida': ['"Lucida Console"', 'monospace'],
        'syne': ['Syne', 'sans-serif'],
        'Gas':["Gasoek One", 'sans-serif']
      },
      fontSize: {
        '8.5xl': '7rem', 
      },
      cursor: {
        'fancy': 'url(curr.png),pointer'
      },
      backgroundSize: {
        '400%': '400% 400%',
      },
      keyframes: {
        fadein:{
          '0%':{opacity: 0 ,transform: 'translateY(20px)'},
          '100%':{opacity: 1 ,transform: 'translateY(0)'},
        },
        gradient: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        slide: {
          '0%': { transform: 'translateX(0)', opacity: '0' },
          '100%': { transform: 'translateX(300px)', opacity: '1' },
        },
        typewriter: {
          '0%': { width: '0ch' },
          '100%': { width: '30ch' },
        },
        blink: {
          '0%, 100%': { 'border-color': 'transparent' },
          '50%': { 'border-color': 'black' }, 
        },
      },
      animation: {
        gradient: 'gradient 15s ease infinite',
        slide: 'slide 3s ease-in-out infinite',
        fadein1:'fadein 5.5s forwards;',
        fadein2:'fadein 2.5s forwards;',
        fadein3:'fadein 6.5s forwards;',
        typewriter: 'typewriter 4s steps(30, end) forwards',
        blink: 'blink 0.75s  infinite',
      },

    },
  },
  plugins: [],
}
