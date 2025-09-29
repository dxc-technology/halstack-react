export default {
  "apps/website/**/*.(ts|tsx|js|jsx)": [
    // "prettier --write",
    "eslint --max-warnings 0 --config ./apps/website/eslint.config.js"
  ],
  "packages/lib/**/*.{js,jsx,ts,tsx}": [
    // "prettier --write",
    "eslint --max-warnings 0 --config ./packages/lib/eslint.config.js"
  ],
}