/**
 * Array of accessibility rule IDs to be disabled in both Jest and Storybook for the sidenav component.
 *
 */
const disabledRules = [
  // Disable landmark unique rule to allow multiple sidenavs in the same page without having to set different ids
  "landmark-unique",
];

export default disabledRules;
