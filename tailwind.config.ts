import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
    darkMode: ["class"],
    content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors:{
        theme:"#c89116",
        primary: "#DAA520",
        secondary: "#ffde59",
        texttheme:"#2c2c2c"
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", ...fontFamily.sans],
      },
      keyframes:{
        rotate: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      animation:{
        rotate: 'rotate 1s linear infinite'
      }
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
