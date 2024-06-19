import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
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
        sm: "480px",
        md: "768px",
        lg: "976px",
        xl: "1440px",
      },
    },
  },
  plugins: [],
};
export default config;
