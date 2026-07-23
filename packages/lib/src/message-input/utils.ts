import { css } from "@emotion/react";

// TO BE DONE: IMPLEMENT SEPARATELY minLenght & maxLength
export const isLengthOutOfRange = (value: string, minLength?: number, maxLength?: number) =>
  value !== "" && minLength && maxLength && (value.length < minLength || value.length > maxLength);

export const inputStylesByStatePromptInput = (disabled: boolean, error: boolean, focus?: boolean) => css`
  background-color: ${disabled ? `var(--color-bg-neutral-lightest)` : `transparent`};

  border-radius: var(--border-radius-l);

  border: ${!disabled && error ? "var(--border-width-m)" : "var(--border-width-s)"} var(--border-style-default)
    ${(() => {
      if (disabled) return "var(--border-color-neutral-lighter)";
      else if (error) return "var(--border-color-error-medium)";
      else return "var(--border-color-neutral-lighter)";
    })()};

  ${!disabled
    ? `
      &:hover {
        border-color: ${error ? "var(--border-color-error-strong)" : "var(--border-color-primary-strong)"};
      }

      &:focus {
        outline-offset: -2px;
        outline: var(--border-width-m) var(--border-style-default) var(--border-color-secondary-medium);
        border-color: transparent;
      }
    `
    : "cursor: not-allowed;"};

  ${focus && !disabled
    ? `
      outline-offset: -2px;
      outline: var(--border-width-m) var(--border-style-default) var(--border-color-secondary-medium);
      border-color: transparent;
    `
    : ""};
`;
