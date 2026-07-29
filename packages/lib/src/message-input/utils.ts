import { css } from "@emotion/react";
import { SelectOption } from "./types";

export const getSelectedOption = (selectOptions: SelectOption[]) =>
  selectOptions.find((option) => option.selected === true);

export const getFilePreview = (file: File): string => {
  if (file.type.includes("video")) return "filled_movie";
  else if (file.type.includes("audio")) return "music_video";
  else if (file.type.includes("image")) return "image";
  else return "description";
};

export const inputStylesByStatePromptInput = (disabled: boolean, error: boolean, focus?: boolean) => css`
  background-color: ${disabled
    ? `var(--color-bg-neutral-lighter)`
    : `  background-color: var(--color-bg-neutral-lightest);
`};

  border-radius: var(--border-radius-l);
  border-width: ${!disabled && error ? "var(--border-width-m)" : "var(--border-width-s)"};
  border-style: var(--border-style-default);
  border-color: ${disabled
    ? "var(--border-color-neutral-strong)"
    : error
      ? "var(--border-color-error-medium)"
      : "var(--border-color-neutral-lighter)"};

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
