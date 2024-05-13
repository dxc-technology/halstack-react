/**
 * Array of accessibility rule IDs to be disabled in both Jest and Storybook for the resultset table component.
 *
 */
const disabledRules = [
  // TODO: Find a better solution
  // Disable scrollable region focusable rule to prevent errors from having scrollable tables with no focusable elements
  "scrollable-region-focusable",
];

export default disabledRules;
