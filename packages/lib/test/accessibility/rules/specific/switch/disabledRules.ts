/**
 * Array of accessibility rule IDs to be disabled in both Jest and Storybook for the switch component.
 *
 */
const disabledRules = [
  // Disable aria toggle field name rule to prevent errors from having switches with no label on purpose
  "aria-toggle-field-name",
];

export default disabledRules;
