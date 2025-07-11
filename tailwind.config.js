/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        aventi: ['Aventi', 'sans-serif'],
        quloon: ['Quloon', 'sans-serif'],
        might: ['Might Courage', 'sans-serif'],
        advio: ['Advio', 'sans-serif'],
        madloud: ['Madloud', 'sans-serif'],
        sinisuka: ['Sinisuka', 'sans-serif'],
        thurkle: ['Thurkle', 'sans-serif'],
      },

      keyframes: {
        marqueeLeft: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        marqueeRight: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      
      animation: {
        marqueeLeft: 'marqueeLeft 10s linear infinite',
        marqueeRight: 'marqueeRight 10s linear infinite',
      },

    },
    container: {
      center: true,
    }
  },
  plugins: [],
  corePlugins: {
    preflight: false
  }
};