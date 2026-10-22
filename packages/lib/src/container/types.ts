import { ReactNode, Ref } from "react";
import { PrettifyTypes } from "../common/types";

export type ContainerSpacing = {
  top?: string;
  right?: string;
  bottom?: string;
  left?: string;
};

export type ContainerBackground = {
  attachment?: string;
  clip?: string;
  color?: string;
  image?: string;
  origin?: string;
  position?: string;
  repeat?: string;
  size?: string;
};

export type ContainerBorderProperties = {
  width?: string;
  style?: string;
  color?: string;
};
export type ContainerBorder = PrettifyTypes<
  | ContainerBorderProperties
  | {
      top?: ContainerBorderProperties;
      right?: ContainerBorderProperties;
      bottom?: ContainerBorderProperties;
      left?: ContainerBorderProperties;
    }
>;

export type ContainerOutline = PrettifyTypes<
  ContainerBorderProperties & {
    offset?: string;
  }
>;

export type OverflowValues = "visible" | "hidden" | "clip" | "scroll" | "auto";
export type ContainerOverflow = PrettifyTypes<OverflowValues | { x?: OverflowValues; y?: OverflowValues }>;

export type ContainerProps = {
  /**
   * Based on the CSS property background allows configuring all properties related to the background of a container.
   *
   * See MDN: https://developer.mozilla.org/en-US/docs/Web/CSS/background
   */
  background?: ContainerBackground;
  /**
   * Based on the CSS property border allows configuring all properties related to the border of a container.
   */
  border?: ContainerBorder;
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
  children?: ReactNode;
  /**
   * Reference to the container element.
   */
  ref?: Ref<HTMLDivElement>;
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
  inset?: ContainerSpacing;
  /**
   * Size of the margin to be applied to the container.
   */
  margin?: string | ContainerSpacing;
  /**
   * Sets the max-width CSS property.
   *
   * See MDN: https://developer.mozilla.org/en-US/docs/Web/CSS/max-width
   */
  maxHeight?: string;
  /**
   * Sets the max-height CSS property.
   *
   * See MDN: https://developer.mozilla.org/en-US/docs/Web/CSS/max-height
   */
  maxWidth?: string;
  /**
   * Sets the min-width CSS property.
   *
   * See MDN: https://developer.mozilla.org/en-US/docs/Web/CSS/min-width
   */
  minHeight?: string;
  /**
   * Sets the min-height CSS property.
   *
   * See MDN: https://developer.mozilla.org/en-US/docs/Web/CSS/min-height
   */
  minWidth?: string;
  /**
   * Based on the CSS property outline allows configuring all properties related
   * to the outline of a container.
   */
  outline?: ContainerOutline;
  /**
   * Sets the overflow CSS property.
   *
   * See MDN: https://developer.mozilla.org/en-US/docs/Web/CSS/overflow
   */
  overflow?: ContainerOverflow;
  /**
   * Size of the padding to be applied to the container.
   */
  padding?: string | ContainerSpacing;
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

export type StyledProps = Omit<ContainerProps, "display" | "width" | "height" | "opacity" | "overflow"> & {
  $display?: "block" | "inline-block" | "inline" | "none";
  $height?: string;
  $overflow?: ContainerOverflow;
  $width?: string;
};

export type { ContainerProps as default };
