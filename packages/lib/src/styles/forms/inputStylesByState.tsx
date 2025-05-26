import { css } from "styled-components";

export const inputStylesByState = (disabled: boolean, error: boolean, readOnly: boolean) => css`
  background-color: ${disabled ? `var(--color-bg-neutral-lighter)` : `transparent`};
  border-radius: var(--border-radius-s);
  border: ${!disabled && error ? "var(--border-width-m)" : "var(--border-width-s)"} var(--border-style-default)
    ${(() => {
      if (disabled) return "var(--border-color-neutral-strong)";
      else if (error) return "var(--border-color-error-medium)";
      else if (readOnly) return "var(--border-color-neutral-strong)";
      else return "var(--border-color-neutral-dark)";
    })()};
  ${!disabled
    ? `&:hover {
      border-color: ${
        error
          ? "var(--border-color-error-strong)"
          : readOnly
            ? "var(--border-color-neutral-stronger)"
            : "var(--border-color-primary-strong)"
      };
    }
    &:focus, &:focus-within {
      border-color: transparent;
      outline-offset: -2px;
      outline: var(--border-width-m) var(--border-style-default) var(--border-color-secondary-medium);
    }`
    : "cursor: not-allowed;"};
`;
