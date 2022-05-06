import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { spaces } from "../common/variables.js";
import useTheme from "../useTheme";
import { Margin, LinkProps, Space } from "./types";

const DxcLink = ({
  inheritColor = false,
  disabled = false,
  icon,
  iconPosition = "before",
  href = "",
  newWindow = false,
  onClick,
  margin,
  tabIndex = 0,
  children,
}: LinkProps): JSX.Element => {
  const colorsTheme = useTheme();
  const linkContent = (
    <LinkText>
      {iconPosition === "after" && children}
      {icon && (
        <LinkIconContainer iconPosition={iconPosition}>
          {typeof icon === "string" ? <LinkIcon src={icon} /> : icon}
        </LinkIconContainer>
      )}
      {iconPosition === "before" && children}
    </LinkText>
  );

  return (
    <ThemeProvider theme={colorsTheme.link}>
      <LinkContainer margin={margin}>
        {typeof children === "string" && (href || onClick) ? (
          <StyledLink
            as={href ? "a" : "button"}
            tabIndex={tabIndex}
            onClick={!disabled && onClick}
            href={!disabled && href ? href : undefined}
            target={href ? (newWindow ? "_blank" : "_self") : undefined}
            disabled={disabled}
            inheritColor={inheritColor}
          >
            {linkContent}
          </StyledLink>
        ) : (
          <CustomLinkContainer disabled={disabled} inheritColor={inheritColor}>
            {linkContent}
          </CustomLinkContainer>
        )}
      </LinkContainer>
    </ThemeProvider>
  );
};

type LinkContainerProps = {
  margin?: Space | Margin;
};
const LinkContainer = styled.div<LinkContainerProps>`
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

  * {
    background: none;
    border: none;
    padding: 0;
    cursor: pointer;
    font-family: inherit;
    text-decoration-color: transparent;
  }
`;

type StyledLinkProps = {
  disabled?: boolean;
  inheritColor?: boolean;
};
const StyledLink = styled.div<StyledLinkProps>`
  ${(props) =>
    `padding-bottom: ${props.theme.underlineSpacing};
     border-bottom: ${props.theme.underlineThickness} ${props.theme.underlineStyle} transparent;`}
  ${(props) => props.disabled && "cursor: default;"}
  color: ${(props) =>
    props.inheritColor ? "inherit" : !props.disabled ? props.theme.fontColor : props.theme.disabledColor};
  ${(props) => (props.disabled ? "pointer-events: none;" : "")}

  a:visited {
    color: ${(props) => (!props.inheritColor && !props.disabled ? props.theme.visitedFontColor : "")};
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

const CustomLinkContainer = styled.div<StyledLinkProps>`
  ${(props) =>
    `padding-bottom: ${props.theme.underlineSpacing};
     border-bottom: ${props.theme.underlineThickness} ${props.theme.underlineStyle} transparent;`}
  ${(props) => props.disabled && "cursor: default;"}
  ${(props) => (props.disabled ? "pointer-events: none;" : "")}

  * {
    color: ${(props) =>
      props.inheritColor ? "inherit" : !props.disabled ? props.theme.fontColor : props.theme.disabledColor};
  }

  &:hover {
    * {
      color: ${(props) => props.theme.hoverFontColor};
    }
    ${(props) =>
      `border-bottom-color: ${props.theme.hoverUnderlineColor};
       cursor: pointer;`}
  }
  &:focus-within {
    * {
      outline: none;
    }
    border-radius: 2px;
    outline: 2px solid ${(props) => props.theme.focusColor};
    ${(props) => props.disabled && "outline: none"}
  }
  &:active {
    * {
      color: ${(props) => props.theme.activeFontColor} !important;
    }
    ${(props) => `border-bottom-color: ${props.theme.activeUnderlineColor} !important;`}
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

type LinkIconContainerProps = {
  iconPosition?: "before" | "after";
};
const LinkIconContainer = styled.div<LinkIconContainerProps>`
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
