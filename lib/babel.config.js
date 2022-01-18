module.exports = {
  presets: ["@babel/react", "@babel/env", "@babel/preset-typescript"],
  plugins: [
    "@babel/plugin-proposal-optional-chaining",
    "@babel/plugin-proposal-nullish-coalescing-operator",
    "@babel/plugin-transform-runtime",
  ],
  ignore: ["**/*.stories.jsx", "**/*.stories.tsx", "**/*.d.ts"],
};
