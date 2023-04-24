import React, { forwardRef, Ref } from "react";
import styled, { ThemeProvider } from "styled-components";
import { spaces } from "../common/variables";
import useTheme from "../useTheme";
import { LinkProps } from "./types";

const LinkContent = React.memo(({ iconPosition, icon, children }: LinkProps): JSX.Element => {
  return (
    <React.Fragment>
      {iconPosition === "after" && children}
      {icon && (
        <LinkIconContainer iconPosition={iconPosition}>
          {typeof icon === "string" ? <LinkIcon src={icon} /> : icon}
        </LinkIconContainer>
      )}
      {iconPosition === "before" && children}
    </React.Fragment>
  );
});

const DxcLink = forwardRef(
  (
    {
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
      ...otherProps
    }: LinkProps,
    ref: Ref<HTMLAnchorElement>
  ): JSX.Element => {
    const colorsTheme = useTheme();

    return (
      <ThemeProvider theme={colorsTheme.link}>
        <StyledLink
          as={href ? "a" : "button"}
          tabIndex={tabIndex}
          onClick={!disabled ? onClick : undefined}
          href={!disabled && href ? href : undefined}
          target={href ? (newWindow ? "_blank" : "_self") : undefined}
          disabled={disabled}
          inheritColor={inheritColor}
          margin={margin}
          ref={ref}
          {...otherProps}
        >
          <LinkContent iconPosition={iconPosition} icon={icon} children={children} />
        </StyledLink>
      </ThemeProvider>
    );
  }
);

const StyledLink = styled.div<{
  margin: LinkProps["margin"];
  disabled: LinkProps["disabled"];
  inheritColor: LinkProps["inheritColor"];
}>`
  display: inline-flex;
  align-items: baseline;
  margin: ${(props) => (props.margin && typeof props.margin !== "object" ? spaces[props.margin] : "0px")};
  margin-top: ${(props) =>
    props.margin && typeof props.margin === "object" && props.margin.top ? spaces[props.margin.top] : ""};
  margin-right: ${(props) =>
    props.margin && typeof props.margin === "object" && props.margin.right ? spaces[props.margin.right] : ""};
  margin-bottom: ${(props) =>
    props.margin && typeof props.margin === "object" && props.margin.bottom ? spaces[props.margin.bottom] : ""};
  margin-left: ${(props) =>
    props.margin && typeof props.margin === "object" && props.margin.left ? spaces[props.margin.left] : ""};
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  font-size: ${(props) => props.theme.fontSize};
  font-weight: ${(props) => props.theme.fontWeight};
  font-style: ${(props) => props.theme.fontStyle};
  font-family: ${(props) => props.theme.fontFamily};
  text-decoration-color: transparent;
  width: fit-content;
  ${(props) =>
    `padding-bottom: ${props.theme.underlineSpacing};
     border-bottom: ${props.theme.underlineThickness} ${props.theme.underlineStyle} transparent;`}
  ${(props) => props.disabled && "cursor: default;"}
  color: ${(props) =>
    props.inheritColor ? "inherit" : !props.disabled ? props.theme.fontColor : props.theme.disabledColor};
  ${(props) => (props.disabled ? "pointer-events: none;" : "")}
  &:visited {
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

const LinkIcon = styled.img``;

const LinkIconContainer = styled.div<{ iconPosition: LinkProps["iconPosition"] }>`
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
