import HeadingPropsType from "./types";

export const getHeadingSize = (level: HeadingPropsType["level"]) => {
  switch (level) {
    case 1:
      return "var(--typography-heading-xxl)";
    case 2:
      return "var(--typography-heading-xl)";
    case 3:
      return "var(--typography-heading-l)";
    case 4:
      return "var(--typography-heading-m)";
    case 5:
      return "var(--typography-heading-s)";
    case 6:
      return "var(--typography-heading-xs)";
  }
};

export const getHeadingWeight = (weight: HeadingPropsType["weight"]) => {
  switch (weight) {
    case "default":
      return "var(--typography-heading-semibold)";
    case "regular":
      return "var(--typography-heading-regular)";
    case "light":
      return "var(--typography-heading-light)";
  }
};