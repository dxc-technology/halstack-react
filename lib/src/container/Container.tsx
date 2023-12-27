import React from "react";
import styled from "styled-components";
import ContainerPropsType, { StyledProps } from "./types";
import { getCoreColorToken } from "../common/coreTokens";
import { BackgroundColorProvider } from "../BackgroundColorContext";

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
  <BackgroundColorProvider color={getCoreColorToken(props?.background?.color)}>
    <Container $display={display} $width={width} $height={height} $overflow={overflow} {...props} />
  </BackgroundColorProvider>
);

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
  outline: ${({ outline }) => `${outline?.width} ${outline?.style} ${getCoreColorToken(outline?.color)}`};
  outline-offset: ${({ outline }) => outline?.offset};

  margin: ${({ margin }) => (typeof margin === "string" ? `${spaces[margin]}` : "")};
  margin-top: ${({ margin }) => (typeof margin === "object" ? spaces[margin.top] : "")};
  margin-right: ${({ margin }) => (typeof margin === "object" ? spaces[margin.right] : "")};
  margin-bottom: ${({ margin }) => (typeof margin === "object" ? spaces[margin.bottom] : "")};
  margin-left: ${({ margin }) => (typeof margin === "object" ? spaces[margin.left] : "")};

  padding: ${({ padding }) => (typeof padding === "string" ? `${spaces[padding]}` : "")};
  padding-top: ${({ padding }) => (typeof padding === "object" ? spaces[padding.top] : "")};
  padding-right: ${({ padding }) => (typeof padding === "object" ? spaces[padding.right] : "")};
  padding-bottom: ${({ padding }) => (typeof padding === "object" ? spaces[padding.bottom] : "")};
  padding-left: ${({ padding }) => (typeof padding === "object" ? spaces[padding.left] : "")};

  border: ${({ border }) =>
    border && "width" in border ? `${border?.width} ${border?.style} ${getCoreColorToken(border?.color)}` : ""};
  border-radius: ${({ border }) => (border && "radius" in border ? `${border?.radius}` : "")};
  border-top: ${({ border }) =>
    border && "top" in border
      ? `${border?.top?.width} ${border?.top?.style} ${getCoreColorToken(border?.top?.color)}`
      : ""};
  border-top-right-radius: ${({ border }) => (border && "top" in border ? `${border?.top?.rightRadius}` : "")};
  border-top-left-radius: ${({ border }) => (border && "top" in border ? `${border?.top?.leftRadius}` : "")};
  border-right: ${({ border }) =>
    border && "right" in border
      ? `${border?.right?.width} ${border?.right?.style} ${getCoreColorToken(border?.right?.color)}`
      : ""};
  border-bottom: ${({ border }) =>
    border && "bottom" in border
      ? `${border?.bottom?.width} ${border?.bottom?.style} ${getCoreColorToken(border?.bottom?.color)}`
      : ""};
  border-bottom-right-radius: ${({ border }) => (border && "bottom" in border ? `${border?.bottom?.rightRadius}` : "")};
  border-bottom-left-radius: ${({ border }) => (border && "bottom" in border ? `${border?.bottom?.leftRadius}` : "")};
  border-left: ${({ border }) =>
    border && "left" in border
      ? `${border?.left?.width} ${border?.left?.style} ${getCoreColorToken(border?.left?.color)}`
      : ""};

  overflow: ${({ $overflow }) => (typeof $overflow !== "object" ? $overflow : "")};
  overflow-x: ${({ $overflow }) => (typeof $overflow === "object" ? `${$overflow?.x}` : "")};
  overflow-y: ${({ $overflow }) => (typeof $overflow === "object" ? `${$overflow?.y}` : "")};

  background-attachment: ${({ background }) => background?.attachment};
  background-clip: ${({ background }) => background?.clip};
  background-color: ${({ background }) => getCoreColorToken(background?.color)};
  background-image: ${({ background }) => background?.image};
  background-origin: ${({ background }) => background?.origin};
  background-position: ${({ background }) => background?.position};
  background-repeat: ${({ background }) => background?.repeat};
  background-size: ${({ background }) => background?.size};
`;

export default DxcContainer;
