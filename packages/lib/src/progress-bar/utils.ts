import { css } from "@emotion/react";

export const textColorStyles = (overlay = false) => css`
  color: ${overlay ? "var(--color-fg-neutral-bright)" : "var(--color-fg-neutral-dark)"};
`;

export const labelTextStyles = css`
  font-family: var(--typography-font-family);
  font-size: var(--typography-label-m);
  font-weight: var(--typography-label-semibold);
`;

export const auxTextStyles = css`
  font-family: var(--typography-font-family);
  font-size: var(--typography-helper-text-s);
  font-weight: var(--typography-helper-text-regular);
`;
