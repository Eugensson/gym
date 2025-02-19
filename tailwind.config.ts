import animate from "tailwindcss-animate";
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "0",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1038px",
    },
    fontFamily: {
      primary: ["var(--font-inter)", "sans-serif"],
      secondary: ["var(--font-open-sans)", "sans-serif"],
    },
    extend: {
      colors: {
        primary: {
          "100": "#a5ffce",
          "200": "#4ae290",
          "300": "25c870",
        },
        neutral: {
          "100": "#ffffff",
          "200": "#dedee3",
          "300": "#9797a1",
          "400": "#595962",
          "500": "#131316",
        },
        page: "#fcfcff",
      },
      backgroundImage: {
        banner: "url('/images/banner/bg.png')",
        faq: "url('/images/faq/bg.svg')",
      },
      backgroundSize: {
        auto: "auto",
        cover: "cover",
        contain: "contain",
        custom: "95%",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [animate],
} satisfies Config;
