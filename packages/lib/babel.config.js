module.exports = {
  presets: [
    "@babel/preset-env",
    [
      "@babel/preset-react",
      {
        runtime: "automatic",
      },
    ],
    "@babel/preset-typescript",
  ],
  plugins: [
    "@babel/plugin-proposal-optional-chaining",
    "@babel/plugin-proposal-nullish-coalescing-operator",
    "@babel/plugin-transform-runtime",
    "@emotion",
  ],
  ignore: ["**/*.stories.jsx", "**/*.stories.tsx", "**/*.d.ts"],
};
