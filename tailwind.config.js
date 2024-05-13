/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'bgHeaderHome': "url(./public/Images/homeHeader.jpg)",
        'bgHeaderAbout': "url(./public/Images/About-Header.webp)",
        'bgHeaderDestination': "url(./public/Images/herceg_novi-destinationHeader.webp)",
        'bgHeaderBlog': "url(./public/Images/HeaderBlog.webp)",
      },
      backgroundColor: {
        'nav': '#1d2228'
      },
      colors: {
        orange: '#fb8122'
      },
      fontFamily:{
        'caveat': '"Caveat", cursive'
      }

    },
  },
  plugins: [],
}

