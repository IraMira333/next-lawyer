import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    listStyleType: { square: "square" },
    extend: {
      variants: {
        height: ["responsive", "hover", "focus"],
      },
      transitionProperty: {
        height: "height",
      },
      screens: {
        bigmob: "400px",
        tab: "768px",
        pc: "1280px",
        desk: "1536px",
        deskxl: "1920px",
      },
      backgroundColor: {
        accentBg: "var(--accent-bgcolor)",
        primary: "var(--primary-bgcolor)",
      },
      fontFamily: {
        mulish: ["var(--font-mulish)"],
        lora: ["var(--font-lora)"],
        robotoCond: ["var(--font-robotoCond)"],
      },
      colors: {
        primary: "var(--primary-text-color)",
        nav: "var(--nav-text-color)",
        accent: "var(--accent-text-color)",
      },
      boxShadow: {
        custom: "rgba(0, 0, 0, 0.12) 0px 0px 8px 4px inset",
        hero: "rgba(0, 0, 0, 0.6) 0px 4px 8px 0px",
        card: "rgb(171, 169, 167) 0 4px 4px 4px",
      },
    },
  },
  plugins: [],
};

export default config;
