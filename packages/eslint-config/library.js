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
        "jsx-a11y/label-has-associated-control": "off",
        "jsx-a11y/no-noninteractive-tabindex": "off",
        "jsx-a11y/tabindex-no-positive": "off",
        "@typescript-eslint/no-explicit-any": "off",
        "react/jsx-no-useless-fragment": "off",
        "no-console": "off",
      },
    },
    {
      files: ["**/.storybook/test-runner.ts"],
      rules: {
        "no-console": "off",
      },
    },
    // Storybook files
    {
      files: ["**/?(*.)+(stories).[jt]s?(x)"],
      rules: {
        "jsx-a11y/label-has-associated-control": "off",
        "jsx-a11y/no-noninteractive-tabindex": "off",
        "react/jsx-no-useless-fragment": "off",
        "no-console": "off",
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
    "no-use-before-define": [
      "error",
      {
        functions: false,
        // TODO: Move Styled-Components to be defined before using
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
          "**/tsup.config.@(js|ts)",
          "**/.storybook/*.@(js|jsx|ts|tsx)",
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
    "no-restricted-exports": [
      "error",
      {
        restrictedNamedExports: ["then"],
      },
    ],
    "prefer-destructuring": ["error", { object: true, array: false }],
    "consistent-return": "off",
    "default-case": "off",
    "no-else-return": "off",
    // TODO: REMOVE
    "react/no-array-index-key": "off",
    "react-hooks/exhaustive-deps": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "no-shadow": "off",
    "no-plusplus": "off",
    // "no-plusplus": ["error", { allowForLoopAfterthoughts: true }],
    // TODO: REMOVE CHANGES CAUSED BY THIS
    "react/function-component-definition": "off",
  },
  settings: {
    "import/resolver": {
      typescript: {
        project,
      },
    },
  },
  ignorePatterns: [
    // Ignore dotfiles
    ".*.js",
    "node_modules/",
    "dist/",
    "!.storybook",
  ],
};
