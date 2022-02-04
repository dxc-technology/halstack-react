import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { spaces } from "../common/variables.js";
import useTheme from "../useTheme.js";
import Overload, { LinkTextProps, LinkIconProps, LinkCommonProps } from "./types";

const DxcLink: Overload = ({
  inheritColor = false,
  disabled = false,
  iconSrc,
  icon,
  iconPosition = "before",
  href = "",
  newWindow = false,
  onClick,
  text = "",
  margin,
  tabIndex = 0,
}: LinkCommonProps & (LinkTextProps | LinkIconProps)): JSX.Element => {
  const colorsTheme = useTheme();
  const linkContent = (
    <LinkText iconPosition={iconPosition}>
      {text}
      {icon ? (
        <LinkIconContainer iconPosition={iconPosition}>
          {typeof icon === "object" ? icon : React.createElement(icon)}
        </LinkIconContainer>
      ) : (
        iconSrc && <LinkIcon src={iconSrc} iconPosition={iconPosition}></LinkIcon>
      )}
    </LinkText>
  );

  return (
    <ThemeProvider theme={colorsTheme.link}>
      <DxcLinkContainer margin={margin}>
        {onClick ? (
          <StyledButton
            type="button"
            onClick={!disabled && onClick}
            margin={margin}
            disabled={disabled}
            inheritColor={inheritColor}
          >
            {linkContent}
          </StyledButton>
        ) : (
          <StyledLink
            tabIndex={tabIndex}
            href={!disabled && href}
            target={newWindow ? "_blank" : "_self"}
            margin={margin}
            disabled={disabled}
            inheritColor={inheritColor}
          >
            {linkContent}
          </StyledLink>
        )}
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
  color: ${(props) =>
    props.inheritColor ? "inherit" : !props.disabled ? props.theme.fontColor : props.theme.disabledColor};
  ${(props) => (props.disabled ? "pointer-events: none;" : "")}

  text-decoration-color: transparent;
  ${(props) =>
    `padding-bottom: ${props.theme.underlineSpacing};
     border-bottom: ${props.theme.underlineThickness} ${props.theme.underlineStyle} transparent;`}

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
    outline-color: ${(props) => props.theme.focusColor};
    outline-width: 2px;
    ${(props) => props.disabled && "outline: none"}
  }
  &:active {
    ${(props) =>
      `color: ${props.theme.activeFontColor} !important;
       border-bottom-color: ${props.theme.activeUnderlineColor} !important;`}
  }
`;

const StyledButton = styled.button`
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

  &:hover {
    ${(props) =>
      `color: ${props.theme.hoverFontColor};
       border-bottom-color: ${props.theme.hoverUnderlineColor};
       cursor: pointer;`}
  }
  &:focus {
    outline-color: ${(props) => props.theme.focusColor};
    outline-width: 2px;
    outline-offset: 1px;
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
  display: inline-flex;
  flex-direction: ${(props) => (props.iconPosition === "after" ? "row" : "row-reverse")};
  justify-content: ${(props) => (props.iconPosition === "after" ? "flex-start" : "flex-end")};
  align-items: center;
  max-width: 100%;
`;

const LinkIcon = styled.img`
  width: ${(props) => props.theme.iconSize};
  height: ${(props) => props.theme.iconSize};
  ${(props) => `${props.iconPosition === "before" ? "margin-right" : "margin-left"}: ${props.theme.iconSpacing}`};
`;

const LinkIconContainer = styled.div`
  width: ${(props) => props.theme.iconSize};
  height: ${(props) => props.theme.iconSize};
  ${(props) => `${props.iconPosition === "before" ? "margin-right" : "margin-left"}: ${props.theme.iconSpacing}`};
  overflow: hidden;

  img,
  svg {
    height: 100%;
    width: 100%;
  }
`;

export default DxcLink;
