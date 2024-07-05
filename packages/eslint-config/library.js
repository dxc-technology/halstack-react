const { resolve } = require("node:path");

const project = resolve(process.cwd(), "tsconfig.json");

/*
 * This is a custom ESLint configuration for use with
 * internal (bundled by their consumer) libraries
 * that utilize React.
 */

module.exports = {
  root: true,
  env: {
    "jest/globals": true,
    browser: true,
  },
  extends: [
    // "@dxc-technology/eslint-config/react-internal.js",
    "airbnb",
    "prettier",
    "turbo",
    "plugin:jest/recommended",
    "plugin:storybook/recommended",
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    // "plugin:security/recommended-legacy",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
  ],
  plugins: ["jest", "@typescript-eslint"],
  overrides: [
    // Test files
    {
      files: ["**/?(*.)+(spec|test).[jt]s?(x)"],
      rules: {
        "jsx-a11y/tabindex-no-positive": "off",
        "jsx-a11y/no-noninteractive-tabindex": "off",
        "@typescript-eslint/no-explicit-any": "off",
      },
    },
    // Storybook files
    {
      files: ["**/?(*.)+(stories).[jt]s?(x)"],
      rules: {
        "jsx-a11y/no-noninteractive-tabindex": "off",
      },
    },
    // FocusLock file
    {
      files: ["**/FocusLock.[jt]s?(x)"],
      rules: {
        "jsx-a11y/no-noninteractive-tabindex": "off",
        "jsx-a11y/no-static-element-interactions": "off",
      },
    },
  ],
  rules: {
    curly: "warn",
    "no-plusplus": ["error", { allowForLoopAfterthoughts: true }],
    "no-use-before-define": [
      "error",
      {
        functions: false,
        // TODO: Put Styled-Components variables in a separate file and import them
        variables: false,
      },
    ],
    "no-underscore-dangle": [
      "error",
      {
        allow: ["_options", "_links", "hasCanceled_"],
      },
    ],
    "no-nested-ternary": "off",
    "import/extensions": "off",
    "import/no-extraneous-dependencies": [
      "error",
      {
        devDependencies: [
          "**/*.@(test|stories).@(js|jsx|ts|tsx)",
          "**/axe-helper.@(js|ts)",
          "**/setupJestAxe.@(js|ts)",
        ],
      },
    ],
    "react/function-component-definition": [
      "error",
      {
        namedComponents: "arrow-function",
        unnamedComponents: "arrow-function",
      },
    ],
    "react/self-closing-comp": "off",
    "react/jsx-filename-extension": [
      "warn",
      {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
    ],
    "react/jsx-props-no-spreading": "off",
    "react/jsx-no-useless-fragment": ["warn", { allowExpressions: true }],
    "react/no-array-index-key": "warn",
    "react/require-default-props": "off",
    "@typescript-eslint/no-explicit-any": "warn",
    // TODO: REMOVE
    "react/no-array-index-key": "off",
    "react-hooks/exhaustive-deps": "off",
    "@typescript-eslint/no-explicit-any": "off",
  },
  // settings: {
  //   "import/resolver": {
  //     node: {
  //       extensions: [".js", ".jsx", ".ts", ".tsx"],
  //       moduleDirectory: ["node_modules", "src"],
  //     },
  //   },
  // },
  settings: {
    "import/resolver": {
      typescript: {
        project,
      },
    },
  },
};
