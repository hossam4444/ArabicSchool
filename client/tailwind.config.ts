import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    fontFamily: {
      nunito: 'var(--font-nunito-sans)',
      ibm: 'var(--fontIBM)',
    },
    fontWeight: {
      thin: '100',
      normal: '400',
      bold: '700',
    },
    extend: {
      backgroundImage: {
      },
      // boxShadow: {
      //   '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
      // },
      colors: {
        primary: "hsl(var(--color-primary) / <alpha-value>)",
        // btnbg: {
        //   1: "hsl(var(--btn-bg-primary) / <alpha-value>)",
        //   2: "hsl(var(--btn-bg-second) / <alpha-value>)",
        //   3: "hsl(var(--btn-bg-third) / <alpha-value>)",
        // },
        bkg: {
          light: "hsl(var(--light) / <alpha-value>)",
          dark: "hsl(var(--dark) / <alpha-value>)",
          semidark: "hsl(var(--semi-dark) / <alpha-value>)",
        },
        // btntxt: {
        //   1: "hsl(var(--btn-txt-color-primary) / <alpha-value>)",
        //   2: "hsl(var(--btn-txt-color-second) / <alpha-value>)",
        // },
        content: {
          prim: "hsl(var(--txt-color-primary) / <alpha-value>)",
          sec: "hsl(var(--txt-color-second) / <alpha-value>)",
          nav: "hsl(var(--txt-color-dark-secondary) / <alpha-value>)",
        },
      },
      // animation: {
      //   "spin-slow": "spin 25s ease-in-out infinite reverse",
      //   "spin-slower": "spin 35s ease infinite",
      // },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '0.5rem',
        md: '1rem',
        lg: '1.5rem'
      }
    }
  },
  plugins: [],
};
export default config;
