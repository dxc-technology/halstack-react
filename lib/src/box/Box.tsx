import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { spaces } from "../common/variables";
import getMargin from "../common/utils";
import BoxPropsType from "./types";
import useTheme from "../useTheme";

const DxcBox = ({
  shadowDepth = 2,
  display = "inline-flex",
  children,
  margin,
  size = "fitContent",
}: BoxPropsType): JSX.Element => {
  const colorsTheme = useTheme();

  return (
    <ThemeProvider theme={colorsTheme.box}>
      <Box
        shadowDepth={shadowDepth}
        display={display}
        margin={margin}
        size={size}
      >
        {children}
      </Box>
    </ThemeProvider>
  );
};

const sizes = {
  small: "48px",
  medium: "240px",
  large: "480px",
  fillParent: "100%",
  fitContent: "fit-content",
};

const calculateWidth = (
  margin: BoxPropsType["margin"],
  size: BoxPropsType["size"]
) =>
  size === "fillParent"
    ? `calc(${sizes[size]} - ${getMargin(margin, "left")} - ${getMargin(margin, "right")})`
    : sizes[size];

const Box = styled.div<BoxPropsType>`
  display: ${(props) => props.display};
  border-radius: ${(props) => props.theme.borderRadius};
  border-width: ${(props) => props.theme.borderThickness};
  border-style: ${(props) => props.theme.borderStyle};
  border-color: ${(props) => props.theme.borderColor};
  overflow: hidden;
  width: ${(props) => calculateWidth(props.margin, props.size)};
  background-color: ${(props) => props.theme.backgroundColor};
  box-shadow: ${(props) =>
    props.shadowDepth === 1
      ? `${props.theme.oneShadowDepthShadowOffsetX} ${props.theme.oneShadowDepthShadowOffsetY} ${props.theme.oneShadowDepthShadowBlur}  ${props.theme.oneShadowDepthShadowSpread} ${props.theme.oneShadowDepthShadowColor}`
      : props.shadowDepth === 2
        ? `${props.theme.twoShadowDepthShadowOffsetX} ${props.theme.twoShadowDepthShadowOffsetY} ${props.theme.twoShadowDepthShadowBlur}  ${props.theme.twoShadowDepthShadowSpread} ${props.theme.twoShadowDepthShadowColor}`
        : `${props.theme.noneShadowDepthShadowOffsetX} ${props.theme.noneShadowDepthShadowOffsetY} ${props.theme.noneShadowDepthShadowBlur}  ${props.theme.noneShadowDepthShadowSpread} ${props.theme.noneShadowDepthShadowColor}`};

  margin: ${(props) =>
    props.margin && typeof props.margin !== "object"
      ? spaces[props.margin]
      : "0px"};
  margin-top: ${(props) =>
    props.margin && typeof props.margin === "object" && props.margin.top
      ? spaces[props.margin.top]
      : ""};
  margin-right: ${(props) =>
    props.margin && typeof props.margin === "object" && props.margin.right
      ? spaces[props.margin.right]
      : ""};
  margin-bottom: ${(props) =>
    props.margin && typeof props.margin === "object" && props.margin.bottom
      ? spaces[props.margin.bottom]
      : ""};
  margin-left: ${(props) =>
    props.margin && typeof props.margin === "object" && props.margin.left
      ? spaces[props.margin.left]
      : ""};
`;

export default DxcBox;
