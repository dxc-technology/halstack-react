import { getMargin } from "../common/utils";
import CheckboxPropsType from "./types";

const sizes = {
  small: "120px",
  medium: "240px",
  large: "480px",
  fillParent: "100%",
  fitContent: "fit-content",
};

export const spaces = {
  xxsmall: "var(--spacing-padding-xxs)",
  xsmall: "var(--spacing-padding-xs)",
  small: "var(--spacing-padding-s)",
  medium: "var(--spacing-padding-m)",
  large: "var(--spacing-padding-l)",
  xlarge: "var(--spacing-padding-xl)",
  xxlarge: "var(--spacing-padding-xxl)",
};

export const calculateWidth = (margin: CheckboxPropsType["margin"], size: CheckboxPropsType["size"]) =>
  size === "fillParent"
    ? `calc(${sizes[size]} - ${getMargin(margin, "left")} - ${getMargin(margin, "right")})`
    : size && sizes[size];

export const icons = {
  checked: (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path
        d="M19 3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.89 21 5 21H19C20.11 21 21 20.1 21 19V5C21 3.9 20.11 3 19 3ZM10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z"
        fill="currentColor"
      />
    </svg>
  ),
  unchecked: (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path
        d="M19 5V19H5V5H19ZM19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3Z"
        fill="currentColor"
      />
    </svg>
  ),
};
