export default {
  "apps/website/**/*.(ts|tsx|js|jsx)": [
    "eslint --max-warnings 0 --config ./apps/website/eslint.config.mjs",
    "prettier --write",
  ],
  "packages/lib/**/*.{js,jsx,ts,tsx}": [
    "eslint --max-warnings 0 --config ./packages/lib/eslint.config.mjs",
    "prettier --write",
  ],
};
