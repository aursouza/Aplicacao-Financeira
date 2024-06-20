import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    { pattern: /^gap-/ },
    { pattern: /^w-/ },
    { pattern: /^h-/ },
    { pattern: /^text-/ },
    { pattern: /^bg-/ },
  ],
  theme: {
    extend: {
      colors: {
        primary: "#6B22A8",
        secondary: "#7E22CD",
        green: "#23C45D",
        darkGreen: "#21322A",
        orange: "#EDB200",
        darkOrange: "#373029",
        red: "#EF4541",
        darkRed: "#382529",
        black: "#040404",
        lightBlack: "#18181A",
        gray: "#403F45",
        lightGray: "#979797",
      },
      screens: {
        "2xl": { max: "1535px" },
        // => @media (max-width: 1535px) { ... }

        xl: { max: "1279px" },
        // => @media (max-width: 1279px) { ... }

        lg: { max: "1023px" },
        // => @media (max-width: 1023px) { ... }

        md: { max: "767px" },
        // => @media (max-width: 767px) { ... }

        sm: { max: "639px" },
        // => @media (max-width: 639px) { ... }
      },
    },
  },
  plugins: [],
};
export default config;
