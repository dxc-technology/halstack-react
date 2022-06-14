import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { spaces } from "../common/variables.js";
import { getMargin } from "../common/utils.js";
import BoxPropsType from "./types";
import useTheme from "../useTheme";
import { BackgroundColorProvider } from "../BackgroundColorContext";

const DxcBox = ({
  shadowDepth = 2,
  display = "inline-flex",
  children,
  margin,
  padding,
  size = "fitContent",
}: BoxPropsType): JSX.Element => {
  const colorsTheme = useTheme();

  return (
    <ThemeProvider theme={colorsTheme.box}>
      <StyledDxcBox shadowDepth={shadowDepth} display={display} margin={margin} padding={padding} size={size}>
        <BackgroundColorProvider color={colorsTheme.box.backgroundColor}>{children}</BackgroundColorProvider>
      </StyledDxcBox>
    </ThemeProvider>
  );
};

const sizes = {
  small: "48px",
  medium: "240px",
  large: "480px",
  fillParent: "100%",
  fitContent: "unset",
};

const calculateWidth = (margin, size, padding) => {
  if (size === "fillParent") {
    return `calc(${sizes[size]} - ${getMargin(margin, "left")} - ${getMargin(margin, "right")} -
    ${getMargin(padding, "left")} - ${getMargin(padding, "right")})`;
  }
  return sizes[size];
};

const StyledDxcBox = styled.div<BoxPropsType>`
  display: ${(props) => props.display};
  border-radius: ${(props) => props.theme.borderRadius};
  border-width: ${(props) => props.theme.borderThickness};
  border-style: ${(props) => props.theme.borderStyle};
  border-color: ${(props) => props.theme.borderColor};
  letter-spacing: ${(props) => props.theme.letterSpacing};
  width: ${(props) => calculateWidth(props.margin, props.size, props.padding)};
  background-color: ${(props) => props.theme.backgroundColor};
  box-shadow: ${(props) =>
    props.shadowDepth === 1
      ? `${props.theme.oneShadowDepthShadowOffsetX} ${props.theme.oneShadowDepthShadowOffsetY} ${props.theme.oneShadowDepthShadowBlur}  ${props.theme.oneShadowDepthShadowSpread} ${props.theme.oneShadowDepthShadowColor}`
      : props.shadowDepth === 2
      ? `${props.theme.twoShadowDepthShadowOffsetX} ${props.theme.twoShadowDepthShadowOffsetY} ${props.theme.twoShadowDepthShadowBlur}  ${props.theme.twoShadowDepthShadowSpread} ${props.theme.twoShadowDepthShadowColor}`
      : `${props.theme.noneShadowDepthShadowOffsetX} ${props.theme.noneShadowDepthShadowOffsetY} ${props.theme.noneShadowDepthShadowBlur}  ${props.theme.noneShadowDepthShadowSpread} ${props.theme.noneShadowDepthShadowColor}`};

  margin: ${(props) => (props.margin && typeof props.margin !== "object" ? spaces[props.margin] : "0px")};
  margin-top: ${(props) =>
    props.margin && typeof props.margin === "object" && props.margin.top ? spaces[props.margin.top] : ""};
  margin-right: ${(props) =>
    props.margin && typeof props.margin === "object" && props.margin.right ? spaces[props.margin.right] : ""};
  margin-bottom: ${(props) =>
    props.margin && typeof props.margin === "object" && props.margin.bottom ? spaces[props.margin.bottom] : ""};
  margin-left: ${(props) =>
    props.margin && typeof props.margin === "object" && props.margin.left ? spaces[props.margin.left] : ""};

  padding: ${({ padding }) => (padding && typeof padding !== "object" ? spaces[padding] : "0px")};
  padding-top: ${(props) =>
    props.padding && typeof props.padding === "object" && props.padding.top ? spaces[props.padding.top] : ""};
  padding-right: ${(props) =>
    props.padding && typeof props.padding === "object" && props.padding.right ? spaces[props.padding.right] : ""};
  padding-bottom: ${(props) =>
    props.padding && typeof props.padding === "object" && props.padding.bottom ? spaces[props.padding.bottom] : ""};
  padding-left: ${(props) =>
    props.padding && typeof props.padding === "object" && props.padding.left ? spaces[props.padding.left] : ""};
`;

export default DxcBox;
