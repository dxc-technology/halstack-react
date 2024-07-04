import { CoreColorTokensType } from "../common/coreTokens";

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
  color?: CoreColorTokensType;
  image?: string;
  origin?: string;
  position?: string;
  repeat?: string;
  size?: string;
};

export type BorderProperties = {
  width?: string;
  style?: "none" | "dotted" | "dashed" | "solid" | "double" | "groove" | "ridge" | "inset" | "outset";
  color?: CoreColorTokensType;
};
type Border =
  | BorderProperties
  | {
      top?: BorderProperties;
      right?: BorderProperties;
      bottom?: BorderProperties;
      left?: BorderProperties;
    };

type Outline = BorderProperties & {
  offset?: string;
};

type OverflowValues = "visible" | "hidden" | "clip" | "scroll" | "auto";
type Overflow = OverflowValues | { x?: OverflowValues; y?: OverflowValues };

type Props = {
  /**
   * Based on the CSS property background allows configuring all properties related to the background of a container.
   *
   * See MDN: https://developer.mozilla.org/en-US/docs/Web/CSS/background
   */
  background?: Background;
  /**
   * Based on the CSS property border allows configuring all properties related to the border of a container.
   */
  border?: Border;
  /**
   * Sets the border-radius CSS property.
   *
   * See MDN: https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius
   */
  borderRadius?: string;
  /**
   * Sets the box-shadow CSS property.
   *
   * See MDN: https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow
   */
  boxShadow?: string;
  /**
   * Sets the box-sizing CSS property.
   *
   * See MDN: https://developer.mozilla.org/en-US/docs/Web/CSS/box-sizing
   */
  boxSizing?: "border-box" | "content-box";
  /**
   * Custom content inside the container.
   */
  children: React.ReactNode;
  /**
   * Sets the display CSS property.
   * The set of values is limited to the ones related to the outer display type.
   * If you want to apply any pattern from the inner box and how the children are laid out,
   * we recommend you to use the Flex and Grid components.
   *
   * See MDN: https://developer.mozilla.org/en-US/docs/Web/CSS/display
   */
  display?: "block" | "inline-block" | "inline" | "none";
  /**
   * Sets the float CSS property.
   *
   * See MDN: https://developer.mozilla.org/en-US/docs/Web/CSS/float
   */
  float?: "left" | "right" | "none";
  /**
   * Sets the height CSS property.
   *
   * See MDN: https://developer.mozilla.org/en-US/docs/Web/CSS/height
   */
  height?: string;
  /**
   * Based on the CSS property inset this prop is a shorthand that corresponds
   * to the top, right, bottom, and/or left properties.
   */
  inset?: Inset;
  /**
   * Size of the margin to be applied to the component.
   * You can pass an object with 'top', 'bottom', 'left' and 'right' properties
   * in order to specify different margin sizes.
   */
  margin?: Space;
  /**
   * Sets the max-height CSS property.
   *
   * See MDN: https://developer.mozilla.org/en-US/docs/Web/CSS/max-height
   */
  maxWidth?: string;
  /**
   * Sets the max-width CSS property.
   *
   * See MDN: https://developer.mozilla.org/en-US/docs/Web/CSS/max-width
   */
  maxHeight?: string;
  /**
   * Sets the min-height CSS property.
   *
   * See MDN: https://developer.mozilla.org/en-US/docs/Web/CSS/min-height
   */
  minWidth?: string;
  /**
   * Sets the min-width CSS property.
   *
   * See MDN: https://developer.mozilla.org/en-US/docs/Web/CSS/min-width
   */
  minHeight?: string;
  /**
   * Based on the CSS property outline allows configuring all properties related
   * to the outline of a container.
   */
  outline?: Outline;
  /**
   * Sets the overflow CSS property.
   *
   * See MDN: https://developer.mozilla.org/en-US/docs/Web/CSS/overflow
   */
  overflow?: Overflow;
  /**
   * Size of the margin to be applied to the component.
   * You can pass an object with 'top', 'bottom', 'left' and 'right' properties
   * in order to specify different margin sizes.
   */
  padding?: Space;
  /**
   * Sets the position CSS property.
   *
   * See MDN: https://developer.mozilla.org/en-US/docs/Web/CSS/position
   */
  position?: "static" | "relative" | "absolute" | "fixed" | "sticky";
  /**
   * Sets the width CSS property.
   *
   * See MDN: https://developer.mozilla.org/en-US/docs/Web/CSS/width
   */
  width?: string;
  /**
   * Sets the z-index CSS property.
   *
   * See MDN: https://developer.mozilla.org/en-US/docs/Web/CSS/z-index
   */
  zIndex?: "auto" | number;
};

export type StyledProps = Omit<Props, "display" | "width" | "height" | "opacity" | "overflow"> & {
  $display?: "block" | "inline-block" | "inline" | "none";
  $width?: string;
  $height?: string;
  $overflow?: Overflow;
};

export default Props;
