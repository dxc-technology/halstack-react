import AvatarPropsType from "./types";

const fontSizeMap = {
  xsmall: "var(--typography-label-s)",
  small: "var(--typography-label-m)",
  medium: "var(--typography-label-l)",
  large: "var(--typography-label-xl)",
  xlarge: "32px",
  xxlarge: "36px",
};

export const getFontSize = (size: AvatarPropsType["size"]) => (size ? fontSizeMap[size] : "var(--typography-label-l)");

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
