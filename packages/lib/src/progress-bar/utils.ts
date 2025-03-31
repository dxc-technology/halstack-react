export const getTextColor = (overlay?: boolean) =>
  `color: ${overlay ? "var(--color-fg-neutral-bright)" : "var(--color-fg-neutral-dark)"}`;

export const getLabelTextStyle = () =>
  `font-family: var(--typography-font-family);
  font-size: var(--typography-label-m);
  font-weight: var(--typography-label-semibold);`;

export const getAuxTextStyle = () =>
  `font-family: var(--typography-font-family);
  font-size: var(--typography-helper-text-s);
  font-weight: var(--typography-helper-text-regular);`;
