/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          background: "#eeeeee",
          foreground: "#cf0a0a",
        },
        footer: {
          first: "#cf0a0a",
          second: "#000000",
        },
        light: "#ffffff",
        gray: "#c2c2c2",
        darkGray: "#5c5c5c",
        dark: "#000000",
      },
    },
  },
  plugins: [],
};
