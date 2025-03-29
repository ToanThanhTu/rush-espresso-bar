import type { Config } from "tailwindcss"
import TailwindAnimatePlugin from "tailwindcss-animate"
import plugin from "tailwindcss/plugin"

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "hsl(var(--primary))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
        },
        background: {
          DEFAULT: "hsl(var(--background))",
          secondary: "hsl(var(--background-secondary))",
        },        
        foreground: {
          DEFAULT: "hsl(var(--foreground))",
          secondary: "hsl(var(--foreground-secondary))",
        },
        active: {
          DEFAULT: "hsl(var(--active))",
          foreground: "hsl(var(--active-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        black: {
          DEFAULT: "hsl(var(--black))",
        },
        white: {
          DEFAULT: "hsl(var(--white))",
        },
        stroke: {
          DEFAULT: "hsl(var(--stroke))",
        },        
      },
      textShadow: {
        sm: "0 1px 2px var(--primary)",
        DEFAULT: "0 2px 4px var(--primary)",
        lg: "0 8px 16px var(--primary)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          "text-shadow": (value) => ({
            textShadow: value,
          }),
        },
        {
          values: theme("textShadow"),
        }
      )
    }),
    TailwindAnimatePlugin,
  ],
} satisfies Config
