/** @type {import('tailwindcss').Config} */
import rtl from "tailwindcss-rtl";

export const darkMode = "class";
export const content = [
  "./src/app/**/*.{js,ts,jsx,tsx}",
  "./src/components/**/*.{js,ts,jsx,tsx}",
];
export const theme = {
  extend: {
    screens: {
      custom: "1465px",
    },
    keyframes: {
      float: {
        "0%, 100%": { transform: "translateY(0)" },
        "50%": { transform: "translateY(-5px)" },
      },
    },
    animation: {
      float: "float 3s ease-in-out infinite",
    },
  },
};
export const plugins = [rtl()];
