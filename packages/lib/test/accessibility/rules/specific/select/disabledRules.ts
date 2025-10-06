/**
 * Array of accessibility rule IDs to be disabled in both Jest and Storybook for the header component.
 *
 */
const disabledRules = [
  // TODO: Work on nested interaction with the DxcCheckbox component to prevent these issues
  "nested-interactive",
  "scrollable-region-focusable",
  "aria-required-children",
];

export default disabledRules;
