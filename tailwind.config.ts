import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./sections/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      neutral: {
        20: "#F7F7F7",
        30: "#E8E8E8",
        40: "#CECECE",
        50: "#B3B3B3",
        60: "#878787",
        70: "#696A6E",
        80: "#404145",
        90: "#303030",
      },
      black: "#000000",
      white: "#FFFFFF",
    },
    screens: {
      sm: "375px",
      md: "768px",
      lg: "1200px",
    },
    fontFamily: {
      uncut: ["Uncut", "sans-serif"],
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1.5rem",
        sm: "2rem",
        lg: "3rem",
      },
    },
    extend: {
      fontSize: {
        hero: "clamp(5.5rem, 7.48vw + 4rem, 10.75rem)",
      },
    },
  },
  plugins: [],
};
export default config;
