import { forwardRef, Ref } from "react";
import styled, { ThemeProvider } from "styled-components";
import { spaces } from "../common/variables";
import DxcIcon from "../icon/Icon";
import useTheme from "../useTheme";
import { LinkProps } from "./types";
import CoreTokens from "../common/coreTokens";

const StyledLink = styled.a<{
  margin: LinkProps["margin"];
  disabled: LinkProps["disabled"];
  inheritColor: LinkProps["inheritColor"];
}>`
  all: unset;
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
  border-radius: 4px;
  width: fit-content;
  ${(props) => `padding-bottom: ${props.theme.underlineSpacing};`}
  font-family: ${(props) => props.theme.fontFamily};
  font-size: ${(props) => props.theme.fontSize};
  font-style: ${(props) => props.theme.fontStyle};
  font-weight: ${(props) => props.theme.fontWeight};
  line-height: ${CoreTokens.type_leading_compact_02};
  text-decoration: none;
  color: ${(props) =>
    props.inheritColor ? "inherit" : !props.disabled ? props.theme.fontColor : props.theme.disabledFontColor};
  ${(props) => (props.disabled ? "cursor: default;" : "cursor: pointer;")}
  ${(props) => (props.disabled ? "pointer-events: none;" : "")}

  &:visited {
    color: ${(props) => (!props.inheritColor && !props.disabled ? props.theme.visitedFontColor : "")};
    & > span:hover {
      ${(props) => `color: ${props.theme.visitedFontColor};
                    border-bottom-color: ${props.theme.visitedUnderlineColor};`}
    }
  }
  &:focus {
    outline: 2px solid ${(props) => props.theme.focusColor};
    outline-offset: 2px;
    ${(props) => props.disabled && "outline: none"}
  }
`;

const LinkContainer = styled.span<{
  iconPosition: LinkProps["iconPosition"];
  inheritColor: LinkProps["inheritColor"];
}>`
  ${(props) => `border-bottom: ${props.theme.underlineThickness} ${props.theme.underlineStyle} transparent;`}
  display: inline-flex;
  align-items: center;
  ${(props) => (props.iconPosition === "before" ? "flex-direction: row-reverse;" : "")}
  gap: ${(props) => props.theme.iconSpacing};

  &:hover {
    ${(props) =>
      `color: ${props.theme.hoverFontColor};
       cursor: pointer;
       border-bottom-color: ${props.theme.hoverUnderlineColor};`}
  }
  &:active {
    ${(props) => `color: ${props.theme.activeFontColor} !important;
                  border-bottom-color: ${props.theme.activeUnderlineColor} !important;`}
  }
`;

const LinkIconContainer = styled.div`
  display: flex;
  font-size: ${(props) => props.theme.iconSize};
  svg {
    width: ${(props) => props.theme.iconSize};
    height: ${(props) => props.theme.iconSize};
  }
`;

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
      <ThemeProvider theme={colorsTheme?.link}>
        <StyledLink
          as={onClick && !href ? "button" : "a"}
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
          <LinkContainer iconPosition={iconPosition} inheritColor={inheritColor}>
            {children}
            {icon && <LinkIconContainer>{typeof icon === "string" ? <DxcIcon icon={icon} /> : icon}</LinkIconContainer>}
          </LinkContainer>
        </StyledLink>
      </ThemeProvider>
    );
  }
);

DxcLink.displayName = "DxcLink";

export default DxcLink;
