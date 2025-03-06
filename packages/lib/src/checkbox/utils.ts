import { getMargin } from "../common/utils";
import CheckboxPropsType from "./types";

export const spaces = {
  xxsmall: "var(--spacing-padding-xxs)",
  xsmall: "var(--spacing-padding-xs)",
  small: "var(--spacing-padding-s)",
  medium: "var(--spacing-padding-m)",
  large: "var(--spacing-padding-l)",
  xlarge: "var(--spacing-padding-xl)",
  xxlarge: "var(--spacing-padding-xxl)",
};

const sizes = {
  small: "120px",
  medium: "240px",
  large: "480px",
  fillParent: "100%",
  fitContent: "fit-content",
};

export const calculateWidth = (margin: CheckboxPropsType["margin"], size: CheckboxPropsType["size"]) =>
  size === "fillParent"
    ? `calc(${sizes[size]} - ${getMargin(margin, "left")} - ${getMargin(margin, "right")})`
    : size && sizes[size];

export const getDisabledColor = (element: string) => {
  switch (element) {
    case "check":
      return "transparent";
    case "background":
      return "var(--color-fg-neutral-medium)";
    case "border":
      return "var(--border-color-neutral-medium)";
    case "label":
      return "var(--color-fg-neutral-medium)";
    default:
      return undefined;
  }
};

export const getReadOnlyColor = (element: string) => {
  switch (element) {
    case "check":
      return "transparent";
    case "background":
      return "var(--color-fg-neutral-medium)";
    case "hoverBackground":
      return "var(--color-bg-neutral-stronger)";
    case "border":
      return "var(--border-color-neutral-strong)";
    case "hoverBorder":
      return "var(--border-color-neutral-stronger)";
    case "activeBorder":
      return "var(--border-color-neutral-strongest)";
    case "activeBackground":
      return "var(--color-bg-neutral-strongest)";
    default:
      return undefined;
  }
};

export const getEnabledColor = (element: string) => {
  switch (element) {
    case "check":
      return "transparent";
    case "background":
      return "var(--color-bg-secondary-strong)";
    case "hoverBackground":
      return "var(--color-bg-secondary-stronger)";
    case "border":
      return "var(--border-color-secondary-strong)";
    case "hoverBorder":
      return "var(--border-color-secondary-stronger)";
    case "label":
      return "var(--color-fg-neutral-dark)";
    case "activeBorder":
      return "var(--border-color-secondary-strongest)";
    case "activeBackground":
      return "var(--color-bg-secondary-strongest)";
    default:
      return undefined;
  }
};