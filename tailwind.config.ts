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
        bigmob: "520px",
        tab: "768px",
        pc: "1280px",
        desk: "1536px",
        deskxl: "1920px",
      },
      backgroundColor: {
        accentBg: "var(--accent-bgcolor)",
        primary: "var(--primary-bgcolor)",
        heroBg: " rgba(245, 247, 250, 0.7)",
        footer: "#262626",
      },
      fontFamily: {
        raleway: ["var(--font-raleway)"],
        lora: ["var(--font-lora)"],
        robotoSlab: ["var(--font-robotoSlab)"],
      },
      colors: {
        primary: "var(--primary-text-color)",
        nav: "var(--nav-text-color)",
        accent: "var(--accent-text-color)",
        light: "#F5F5F5",
      },
      boxShadow: {
        custom: "rgba(0, 0, 0, 0.12) 0px 0px 8px 4px inset",
        hero: "rgba(0, 0, 0, 0.6) 0px 4px 8px 0px",
        card: "rgb(171, 169, 167) 0 4px 4px 4px",
      },
      height: {
        lineWithoutHexagonMob: "calc(100% - 12px)",
        lineWithoutHexagonTab: "calc(100% - 24px)",
        lineWithoutHexagonPC: "calc(100% - 44px)",
      },
      backgroundImage: {
        accentGradient: "linear-gradient(to bottom, #FF9430 0%, #FF5C00 100%)",
      },
      width: {
        tabAdditionalServices: "calc(50% - 8px)",
        pcAdditionalServices: "calc(33% - 11px)",
      },
    },
  },
  plugins: [],
};

export default config;
