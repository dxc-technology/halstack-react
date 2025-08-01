module.exports = {
  presets: [
    ["@babel/preset-env", { modules: false }],
    ["@babel/preset-react", { runtime: "automatic" }],
    "@babel/preset-typescript",
  ],
  plugins: [
    "@babel/plugin-proposal-optional-chaining",
    "@babel/plugin-proposal-nullish-coalescing-operator",
    "@babel/plugin-transform-runtime",
    [
      "@emotion",
      {
        sourceMap: true,
        autoLabel: "dev-only",
        labelFormat: "[local]",
      },
    ],
  ],
  ignore: ["**/*.stories.*", "**/*.d.ts"],
};
