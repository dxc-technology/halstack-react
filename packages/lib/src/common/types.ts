import React from "react";

export type Space = "xxsmall" | "xsmall" | "small" | "medium" | "large" | "xlarge" | "xxlarge";
export type Margin = {
  top?: Space;
  bottom?: Space;
  left?: Space;
  right?: Space;
};
export type SVG = React.ReactNode & React.SVGProps<SVGSVGElement>;
export type Side = keyof Margin;

export type Size = "xsmall" | "small" | "medium" | "large" | "xlarge" | "xxlarge";
export type Shape = "circle" | "square";
export type Color = "primary" | "secondary" | "tertiary" | "success" | "info" | "neutral" | "warning" | "error";

/**
 * Utility type to make complex types more readable in TypeScript.
 */
export type PrettifyTypes<T> = {
  [K in keyof T]: T[K];
} & {};
