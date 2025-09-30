/**
 * Array of accessibility rule IDs to be disabled in both Jest and Storybook for the footer component.
 *
 */
const disabledRules = [
  // Disable landmark duplicate content info rule to prevent errors from having multiple footers in the same page (that can happen in testing environments)
  "landmark-no-duplicate-contentinfo",
  // Disable landmark unique valid rule to prevent errors from having multiple footers in the same page (that can happen in testing environments)
  "landmark-unique",
];

export default disabledRules;
