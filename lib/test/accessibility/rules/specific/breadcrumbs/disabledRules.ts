/**
 * Array of accessibility rule IDs to be disabled in both Jest and Storybook for the breadcrumbs component.
 *
 */
const disabledRules = [
  // Disable landmark unique valid rule to prevent errors from having multiple nav in the same page (that can happen in testing environments)
  "landmark-unique",
];

export default disabledRules;
