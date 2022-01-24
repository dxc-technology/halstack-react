import React from "react";

type Space = "xxsmall" | "xsmall" | "small" | "medium" | "large" | "xlarge" | "xxlarge";
type Margin = {
  top?: Space;
  bottom?: Space;
  left?: Space;
  right?: Space;
};
type Padding = {
  top?: Space;
  bottom?: Space;
  left?: Space;
  right?: Space;
};
type SVG = HTMLElement & SVGElement;

type Props = {
  label?: string;
  isExpanded?: boolean;
  icon?: SVG;
  iconSrc?: string;
  assistiveText?: string;
  disabled?: boolean;
  onChange?: (isExpanded?: boolean) => void;
  children: React.ReactNode;
  margin?: Space | Margin;
  padding?: Space | Padding;
  tabIndex?: number;
};

export default Props;
