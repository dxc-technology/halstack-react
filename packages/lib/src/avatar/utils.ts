import AvatarPropsType from "./types";

const fontSizeMap = {
  xsmall: "var(--typography-label-s)",
  small: "var(--typography-label-m)",
  medium: "var(--typography-label-l)",
  large: "var(--typography-label-xl)",
  xlarge: "32px",
  xxlarge: "36px",
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

export const getColor = (color: AvatarPropsType["color"]) =>
  color && contextualColorMap[color] ? contextualColorMap[color].text : contextualColorMap.neutral.text;

export const getBackgroundColor = (color: AvatarPropsType["color"]) =>
  color && contextualColorMap[color] ? contextualColorMap[color].background : contextualColorMap.neutral.background;

export const getBorderRadius = (shape: AvatarPropsType["shape"], size: AvatarPropsType["size"]) => {
  if (shape === "circle") {
    return "100%";
  }
  if (shape === "square") {
    return size ? borderRadiusMap[size] : "var(--border-radius-m)";
  }
  return "100%";
};

export const getSize = (size: AvatarPropsType["size"]) => (size && sizeMap[size] ? sizeMap[size] : "var(--height-xl)");

export const getFontSize = (size: AvatarPropsType["size"]) =>
  size && fontSizeMap[size] ? fontSizeMap[size] : "var(--typography-label-l)";

export const getIconSize = (size: AvatarPropsType["size"]) =>
  size && iconSizeMap[size] ? iconSizeMap[size] : "var(--height-s)";

export const getBorderWidth = (size: AvatarPropsType["size"]) =>
  size && borderWidthMap[size] ? borderWidthMap[size] : "var(--border-width-s)";

export const getOutlineWidth = (size: AvatarPropsType["size"]) =>
  size && outlineWidthMap[size] ? outlineWidthMap[size] : "var(--border-width-m)";

export const getModeColor = (mode: Required<AvatarPropsType>["status"]["mode"]) =>
  mode && modeColorMap[mode] ? modeColorMap[mode] : "var(--color-fg-neutral-strong)";

export const getInitials = (label?: string): string => {
  if (!label) return "";
  const words = label.trim().split(/\s+/);
  if (words.length >= 2) {
    const firstChar = words[0]?.[0] ?? "";
    const secondChar = words[1]?.[0] ?? "";
    return (firstChar + secondChar).toUpperCase();
  }
  const firstWord = words[0] ?? "";
  return firstWord.slice(0, 2).toUpperCase();
};
