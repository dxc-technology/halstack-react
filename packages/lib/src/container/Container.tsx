import styled from "styled-components";
import { getCoreColorToken } from "../common/coreTokens";
import ContainerPropsType, { BorderProperties, StyledProps } from "./types";

/**
 * This values correspond to the spaces defined in the design system
 * https://developer.dxc.com/halstack/next/principles/spacing/#component-spacing-tokens
 */
const spaces = {
  xxsmall: "4px",
  xsmall: "8px",
  small: "12px",
  medium: "16px",
  large: "24px",
  xlarge: "32px",
  xxlarge: "48px",
};

const DxcContainer = ({ display, width, height, overflow, ...props }: ContainerPropsType) => (
  <Container $display={display} $width={width} $height={height} $overflow={overflow} {...props} />
);

const getBorderStyles = (direction: "top" | "bottom" | "left" | "right", borderProperties: BorderProperties) =>
  `border-${direction}-width: ${borderProperties?.width ?? ""};
   border-${direction}-style: ${borderProperties?.style ?? ""};
   border-${direction}-color: ${borderProperties?.color ? getCoreColorToken(borderProperties?.color) : ""};`;

const Container = styled.div<StyledProps>`
  box-sizing: ${({ boxSizing }) => boxSizing};
  display: ${({ $display }) => $display};
  width: ${({ $width }) => $width};
  height: ${({ $height }) => $height};
  max-width: ${({ maxWidth }) => maxWidth};
  max-height: ${({ maxHeight }) => maxHeight};
  min-width: ${({ minWidth }) => minWidth};
  min-height: ${({ minHeight }) => minHeight};
  position: ${({ position }) => position};
  top: ${({ inset }) => inset?.top};
  right: ${({ inset }) => inset?.right};
  bottom: ${({ inset }) => inset?.bottom};
  left: ${({ inset }) => inset?.left};
  float: ${({ float }) => float};
  z-index: ${({ zIndex }) => zIndex};
  box-shadow: ${({ boxShadow }) => boxShadow};

  background-attachment: ${({ background }) => background?.attachment};
  background-clip: ${({ background }) => background?.clip};
  background-color: ${({ background }) => (background?.color ? getCoreColorToken(background?.color) : "")};
  background-image: ${({ background }) => background?.image};
  background-origin: ${({ background }) => background?.origin};
  background-position: ${({ background }) => background?.position};
  background-repeat: ${({ background }) => background?.repeat};
  background-size: ${({ background }) => background?.size};

  border-radius: ${({ borderRadius }) => borderRadius};
  border-width: ${({ border }) => (border && "width" in border ? `${border?.width}` : "")};
  border-style: ${({ border }) => (border && "style" in border ? `${border?.style}` : "")};
  border-color: ${({ border }) =>
    border && "color" in border && border?.color ? `${getCoreColorToken(border?.color)}` : ""};

  ${({ border }) => {
    if (border != null) {
      let styles = "";
      if ("top" in border) {
        styles += border?.top ? getBorderStyles("top", border.top) : "";
      }
      if ("right" in border) {
        styles += border?.right ? getBorderStyles("right", border.right) : "";
      }
      if ("left" in border) {
        styles += border?.left ? getBorderStyles("left", border.left) : "";
      }
      if ("bottom" in border) {
        styles += border?.bottom ? getBorderStyles("bottom", border.bottom) : "";
      }
      return styles;
    }
    return undefined;
  }};

  margin: ${({ margin }) => (typeof margin === "string" ? spaces[margin] : "")};
  margin-top: ${({ margin }) => (typeof margin === "object" && margin.top ? spaces[margin.top] : "")};
  margin-right: ${({ margin }) => (typeof margin === "object" && margin.right ? spaces[margin.right] : "")};
  margin-bottom: ${({ margin }) => (typeof margin === "object" && margin.bottom ? spaces[margin.bottom] : "")};
  margin-left: ${({ margin }) => (typeof margin === "object" && margin.left ? spaces[margin.left] : "")};

  outline-width: ${({ outline }) => `${outline?.width ?? ""}`};
  outline-style: ${({ outline }) => `${outline?.style ?? ""}`};
  outline-color: ${({ outline }) => (outline?.color ? `${getCoreColorToken(outline?.color)}` : "")};
  outline-offset: ${({ outline }) => outline?.offset};

  overflow: ${({ $overflow }) => (typeof $overflow === "string" ? $overflow : "")};
  overflow-x: ${({ $overflow }) => (typeof $overflow === "object" ? `${$overflow?.x}` : "")};
  overflow-y: ${({ $overflow }) => (typeof $overflow === "object" ? `${$overflow?.y}` : "")};

  padding: ${({ padding }) => (typeof padding === "string" ? spaces[padding] : "")};
  padding-top: ${({ padding }) => (typeof padding === "object" && padding.top ? spaces[padding.top] : "")};
  padding-right: ${({ padding }) => (typeof padding === "object" && padding.right ? spaces[padding.right] : "")};
  padding-bottom: ${({ padding }) => (typeof padding === "object" && padding.bottom ? spaces[padding.bottom] : "")};
  padding-left: ${({ padding }) => (typeof padding === "object" && padding.left ? spaces[padding.left] : "")};
`;

export default DxcContainer;
