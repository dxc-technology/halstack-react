import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { spaces } from "../common/variables.js";
import useTheme from "../useTheme";
import Overload, { LinkTextProps, LinkIconProps } from "./types";

const DxcLink: Overload = ({
  inheritColor = false,
  disabled = false,
  icon,
  iconPosition = "before",
  href = "",
  newWindow = false,
  text = "",
  margin,
  tabIndex = 0,
  as,
  ...otherProps
}: LinkTextProps | LinkIconProps): JSX.Element => {
  const colorsTheme = useTheme();
  const linkContent = (
    <LinkText iconPosition={iconPosition}>
      {iconPosition === "after" && text}
      {icon && (
        <LinkIconContainer iconPosition={iconPosition}>
          {typeof icon === "string" ? <LinkIcon src={icon} /> : icon}
        </LinkIconContainer>
      )}
      {iconPosition === "before" && text}
    </LinkText>
  );

  return (
    <ThemeProvider theme={colorsTheme.link}>
      <DxcLinkContainer margin={margin}>
        <StyledLink
          tabIndex={tabIndex}
          href={!as && !disabled && href}
          target={!as && (newWindow ? "_blank" : "_self")}
          margin={margin}
          disabled={disabled}
          inheritColor={inheritColor}
          as={as || "a"}
          {...otherProps}
        >
          {linkContent}
        </StyledLink>
      </DxcLinkContainer>
    </ThemeProvider>
  );
};

const DxcLinkContainer = styled.div`
  display: inline-flex;
  margin: ${(props) => (props.margin && typeof props.margin !== "object" ? spaces[props.margin] : "0px")};
  margin-top: ${(props) =>
    props.margin && typeof props.margin === "object" && props.margin.top ? spaces[props.margin.top] : ""};
  margin-right: ${(props) =>
    props.margin && typeof props.margin === "object" && props.margin.right ? spaces[props.margin.right] : ""};
  margin-bottom: ${(props) =>
    props.margin && typeof props.margin === "object" && props.margin.bottom ? spaces[props.margin.bottom] : ""};
  margin-left: ${(props) =>
    props.margin && typeof props.margin === "object" && props.margin.left ? spaces[props.margin.left] : ""};
`;

const StyledLink = styled.a`
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  font-family: inherit;
  text-decoration-color: transparent;

  ${(props) =>
    `padding-bottom: ${props.theme.underlineSpacing};
     border-bottom: ${props.theme.underlineThickness} ${props.theme.underlineStyle} transparent;`}
  ${(props) => props.disabled && "cursor: default;"}
  color: ${(props) =>
    props.inheritColor ? "inherit" : !props.disabled ? props.theme.fontColor : props.theme.disabledColor};
  ${(props) => (props.disabled ? "pointer-events: none;" : "")}

  &:visited {
    color: ${(props) => (!props.inheritColor ? props.theme.visitedFontColor : "")};
    &:hover {
      ${(props) =>
        `color: ${props.theme.visitedFontColor};
         border-bottom-color: ${props.theme.visitedUnderlineColor};`}
    }
  }
  &:hover {
    ${(props) =>
      `color: ${props.theme.hoverFontColor};
       border-bottom-color: ${props.theme.hoverUnderlineColor};
       cursor: pointer;`}
  }
  &:focus {
    border-radius: 2px;
    outline: 2px solid ${(props) => props.theme.focusColor};
    ${(props) => props.disabled && "outline: none"}
  }
  &:active {
    ${(props) =>
      `color: ${props.theme.activeFontColor} !important;
       border-bottom-color: ${props.theme.activeUnderlineColor} !important;`}
  }
`;

const LinkText = styled.div`
  font-size: ${(props) => props.theme.fontSize};
  font-weight: ${(props) => props.theme.fontWeight};
  font-style: ${(props) => props.theme.fontStyle};
  font-family: ${(props) => props.theme.fontFamily};
  display: flex;
  align-items: baseline;
  max-width: 100%;
`;

const LinkIcon = styled.img``;

const LinkIconContainer = styled.div`
  width: ${(props) => props.theme.iconSize};
  height: ${(props) => props.theme.iconSize};
  ${(props) => `${props.iconPosition === "before" ? "margin-right" : "margin-left"}: ${props.theme.iconSpacing}`};
  overflow: hidden;
  align-self: center;

  img,
  svg {
    height: 100%;
    width: 100%;
  }
`;

export default DxcLink;
