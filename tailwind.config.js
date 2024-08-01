/** @type {import('tailwindcss').Config} */
export default {
  content: ['./views/**/*.pug'],
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('/img/superior.jpg')",
        'cupon': "url('/img/cupon.jpg')",
      },
      height: {
        '500': '500px',
      }
    },
  },
  plugins: [],
}

