import { forwardRef, memo } from "react";
import styled, { ThemeProvider } from "styled-components";
import { spaces } from "../common/variables";
import DxcIcon from "../icon/Icon";
import useTheme from "../useTheme";
import { LinkProps } from "./types";

const LinkContent = memo(
  ({ iconPosition, icon, inheritColor, children }: LinkProps): JSX.Element => (
    <LinkContainer inheritColor>
      {iconPosition === "after" && children}
      {icon && (
        <LinkIconContainer iconPosition={iconPosition}>
          {typeof icon === "string" ? <DxcIcon icon={icon} /> : icon}
        </LinkIconContainer>
      )}
      {iconPosition === "before" && children}
    </LinkContainer>
  )
);

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
    ref: React.Ref<HTMLAnchorElement>
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
          <LinkContent iconPosition={iconPosition} icon={icon} children={children} inheritColor={inheritColor} />
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
  ${(props) => `padding-bottom: ${props.theme.underlineSpacing};`}
  cursor: pointer;
  font-size: ${(props) => props.theme.fontSize};
  font-weight: ${(props) => props.theme.fontWeight};
  font-style: ${(props) => props.theme.fontStyle};
  font-family: ${(props) => props.theme.fontFamily};
  text-decoration: none;
  width: fit-content;
  ${(props) => props.disabled && "cursor: default;"}
  color: ${(props) =>
    props.inheritColor ? "inherit" : !props.disabled ? props.theme.fontColor : props.theme.disabledFontColor};
  ${(props) => (props.disabled ? "pointer-events: none;" : "")}
  &:visited {
    color: ${(props) => (!props.inheritColor && !props.disabled ? props.theme.visitedFontColor : "")};
    & > span:hover {
      ${(props) => `color: ${props.theme.visitedFontColor};
                    border-bottom-color: ${props.theme.visitedUnderlineColor};`}
    }
  }
  &:focus {
    border-radius: 4px;
    outline: 2px solid ${(props) => props.theme.focusColor};
    outline-offset: 2px;
    ${(props) => props.disabled && "outline: none"}
  }
`;

const LinkIconContainer = styled.div<{ iconPosition: LinkProps["iconPosition"] }>`
  width: ${(props) => props.theme.iconSize};
  height: ${(props) => props.theme.iconSize};
  ${(props) => `${props.iconPosition === "before" ? "margin-right" : "margin-left"}: ${props.theme.iconSpacing}`};
  overflow: hidden;
  align-self: center;

  font-size: ${(props) => props.theme.iconSize};
  svg {
    height: 100%;
    width: 100%;
  }
`;

const LinkContainer = styled.span<{
  inheritColor: LinkProps["inheritColor"];
}>`
  display: inline-flex;
  margin: 0;
  padding: 0;
  ${(props) => `border-bottom: ${props.theme.underlineThickness} ${props.theme.underlineStyle};`}
  border-bottom-color: transparent;
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

export default DxcLink;
