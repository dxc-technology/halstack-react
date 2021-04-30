import React from "react";
import styled, { ThemeProvider } from "styled-components";
import PropTypes from "prop-types";
import { spaces } from "../common/variables.js";
import { getMargin } from "../common/utils.js";

import useTheme from "../useTheme.js";

const DxcBox = ({ shadowDepth, margin, padding, display = "inline-flex", children, size = "fitContent" }) => {
  const colorsTheme = useTheme();

  return (
    <ThemeProvider theme={colorsTheme.box}>
      <StyledDxcBox shadowDepth={shadowDepth} display={display} margin={margin} padding={padding} size={size}>
        {children}
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

const StyledDxcBox = styled.div`
  display: ${({ display }) => display};
  border-radius: 4px;
  overflow: hidden;
  font-size: ${(props) => props.theme.fontSizeBase};
  font-family: ${(props) => props.theme.fontFamily};
  width: ${(props) => calculateWidth(props.margin, props.size, props.padding)};
  background-color: ${(props) => props.theme.backgroundColor};
  box-shadow: ${({ shadowDepth }) =>
    shadowDepth === 1
      ? "0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)"
      : shadowDepth === 2
      ? "0px 3px 3px -2px rgba(0,0,0,0.2), 0px 3px 4px 0px rgba(0,0,0,0.14), 0px 1px 8px 0px rgba(0,0,0,0.12)"
      : "none"};

  margin: ${({ margin }) => (margin && typeof margin !== "object" ? spaces[margin] : "0px")};
  margin-top: ${({ margin }) => (margin && margin.top ? spaces[margin.top] : "")};
  margin-right: ${({ margin }) => (margin && margin.right ? spaces[margin.right] : "")};
  margin-bottom: ${({ margin }) => (margin && margin.bottom ? spaces[margin.bottom] : "")};
  margin-left: ${({ margin }) => (margin && margin.left ? spaces[margin.left] : "")};

  padding: ${({ padding }) => (padding && typeof padding !== "object" ? spaces[padding] : "0px")};
  padding-top: ${({ padding }) => (padding && padding.top ? spaces[padding.top] : "")};
  padding-right: ${({ padding }) => (padding && padding.right ? spaces[padding.right] : "")};
  padding-bottom: ${({ padding }) => (padding && padding.bottom ? spaces[padding.bottom] : "")};
  padding-left: ${({ padding }) => (padding && padding.left ? spaces[padding.left] : "")};
`;

DxcBox.propTypes = {
  size: PropTypes.oneOf([...Object.keys(sizes)]),
  display: PropTypes.string,
  shadowDepth: PropTypes.oneOf([0, 1, 2]),
  margin: PropTypes.oneOfType([
    PropTypes.shape({
      top: PropTypes.oneOf(Object.keys(spaces)),
      bottom: PropTypes.oneOf(Object.keys(spaces)),
      left: PropTypes.oneOf(Object.keys(spaces)),
      right: PropTypes.oneOf(Object.keys(spaces)),
    }),
    PropTypes.oneOf([...Object.keys(spaces)]),
  ]),
  padding: PropTypes.oneOfType([
    PropTypes.shape({
      top: PropTypes.oneOf(Object.keys(spaces)),
      bottom: PropTypes.oneOf(Object.keys(spaces)),
      left: PropTypes.oneOf(Object.keys(spaces)),
      right: PropTypes.oneOf(Object.keys(spaces)),
    }),
    PropTypes.oneOf([...Object.keys(spaces)]),
  ]),
};

DxcBox.defaultProps = {
  shadowDepth: 2,
  display: "inline-flex",
  margin: null,
  padding: null,
};

export default DxcBox;
