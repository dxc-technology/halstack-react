import GorgoritoPropTypes from "./types";

const contextualColorMap = {
  primary: {
    background: "var(--color-bg-primary-lighter)",
    text: "var(--color-fg-primary-stronger)",
  },
  secondary: {
    background: "var(--color-bg-secondary-lighter)",
    text: "var(--color-fg-secondary-stronger)",
  },
  tertiary: {
    background: "var(--color-bg-yellow-light)",
    text: "var(--color-fg-neutral-yellow-dark)",
  },
  neutral: {
    background: "var(--color-bg-neutral-light)",
    text: "var(--color-fg-neutral-strongest)",
  },
  info: {
    background: "var(--color-bg-info-lighter)",
    text: "var(--color-fg-info-stronger)",
  },
  success: {
    background: "var(--color-bg-success-lighter)",
    text: "var(--color-fg-success-stronger)",
  },
  warning: {
    background: "var(--color-bg-warning-lighter)",
    text: "var(--color-fg-warning-stronger)",
  },
  error: {
    background: "var(--color-bg-error-lighter)",
    text: "var(--color-fg-error-stronger)",
  },
  transparent: {
    background: "transparent",
    text: "var(--color-fg-neutral-strongest)",
  },
};

const borderRadiusMap = {
  xsmall: "var(--border-radius-xs)",
  small: "var(--border-radius-s)",
  medium: "var(--border-radius-m)",
  large: "var(--border-radius-m)",
  xlarge: "var(--border-radius-l)",
  xxlarge: "var(--border-radius-l)",
};

const sizeMap = {
  xsmall: "var(--height-s)",
  small: "var(--height-m)",
  medium: "var(--height-xl)",
  large: "var(--height-xxxl)",
  xlarge: "72px",
  xxlarge: "80px",
};

const iconSizeMap = {
  xsmall: "var(--height-xxs)",
  small: "var(--height-xs)",
  medium: "var(--height-s)",
  large: "var(--height-xl)",
  xlarge: "var(--height-xxl)",
  xxlarge: "52px",
};

const outlineWidthMap = {
  xsmall: "var(--border-width-m)",
  small: "var(--border-width-m)",
  medium: "var(--border-width-m)",
  large: "var(--border-width-l)",
  xlarge: "var(--border-width-l)",
  xxlarge: "var(--border-width-l)",
};

const borderWidthMap = {
  xsmall: "var(--border-width-s)",
  small: "var(--border-width-s)",
  medium: "var(--border-width-s)",
  large: "var(--border-width-m)",
  xlarge: "var(--border-width-m)",
  xxlarge: "var(--border-width-m)",
};

const modeColorMap = {
  default: "var(--color-fg-neutral-strong)",
  info: "var(--color-fg-secondary-medium)",
  success: "var(--color-fg-success-medium)",
  warning: "var(--color-fg-warning-strong)",
  error: "var(--color-fg-error-medium)",
};

export const getColor = (color: GorgoritoPropTypes["color"]) => (color ? contextualColorMap[color].text : undefined);
export const getBackgroundColor = (color: GorgoritoPropTypes["color"]) =>
  color ? contextualColorMap[color].background : undefined;

export const getBorderRadius = (shape: GorgoritoPropTypes["shape"], size: GorgoritoPropTypes["size"]) => {
  if (shape === "circle") {
    return "100%";
  }
  if (shape === "square") {
    return size ? borderRadiusMap[size] : "var(--border-radius-m)";
  }
  return "100%";
};

export const getSize = (size: GorgoritoPropTypes["size"]) => (size ? sizeMap[size] : "var(--height-xl)");

export const getIconSize = (size: GorgoritoPropTypes["size"]) => (size ? iconSizeMap[size] : "var(--height-s)");

export const getBorderWidth = (size: GorgoritoPropTypes["size"]) =>
  size ? borderWidthMap[size] : "var(--border-width-s)";

export const getOutlineWidth = (size: GorgoritoPropTypes["size"]) =>
  size ? outlineWidthMap[size] : "var(--border-width-m)";

export const getModeColor = (mode: Required<GorgoritoPropTypes>["status"]["mode"]) =>
  mode ? modeColorMap[mode] : "var(--color-fg-neutral-strong)";
