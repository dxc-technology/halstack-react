/**
 * Array of accessibility rule IDs to be disabled in both Jest and Storybook for the data grid component.
 *
 */
const disabledRules = [
  // Disable scrollable region focusable rule to prevent errors from having an empty header for the expandable data grids
  "empty-table-header",
];

export default disabledRules;
