import { Children, ElementType, isValidElement } from "react";
import FooterPropsType from "./types";

export const findChildType = (children: FooterPropsType["children"], childType: ElementType) =>
  Children.toArray(children).find((child) => isValidElement(child) && child.type === childType);

const rgbToHex = (color: string): string => {
  const rgbMatch = color.match(/\d+/g);
  if (!rgbMatch || rgbMatch.length < 3) return "#000000";
  const [r, g, b] = rgbMatch.map(Number);
  return (
    "#" +
    [r, g, b]
      .map((x) => x!.toString(16).padStart(2, "0"))
      .join("")
      .toUpperCase()
  );
};

function getLuminance(color: string): number {
  const hex = color.startsWith("rgb") ? rgbToHex(color) : color;
  const match = hex.replace("#", "").match(/.{2}/g);
  if (!match || match.length < 3) return 0;

  const rgb = match
    .map((x) => parseInt(x, 16) / 255)
    .map((v) => (v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4));

  const [r, g, b] = rgb;
  if (r == null || g == null || b == null) return 0;

  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

export const getContrastColor = (bgColor: string) => {
  const luminance = getLuminance(bgColor);
  return luminance > 0.179 ? "var(--color-fg-neutral-dark)" : "var(--color-fg-neutral-bright)";
};

const BREAKPOINTS = {
  small: 480,
  medium: 720,
  large: 1056,
};

export const getResponsiveStyles = {
  isSmallScreen: (width: number) => width <= BREAKPOINTS.small,
  isMediumScreen: (width: number) => width <= BREAKPOINTS.medium,
  isLargeScreen: (width: number) => width >= BREAKPOINTS.medium,
};
