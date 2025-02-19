const { transform } = require("framer-motion");
import plugin from "tailwindcss/plugin";
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    screens: {
      sm: "240px",
      md: "420px",
      lg: "768px",
      xl: "1398px",
      xxl: "1536px",
    },
    extend: {
      fontFamily: {
        sans: ['Satoshi', 'sans-serif'], // Set Satoshi as the default sans-serif
      },
      animation: {
        spin: "spin 100s linear infinite",
        spinReverse: "spinReverse 100s linear infinite",
        slide: "slide 300s linear infinite",
        slideReverse: "slide 150s reverse infinite",
        rotate360: "60s infinite forwards linear",
        carousel: "linear infinite 30s slide",
        navigationList: "navigationList ease 0.5s",
        hamburgerMenuShow: "hamburgerMenuShow ease-in-out 0.5s",
        hamburgerMenuHide: "hamburgerMenuHide ease-in-out 0.5s ",
        chatbot: "ease-in 3s",
        testimonials1: "slide 1s linear 1s both",
        testimonials2: "slide 1s linear 7s both",
        testimonials3: "slide 1s linear 12s both",
        roll: "roll 10s steps infinite",
      },
      keyframes: {
        testimonials1: {
          "0%": {
            transform: "translateX(0)",
          },
          "100%": {
            transform: "translateX(-100%)",
          },
        },

        testimonials2: {
          "0%": {
            transform: "translateX(0)",
          },
          "100%": {
            transform: "translateX(-100%)",
          },
        },

        testimonials3: {
          "0%": {
            transform: "translateX(0)",
          },
          "100%": {
            transform: "translateX(-100%)",
          },
        },

        chatbot: {
          "0%": {
            transform: "translateY(100%)",
          },
          "100%": {
            transform: "translateY(0)",
          },
        },
        hamburgerMenuShow: {
          "0%": {
            transform: "translateX(100%)",
          },
          "100%": {
            transform: "translateX(0)",
          },
        },
        hamburgerMenuHide: {
          "0%": {
            transform: "translateX(0)",
          },
          "100%": {
            transform: "translateX(-100%)",
          },
        },
        navigationList: {
          "0%": {
            transform: "translateY(-20px)",
          },
          "100%": {
            transform: "translateY(0)",
          },
        },

        carousel: {
          "0%": {
            transform: "translateX(0)",
          },
          "100%": {
            transform: "translateX(-400px)",
          },
        },

        slide: {
          "0%": {
            transform: "translateX(0)",
          },
          "100%": {
            transform: "translateX(-100%)",
          },
        },

        rotate360: {
          "0%": {
            transform: "rotateY(0deg)",
          },
          "100%": {
            transform: "rotateY(-360deg)",
          },
        },

        spin: {
          "0%": {
            transform: "rotate(0deg)",
          },
          "100%": {
            transform: "rotate(360deg)",
          },
        },
        spinReverse: {
          "0%": {
            transform: "rotate(0deg)",
          },
          "100%": {
            transform: "rotate(-360deg)",
          },
        },
        roll: {
          "0%": {
            transform: "translateY(0)",
          },
          "25%": {
            transform: "translateY(-25%)",
          },
          "50%": {
            transform: "translateY(-50%)",
          },
          "75%": {
            transform: "translateY(-75%)",
          },
          "100%": {
            transform: "translateY(-100%)",
          },
        },
      },

      perspective: {
        1000: "1000px",
      },

      colors: {

        // primary colors
        "primary-color-900" : "var(--primary-color-900)",
        "primary-color-800" : "var(--primary-color-800)",
        "primary-color-700" : "var(--primary-color-700)",
        "primary-color-600" : "var(--primary-color-600)",
        "primary-color-500" : "var(--primary-color-500)",
        "primary-color-400" : "var(--primary-color-400)",
        "primary-color-300" : "var(--primary-color-300)",
        "primary-color-200" : "var(--primary-color-200)",
        "primary-color-100" : "var(--primary-color-100)",

        // white colors
        "primary-color-white": "var(--primary-color-white)",


        // background colors
        "bg-color-100": "var(--bg-color-100)",
        "bg-color-900": "var(--bg-color-900)",
       
        // text color
        "text-color-heading-900" : "var(--text-color-heading-900)",
        "text-color-heading-600": "var(--text-color-heading-600)",
        "text-color-para-900": "var(--text-color-para-900)",


        // white text color

        "primary-color-white-900": "var(--primary-color-white-900)",
        "primary-color-white-700": "var(--primary-color-white-700)",
        "primary-color-white-300": "var(--primary-color-white-300)",


        // footer background color
        "bg-footer-900": "var(--bg-footer-900)",          

        blue: "#BAE0FF",
        green: "#b5eec3",
        yellow: "#ffffb9",
        purple: "#f3e7fd",
        red: "#ffcdce",
        primaryBlue: "#2475BB",
        buttonCTA: "#194185", // old color #8000FF
        buttonCTA2: "#8000FF", 
        colorText: "#232323",
        title: "#3B82F6",
      },
      backgroundImage: (theme) => ({
        "gradient-rainbow": "linear-gradient(180deg, #BAE0FF 0%, #FFFFFF 100%)",
      }),
    },
  },
  
  plugins: [
    plugin(({addVariant})=>{addVariant('children', '&>*')})
  ],
}





// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: ["./src/**/*.{html,js,jsx}"],
//   mode: "jit",
//   theme: {
//     container: {
//       center: true,
//     },

//     screens: {
//       sm: "240px",
//       md: "420px",
//       lg: "768px",
//       xl: "1398px",
//       xxl: "1536px",
//     },
//     extend: {
      

//       fontFamily: {
//         roboto: ["Roboto", "sans-serif"],
//       },
//     },
//   },
//   plugins: [
//     plugin(({addVariant})=>{addVariant('children', '&>*')})
//   ],
// };
