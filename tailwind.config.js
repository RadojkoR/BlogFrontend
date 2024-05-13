/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'bgHeaderHome': "url(./Assets/Images/homeHeader.jpg)",
        'bgHeaderAbout': "url(./Assets/Images/About-Header.webp)",
        'bgHeaderDestination': "url(./Assets/Images/herceg_novi-destinationHeader.webp)",
        'bgHeaderBlog': "url(./Assets/Images/HeaderBlog.webp)",
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

