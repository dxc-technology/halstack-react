import React from "react";
import styled from "styled-components";
import ContainerPropsType, { StyledProps, BorderProperties } from "./types";
import { getCoreColorToken } from "../common/coreTokens";

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
  `border-${direction}: ${borderProperties?.width ?? ""} ${borderProperties?.style ?? ""} ${
    getCoreColorToken(borderProperties?.color) ?? ""
  };`;

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
  background-color: ${({ background }) => getCoreColorToken(background?.color)};
  background-image: ${({ background }) => background?.image};
  background-origin: ${({ background }) => background?.origin};
  background-position: ${({ background }) => background?.position};
  background-repeat: ${({ background }) => background?.repeat};
  background-size: ${({ background }) => background?.size};

  border-radius: ${({ borderRadius }) => borderRadius};
  border-width: ${({ border }) => (border && "width" in border ? `${border?.width}` : "")};
  border-style: ${({ border }) => (border && "style" in border ? `${border?.style}` : "")};
  border-color: ${({ border }) => (border && "color" in border ? `${getCoreColorToken(border?.color)}` : "")};

  ${({ border }) => {
    if (border != null) {
      let styles = "";
      if ("top" in border) {
        styles += getBorderStyles("top", border.top);
      }
      if ("right" in border) {
        styles += getBorderStyles("right", border.right);
      }
      if ("left" in border) {
        styles += getBorderStyles("left", border.left);
      }
      if ("bottom" in border) {
        styles += getBorderStyles("bottom", border.bottom);
      }
      return styles;
    }
    return undefined;
  }};

  margin: ${({ margin }) => (typeof margin === "string" ? spaces[margin] : "")};
  margin-top: ${({ margin }) => (typeof margin === "object" ? spaces[margin.top] : "")};
  margin-right: ${({ margin }) => (typeof margin === "object" ? spaces[margin.right] : "")};
  margin-bottom: ${({ margin }) => (typeof margin === "object" ? spaces[margin.bottom] : "")};
  margin-left: ${({ margin }) => (typeof margin === "object" ? spaces[margin.left] : "")};

  outline: ${({ outline }) =>
    `${outline?.width ?? ""} ${outline?.style ?? ""} ${getCoreColorToken(outline?.color) ?? ""}`};
  outline-offset: ${({ outline }) => outline?.offset};

  overflow: ${({ $overflow }) => (typeof $overflow === "string" ? $overflow : "")};
  overflow-x: ${({ $overflow }) => (typeof $overflow === "object" ? `${$overflow?.x}` : "")};
  overflow-y: ${({ $overflow }) => (typeof $overflow === "object" ? `${$overflow?.y}` : "")};

  padding: ${({ padding }) => (typeof padding === "string" ? spaces[padding] : "")};
  padding-top: ${({ padding }) => (typeof padding === "object" ? spaces[padding.top] : "")};
  padding-right: ${({ padding }) => (typeof padding === "object" ? spaces[padding.right] : "")};
  padding-bottom: ${({ padding }) => (typeof padding === "object" ? spaces[padding.bottom] : "")};
  padding-left: ${({ padding }) => (typeof padding === "object" ? spaces[padding.left] : "")};
`;

export default DxcContainer;
