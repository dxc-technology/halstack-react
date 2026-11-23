import type { ButtonMode, ButtonSize } from "../button/types";

export const getButtonLinkStyles = (disabled: boolean | undefined, mode: ButtonMode, size: ButtonSize) => {
  const commonStyles = `
    font-family: var(--typography-font-family);
    font-size: var(${size.height === "medium" || size.height === "small" ? "--typography-label-m" : "--typography-label-l"});
    font-weight: var(--typography-label-semibold);
    border: var(--border-width-none) var(--border-style-default) transparent;
    border-radius: var(--border-radius-s);
    ${
      !disabled
        ? `&:focus {
        outline: var(--border-width-m) var(--border-style-default) var(--border-color-neutral-dark);
        outline-offset: -2px;
      }`
        : ""
    }
  `;

  if (mode === "primary") {
    if (disabled) {
      return `${commonStyles}
        color: var(--color-fg-primary-light);
        background-color: var(--color-bg-primary-lightest);`;
    }

    return `${commonStyles}
      color: var(--color-fg-neutral-bright);
      background-color: var(--color-bg-primary-stronger);
      &:hover {
        background-color: var(--color-bg-primary-strongest);
      }
      &:active {
        background-color: var(--color-bg-primary-strongest);
      }
      &:visited {
        background-color: var(--color-bg-primary-strongest);
      }
      &:visited:hover,
      &:visited:active {
        background-color: var(--color-bg-primary-stronger);
      }`;
  }

  if (mode === "secondary") {
    if (disabled) {
      return `${commonStyles}
        background-color: transparent;
        border: var(--border-width-s) var(--border-style-default) var(--border-color-primary-lighter);
        color: var(--color-fg-primary-light);`;
    }

    return `${commonStyles}
      background-color: transparent;
      border: var(--border-width-s) var(--border-style-default) var(--border-color-primary-stronger);
      color: var(--color-fg-primary-stronger);
      &:hover {
        background-color: var(--color-bg-primary-stronger);
        color: var(--color-fg-neutral-bright);
      }
      &:active {
        border-color: transparent;
        background-color: var(--color-bg-primary-stronger);
        color: var(--color-fg-neutral-bright);
      }
      &:visited {
        border-color: var(--border-color-primary-stronger);
        color: var(--color-fg-primary-strongest);
      }
      &:visited:hover,
      &:visited:active {
        background-color: var(--color-bg-primary-stronger);
        color: var(--color-fg-neutral-bright);
      }`;
  }

  if (disabled) {
    return `${commonStyles}
      background-color: transparent;
      color: var(--color-fg-primary-light);`;
  }

  return `${commonStyles}
    background-color: transparent;
    color: var(--color-fg-primary-stronger);
    &:hover {
      background-color: var(--color-bg-primary-lighter);
    }
    &:active {
      border-color: transparent;
      background-color: var(--color-bg-primary-light);
    }
    &:visited {
      color: var(--color-fg-primary-strongest);
    }
    &:visited:hover,
    &:visited:active {
      background-color: var(--color-bg-primary-lighter);
      color: var(--color-fg-primary-strongest);
    }`;
};
