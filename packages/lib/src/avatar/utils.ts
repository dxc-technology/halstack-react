import AvatarPropsType from "./types";

const contextualColorMap = {
  grey: {
    background: "var(--color-bg-neutral-light)",
    text: "var(--color-fg-neutral-strongest)",
  },
  blue: {
    background: "var(--color-bg-secondary-lighter)",
    text: "var(--color-fg-secondary-stronger)",
  },
  green: {
    background: "var(--color-bg-success-lighter)",
    text: "var(--color-fg-success-stronger)",
  },
  orange: {
    background: "var(--color-bg-warning-lighter)",
    text: "var(--color-fg-warning-stronger)",
  },
  red: {
    background: "var(--color-bg-error-lighter)",
    text: "var(--color-fg-error-stronger)",
  },
  yellow: {
    background: "var(--color-bg-yellow-light)",
    text: "var(--color-fg-neutral-yellow-dark)",
  },
  purple: {
    background: "var(--color-bg-primary-lighter)",
    text: "var(--color-fg-primary-stronger)",
  },
};

export const getColor = (color: AvatarPropsType["color"]) => (color ? contextualColorMap[color].text : undefined);
export const getBackgroundColor = (color: AvatarPropsType["color"]) =>
  color ? contextualColorMap[color].background : undefined;

export const getBorderRadius = (shape: AvatarPropsType["shape"], size: AvatarPropsType["size"]) => {
  if (shape === "circle") return "100%";

  switch (size) {
    case "xsmall":
      return "var(--border-radius-xs)";
    case "small":
      return "var(--border-radius-s)";
    case "medium":
      return "var(--border-radius-m)";
    case "large":
      return "var(--border-radius-m)";
    case "xlarge":
      return "var(--border-radius-l)";
    case "xxlarge":
      return "var(--border-radius-l)";
    default:
      return "var(--border-radius-m)";
  }
};

export const getSize = (size: AvatarPropsType["size"]) => {
  switch (size) {
    case "xsmall":
      return "var(--height-s)";
    case "small":
      return "var(--height-m)";
    case "medium":
      return "var(--height-xl)";
    case "large":
      return "var(--height-xxxl)";
    case "xlarge":
      return "72px";
    case "xxlarge":
      return "80px";
    default:
      return "var(--height-xl)";
  }
};

export const getFontSize = (size: AvatarPropsType["size"]) => {
  switch (size) {
    case "xsmall":
      return "var(--typography-label-s)";
    case "small":
      return "var(--typography-label-m)";
    case "medium":
      return "var(--typography-label-l)";
    case "large":
      return "var(--typography-label-xl)";
    case "xlarge":
      return "32px";
    case "xxlarge":
      return "36px";
    default:
      return "var(--typography-label-l)";
  }
};

export const getIconSize = (size: AvatarPropsType["size"]) => {
  switch (size) {
    case "xsmall":
      return "var(--height-xxs)";
    case "small":
      return "var(--height-xs)";
    case "medium":
      return "var(--height-s)";
    case "large":
      return "var(--height-xl)";
    case "xlarge":
      return "var(--height-xxl)";
    case "xxlarge":
      return "52px";
    default:
      return "var(--height-s)";
  }
};

export const getBorderWidth = (size: AvatarPropsType["size"]) => {
  switch (size) {
    case "xsmall":
    case "small":
    case "medium":
      return "1px solid";
    case "large":
    case "xlarge":
    case "xxlarge":
      return "2px solid";
    default:
      return "1px solid";
  }
};

export const getModeColor = (mode: Required<AvatarPropsType>["status"]["mode"]) => {
  switch (mode) {
    case "default":
      return "var(--color-fg-neutral-strong);";
    case "error":
      return "var(--color-fg-error-medium)";
    case "info":
      return "var(--color-fg-secondary-medium)";
    case "success":
      return "var(--color-fg-success-medium)";
    case "warning":
      return "var(--color-fg-warning-strong)";
  }
};

export const getInitials = (label?: string): string => {
  if (!label) return "";
  const words = label.trim().split(/\s+/).filter(Boolean);
  if (words.length >= 2) {
    const firstChar = words[0]?.[0] ?? "";
    const secondChar = words[1]?.[0] ?? "";
    return (firstChar + secondChar).toUpperCase();
  }
  const firstWord = words[0] ?? "";
  return firstWord.slice(0, 2).toUpperCase();
};
