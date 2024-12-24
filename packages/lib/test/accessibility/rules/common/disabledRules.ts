/**
 * Array of accessibility rule IDs to be disabled in both Jest and Storybook.
 */
const disabledRules = [
  // Disable heading order rule to prevent errors from using h2 and h4 in the titles of the stories
  "heading-order",
  // Disable autocomplete valid rule to prevent errors from "nope" which is used on purpose as an invalid autocomplete value
  "autocomplete-valid",
  // Disable landmark rules when testing isolated components.
  "region",
  // Disable label rule to prevent error from inputs that have no label on purpose (even though it is not really recommended for accessibility)
  "label",
  // TODO: REMOVE
  "color-contrast",
];

export default disabledRules;
