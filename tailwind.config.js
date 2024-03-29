/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {

      screens: {
        md: { min: "415px", max: "800px" },

        sm: { max: "414px" }
      },
      
      fontFamily: {
        Poppins: ["Poppins", "sans-serif"]
      },
      

      backgroundImage:{
        'frame': "url('/src/assets/Frame.png')",
        'mainBG': "url('/src/assets/mainBG.png')",
        'walletBG': "url('/src/assets/walletBG.png')",
        'walletCardBG': "url('/src/assets/walletCardBG.png')"
      }

    },
  },
  plugins: [],
}

