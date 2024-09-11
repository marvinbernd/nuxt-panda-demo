import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: [
    "./app.vue",
    "./components/**/*.{js,jsx,ts,tsx,vue}",
    "./pages/**/*.{js,jsx,ts,tsx,vue}",
    "./slices/**/*.{js,jsx,ts,tsx,vue}",
  ],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {
      tokens: {
        colors: {
          primary: { value: "#8A1203" },
          secondary: { value: "#FCF9E7" },
          white: { value: "#FFFFFF" },
        },
      },
    },
    textStyles: {
      body: {
        description: "The body text style - used in paragraphs",
        value: {
          fontFamily: "Roboto",
          fontWeight: "400",
        },
      },
      heading: {
        description: "The heading text style - used in headings",
        value: {
          fontFamily: "Roboto Serif",
          fontWeight: "400",
        },
      },
    },
  },

  globalCss: {
    "html, body": {
      textStyle: "body",
      fontSize: "px",
      lineHeight: "24px",
    },
    p: {
      marginBottom: 6,
    },
    h1: {
      textStyle: "heading",
      fontSize: "48px",
      lineHeight: "56px",
      marginBottom: 6,

      "@media (max-width: 768px)": {
        fontSize: "36px",
        lineHeight: "44px",
      },
    },
    h2: {
      textStyle: "heading",
      fontSize: "36px",
      lineHeight: "44px",
      marginBottom: 6,

      "@media (max-width: 768px)": {
        fontSize: "24px",
        lineHeight: "32px",
      },
    },
    h3: {
      textStyle: "heading",
      fontSize: "24px",
      fontWeight: "500",
      lineHeight: "32px",
      marginBottom: 2,

      "@media (max-width: 768px)": {
        fontSize: "20px",
        lineHeight: "28px",
      },
    },
    h4: {
      textStyle: "heading",
      fontSize: "16px",
      lineHeight: "24px",
      marginBottom: 0,
    },
    strong: {
      fontWeight: "500",
    },
  },

  // The output directory for your css system
  outdir: "styled-system",
});
