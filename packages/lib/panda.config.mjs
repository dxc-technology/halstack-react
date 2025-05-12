import { defineConfig } from "@pandacss/dev";
import { badgeRecipe } from "./src/badge/badge.recipe";

export default defineConfig({
  // Whether to use css reset
  preflight: true,
  presets: ["@pandacss/dev/presets"],
  // Where to look for your css declarations
  include: ["src/**/*.{js,jsx,ts,tsx}"],
  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {
      recipes: { badge: badgeRecipe },
    },
  },

  // The output directory for your css system
  outdir: "styled-system",

  // The JSX framework to use
  jsxFramework: "react",
});
