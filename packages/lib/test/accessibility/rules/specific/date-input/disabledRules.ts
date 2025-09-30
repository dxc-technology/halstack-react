/**
 * Array of accessibility rule IDs to be disabled in both Jest and Storybook for the date input component.
 *
 */
const disabledRules = [
  // TODO: Remove when the false positive is fixed
  // Disable aria allowed rule to prevent false positive from gridcell role not being allowed in buttons
  "aria-allowed-role",
];

export default disabledRules;
