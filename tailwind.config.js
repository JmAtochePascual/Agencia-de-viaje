/** @type {import('tailwindcss').Config} */
export default {
  content: ['./views/**/*.pug'],
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('/img/superior.jpg')",
      }
    },
  },
  plugins: [],
}

