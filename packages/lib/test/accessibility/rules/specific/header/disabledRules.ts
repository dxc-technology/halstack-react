/**
 * Array of accessibility rule IDs to be disabled in both Jest and Storybook for the header component.
 *
 */
const disabledRules = [
  // Disable landmark duplicate banner rule to prevent errors from having multiple headers in the same page (that can happen in testing environments)
  "landmark-no-duplicate-banner",
  // Disable landmark unique valid rule to prevent errors from having multiple headers in the same page (that can happen in testing environments)
  "landmark-unique",
];

export default disabledRules;
