/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    colors: {
      // default colors
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,

      // project colors
      orange: {
        primary: "#E15E29",
        secondary: "#E7792B",
      },
      blue: {
        primary: "#006D9E",
        dark: "#3A568E",
      },
      yellow: "#FBC400",
      "bg-gray": "#F6F6FB",
      social: {
        facebook: "#3B5998",
        instagram: "#E4405F",
        twitter: "#1DA1F2",
        youtube: "#FF0000",
        linkedin: "#0077B5",
      },
    },
    fontSize: {
      sm: "0.875rem", // 14px
      base: "1rem", // 16px
      lg: "1.125rem", // 18px
      xl: "1.25rem", // 20px
      "2xl": "1.5rem", // 24px
      "3xl": "1.875rem", // 30px
      "4xl": "2.25rem", // 36px
      "5xl": "3rem", // 48px
    },
    extend: {
      spacing: {
        128: "32rem",
        144: "36rem",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
