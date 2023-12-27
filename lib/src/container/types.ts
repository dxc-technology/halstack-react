import { CoreColorTokens } from "../common/coreTokens";

type SpacingValues = "xxsmall" | "xsmall" | "small" | "medium" | "large" | "xlarge" | "xxlarge";
type Space =
  | SpacingValues
  | {
      top?: SpacingValues;
      right?: SpacingValues;
      bottom?: SpacingValues;
      left?: SpacingValues;
    };

type Inset = {
  top?: string;
  right?: string;
  bottom?: string;
  left?: string;
};

type Background = {
  attachment?: string;
  clip?: string;
  color?: CoreColorTokens;
  image?: string;
  origin?: string;
  position?: string;
  repeat?: string;
  size?: string;
};

type BorderGenericProperties = {
  width?: string;
  style?: "none" | "dotted" | "dashed" | "solid" | "double" | "groove" | "ridge" | "inset" | "outset";
  color?: CoreColorTokens;
};
type BorderProperties = BorderGenericProperties & {
  radius?: string;
};
type TopBottomBorder = BorderGenericProperties & {
  rightRadius?: string;
  leftRadius?: string;
};
type Border =
  | BorderProperties
  | {
      top?: TopBottomBorder;
      right?: BorderGenericProperties;
      bottom?: TopBottomBorder;
      left?: BorderGenericProperties;
    };

type Outline = BorderGenericProperties & {
  offset?: string;
};

type OverflowValues = "visible" | "hidden" | "clip" | "scroll" | "auto";
type Overflow = OverflowValues | { x?: OverflowValues; y?: OverflowValues };

type Props = {
  boxSizing?: "border-box" | "content-box";
  display?: "block" | "inline-block" | "inline" | "none";
  width?: string;
  height?: string;
  maxWidth?: string;
  maxHeight?: string;
  minWidth?: string;
  minHeight?: string;
  padding?: Space;
  border?: Border;
  margin?: Space;
  overflow?: Overflow;
  position?: "static" | "relative" | "absolute" | "fixed" | "sticky";
  inset?: Inset;
  float?: "left" | "right" | "none";
  zIndex?: "auto" | number;
  background?: Background;
  boxShadow?: string;
  outline?: Outline;
  children: React.ReactNode;
};

export type StyledProps = Omit<Props, "display" | "width" | "height" | "opacity" | "overflow"> & {
  $display?: "block" | "inline-block" | "inline" | "none";
  $width?: string;
  $height?: string;
  $overflow?: Overflow;
};

export default Props;
