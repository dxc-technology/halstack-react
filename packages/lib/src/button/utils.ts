import { getMargin } from "../common/utils";
import ButtonPropsType, { Mode, Semantic, Size } from "./types";

export const getButtonStyles = (
  mode: Mode,
  semantic: Semantic,
  size: Size,
) => {
  let enabled = "";
  let hover = "";
  let active = "";
  let focus = "";
  let disabled = "";

  const commonStyles = `
    font-family: var(--typography-font-family);
    font-size: ${size?.height === "large" ? "var(--typography-label-l)" : "var(--typography-label-m)"};
    font-style: normal;
    font-weight: var(--typography-label-semibold);
    line-height: normal;
    border: 0px none transparent;
    border-radius: var(--border-radius-s);`;

  switch (mode) {
    case "primary":
      switch (semantic) {
        case "default":
          enabled = `background-color: var(--color-bg-primary-strong);`;
          hover = `background-color: var(--color-bg-primary-stronger);`;
          active = `background-color: var(--color-bg-primary-strongest);`;
          disabled = `background-color: var(--color-bg-primary-lightest);
          color: var(--color-fg-primary-light);`;
          break;
        case "error":
          enabled = `background-color: var(--color-bg-error-strong);`;
          hover = `background-color: var(--color-bg-error-stronger);`;
          active = `background-color: var(--color-bg-error-strongest);`;
          disabled = `background-color: var(--color-bg-error-lightest);
          color: var(--color-fg-error-light);`;
          break;
        case "warning":
          enabled = `background-color:var(--color-bg-warning-strong);`;
          hover = `background-color: var(--color-bg-warning-stronger);`;
          active = `background-color: var(--color-bg-warning-strongest);`;
          disabled = `background-color: var(--color-bg-warning-lightest);
          color: var(--color-fg-warning-light);`;
          break;
        case "success":
          enabled = `background-color: var(--color-bg-success-strong);`;
          hover = `background-color: var(--color-bg-success-stronger);`;
          active = `background-color: var(--color-bg-success-strongest);`;
          disabled = `background-color: var(--color-bg-success-lightest);
          color: var(--color-fg-success-light);`;
          break;
        case "info":
          enabled = `background-color: var(--color-bg-secondary-strong);`;
          hover = `background-color: var(--color-bg-secondary-stronger);`;
          active = `background-color: var(--color-bg-secondary-strongest);`;
          disabled = `background-color: var(--color-bg-secondary-lightest);
          color: var(--color-fg-secondary-lighter);`;
          break;
      }
      return `${commonStyles}
        color: var(--color-fg-neutral-bright);
        ${enabled}
        &:hover:enabled {
          ${hover}
        }
        &:active:enabled {
          ${active}
        }
        &:focus:enabled {
          ${focus}
          outline: none;
          box-shadow: 0 0 0 2px var(--border-color-secondary-medium);
        }
        &:disabled {
          cursor: not-allowed;
          ${disabled}
        }`;
    case "secondary":
      switch (semantic) {
        case "default":
          enabled = `border: var(--border-width-s) solid var(--border-color-primary-stronger);
          color: var(--color-fg-primary-strong);`;
          hover = `background-color: var(--color-bg-primary-strong); 
          color: var(--color-fg-neutral-bright);`;
          active = `background-color: var(--color-bg-primary-stronger);
          color: var(--color-fg-neutral-bright);`;
          disabled = `border-color: var(--border-color-primary-lighter);
          color: var(--color-fg-primary-light);`;
          break;
        case "error":
          enabled = `border: var(--border-width-s) solid var(--border-color-error-medium);
          color: var(--color-fg-error-medium);`;
          hover = `background-color: var(--color-bg-error-strong);
          color: var(--color-fg-neutral-bright);`;
          active = `background-color: var(--color-bg-error-stronger);
          color: var(--color-fg-neutral-bright);`;
          disabled = `border-color: var(--border-color-error-light);
          color: var(--color-fg-error-light);`;
          break;
        case "warning":
          enabled = `border: var(--border-width-s) solid var(--border-color-warning-medium);
          color: var(--color-fg-warning-medium);`;
          hover = `background-color: var(--color-bg-warning-stronger);
          color: var(--color-fg-neutral-bright);`;
          active = `background-color: var(--color-bg-warning-strongest);
          color: var(--color-fg-neutral-bright);`;
          disabled = `border-color: var(--border-color-warning-light);
          color: var(--color-fg-warning-light);`;
          break;
        case "success":
          enabled = `border: var(--border-width-s, 1px) solid var(--border-color-success-medium);
          color: var(--color-fg-success-medium);`;
          hover = `background-color: var(--color-bg-success-strong);
          color: var(--color-fg-neutral-bright);`;
          active = `background-color: var(--color-bg-success-strongest);
          color: var(--color-fg-neutral-bright);`;
          disabled = `border-color: var(--border-color-success-light);
          color: var(--color-fg-success-light);`;
          break;
        case "info":
          enabled = `border: var(--border-width-s, 1px) solid var(--border-color-secondary-strong);
          color: var(--color-fg-secondary-medium);`;
          hover = `background: var(--color-bg-secondary-strong);
          color: var(--color-fg-neutral-bright);`;
          active = `background-color: var(--color-bg-secondary-stronger);
          color: var(--color-fg-neutral-bright);`;
          disabled = `border-color: var(--border-color-secondary-light);
          color: var(--color-fg-secondary-lighter);`;
          break;
      }
      return `${commonStyles}
        background-color: transparent;
        ${enabled}
        &:hover:enabled {
          ${hover}
        }
        &:active:enabled {
          border-color: transparent;
          ${active}
        }
        &:focus:enabled {
          border-color: transparent;
          box-shadow: 0 0 0 2px var(--border-color-secondary-medium);
          outline: none;
        }
        &:disabled {
          cursor: not-allowed;
          ${disabled}
        }`;
    case "tertiary":
      switch (semantic) {
        case "default":
          enabled = `color: var(--color-fg-primary-strong);`;
          hover = `background-color: var(--color-bg-primary-lighter);`;
          active = `background-color: var(--color-bg-primary-light);`;
          disabled = `color: var(--color-fg-primary-light);`;
          break;
        case "error":
          enabled = `color: var(--color-fg-error-medium);`;
          hover = `var(--color-bg-error-lighter);`;
          active = `background-color: background: var(--color-bg-error-light);`;
          disabled = `color: var(--color-fg-error-light);`;
          break;
        case "warning":
          enabled = `color: var(--color-fg-warning-medium);`;
          hover = `background-color: var(--color-bg-warning-lighter);`;
          active = `background-color: var(--color-bg-warning-light);`;
          disabled = `color: var(--color-fg-warning-light);`;
          break;
        case "success":
          enabled = `color: var(--color-fg-success-medium);`;
          hover = `background-color: var(--color-bg-success-lighter);`;
          active = `background-color: var(--color-bg-success-light);`;
          disabled = `color: var(--color-fg-success-light);`;
          break;
        case "info":
          enabled = `color: var(--color-fg-secondary-medium);`;
          hover = `background-color: var(--color-bg-secondary-lighter);`;
          active = `background-color: var(--color-bg-secondary-light);`;
          disabled = `color: var(--color-fg-secondary-lighter);`;
          break;
      }
      return `${commonStyles}
        background-color: transparent;
        color: var(--color-fg-primary-strong);
        ${enabled}
        &:hover:enabled {
          ${hover}
        }
        &:active:enabled {
          border-color: transparent;
          ${active}
        }
        &:focus:enabled {
          ${focus}
          outline: none;
          box-shadow: 0 0 0 2px var(--border-color-secondary-medium);
        }
        &:disabled {
          cursor: not-allowed;
          ${disabled}
        }`;
  }
};

const widths = {
  small: "42px",
  medium: "120px",
  large: "240px",
  fillParent: "100%",
  fitContent: "fit-content",
};

export const calculateWidth = (margin: ButtonPropsType["margin"], size: ButtonPropsType["size"]) =>
  size?.width === "fillParent"
    ? `calc(${widths[size?.width]} - ${getMargin(margin, "left")} - ${getMargin(margin, "right")})`
    : size?.width && widths[size?.width];

export const getHeight = (height: Size["height"]) => {
  switch (height) {
    case "small":
      return "24px";
    case "medium":
      return "32px";
    case "large":
      return "40px";
    default:
      return "40px";
  }
};