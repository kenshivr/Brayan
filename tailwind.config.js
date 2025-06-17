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
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false
  }
};