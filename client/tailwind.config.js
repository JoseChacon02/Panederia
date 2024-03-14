/** @type {import('tailwindcss').Config} */
import { nextui } from "@nextui-org/react";

export default {
  content: [
    "./src/**/*.{html,js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        pink: {
          100: "#FDEDEF",
          200: "#FAD9DD",
          300: "#F5B3BB",
          400: "#F08E9A",
          500: "#EB6878",
        },
        brown: {
          100: "#EDE3E3",
          200: "#B78E8E",
          300: "#8E5A5A",
          400: "#553636",
          500: "#2B1B1B"
        },
        neutral: {
          100: "#DCDBE1",
          200: "#8E8B9D",
          300: "#726F84",
          400: "#403E4A",
          500: "#27262D"
        }
      },
      backgroundImage: {
        homeHead:
          "url('/images/1.jpg')",
      },
      fontFamily: {
        "MontserratB" : ['MontserratB'],
        "MontserratM" : ['MontserratM']

      },
      letterSpacing: {
        tightest: '-.075em',
        tighter: '-.05em',
        tight: '-.025em',
        normal: '0',
        wide: '.025em',
        wider: '0.5em',
        widest: '2em',
      }
    },
  },
  plugins: [nextui()],
};
