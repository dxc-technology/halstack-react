import React, { useContext, useMemo } from "react";
import styled, { ThemeProvider } from "styled-components";
import PropTypes from "prop-types";
import { spaces } from "../common/variables.js";

import { defaultTheme, theme } from "../common/variables.js";
import { getCustomTheme } from "../common/utils.js";
import ThemeContext from "../ThemeContext.js";

const DxcLink = ({
  underlined = true,
  inheritColor = false,
  disabled = false,
  iconSrc,
  iconPosition = "before",
  href = "",
  newWindow = false,
  text = "",
  margin,
}) => {
  const customTheme = useContext(ThemeContext);
  const colorsTheme = useMemo(() => getCustomTheme(theme, getCustomTheme(defaultTheme, customTheme)), [customTheme]);

  return (
    <ThemeProvider theme={colorsTheme.link}>
      <LinkText
        underlined={underlined}
        inheritColor={inheritColor}
        disabled={disabled}
        href={href}
        margin={margin}
        iconPosition={iconPosition}
        target={newWindow ? "_blank" : "_self"}
      >
        {text}
        {iconSrc ? <LinkIcon src={iconSrc} iconPosition={iconPosition}></LinkIcon> : ""}
      </LinkText>
    </ThemeProvider>
  );
};

const LinkText = styled.a`
  margin: ${(props) => (props.margin && typeof props.margin !== "object" ? spaces[props.margin] : "0px")};
  margin-top: ${(props) =>
    props.margin && typeof props.margin === "object" && props.margin.top ? spaces[props.margin.top] : ""};
  margin-right: ${(props) =>
    props.margin && typeof props.margin === "object" && props.margin.right ? spaces[props.margin.right] : ""};
  margin-bottom: ${(props) =>
    props.margin && typeof props.margin === "object" && props.margin.bottom ? spaces[props.margin.bottom] : ""};
  margin-left: ${(props) =>
    props.margin && typeof props.margin === "object" && props.margin.left ? spaces[props.margin.left] : ""};

  ${(props) =>
    props.underlined
      ? !props.disabled
        ? `text-decoration: none;
      padding-bottom: 1px !important;
      border-bottom: 1px solid ${props.theme.underlinedBackgroundColor}`
        : `text-decoration: none;
      padding-bottom: 1px !important;
      border-bottom: 1px solid ${props.theme.disabledUnderlinedBackgroundColor}`
      : `text-decoration: none`};

  color: ${(props) => (!props.disabled ? props.theme.fontColor : props.theme.disabledColor)};
  ${(props) => (!props.underlined ? "text-decoration-color: transparent;" : "")}
  ${(props) => (props.disabled ? "pointer-events: none;" : "")}
  
  display: inline-flex;
  flex-direction: ${(props) => (props.iconPosition === "after" ? "row" : "row-reverse")};
  justify-content: ${(props) => (props.iconPosition === "after" ? "flex-start" : "flex-end")};
  align-items: center;

  max-width: 100%;
  font-size: 16px;
  padding-bottom: 2px;

  &:hover {
    color: ${(props) => props.theme.hoverFontColor} !important;
    text-decoration: none;
    padding-bottom: 1px !important;
    border-bottom: 1px solid;

    cursor: pointer;
  }

  &:visited {
    ${(props) =>
      props.underlined
        ? !props.disabled
          ? `color: ${props.theme.visitedFontColor} !important; border-bottom: 1px solid ${props.theme.visitedUnderlinedBackgroundColor}`
          : ""
        : ""}
  }
`;

const LinkIcon = styled.img`
  width: 16px;
  height: 16px;
  ${(props) => (props.iconPosition === "before" ? "margin-right" : "margin-left")}: 6px;
`;

DxcLink.propTypes = {
  underlined: PropTypes.bool,
  inheritColor: PropTypes.bool,
  disabled: PropTypes.bool,
  iconSrc: PropTypes.string,
  iconPosition: PropTypes.oneOf(["after", "before"]),
  href: PropTypes.string,
  margin: PropTypes.oneOfType([
    PropTypes.shape({
      top: PropTypes.oneOf(Object.keys(spaces)),
      bottom: PropTypes.oneOf(Object.keys(spaces)),
      left: PropTypes.oneOf(Object.keys(spaces)),
      right: PropTypes.oneOf(Object.keys(spaces)),
    }),
    PropTypes.oneOf([...Object.keys(spaces)]),
  ]),
  newWindow: PropTypes.bool,
  text: PropTypes.string,
};

export default DxcLink;
