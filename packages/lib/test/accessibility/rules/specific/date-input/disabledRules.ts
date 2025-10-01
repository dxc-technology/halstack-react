/**
 * Array of accessibility rule IDs to be disabled in both Jest and Storybook for the date input component.
 *
 */
const disabledRules = [
  // TODO: Remove when the false positives are fixed
  // Disable aria allowed rule to prevent false positive from gridcell role not being allowed in buttons
  "aria-allowed-role",
  // Disable aria dialog name rule to prevent false positive from dialog role not having an accessible name
  "aria-dialog-name",
];

export default disabledRules;
