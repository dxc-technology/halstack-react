export default {
  "apps/website/**/*.(ts|tsx|js|jsx)": [
    "eslint --max-warnings 0 --config ./apps/website/eslint.config.js",
    "prettier --write",
  ],
  "packages/lib/**/*.{js,jsx,ts,tsx}": [
    "eslint --max-warnings 0 --config ./packages/lib/eslint.config.js",
    "prettier --write",
  ],
};
