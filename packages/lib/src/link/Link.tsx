import { forwardRef, Ref } from "react";
import styled from "styled-components";
import { spaces } from "../common/variables";
import DxcIcon from "../icon/Icon";
import { LinkProps } from "./types";

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
  font-family: var(--font-family-sans);
  font-size: var(--font-size-14);
  font-weight: var(--font-weight-regular);
  text-decoration: none;
  color: ${(props) =>
    props.inheritColor
      ? "inherit"
      : !props.disabled
        ? "var(--color-fg-secondary-strong)"
        : "var(--color-fg-neutral-medium)"};
  ${(props) => (props.disabled ? "cursor: default;" : "cursor: pointer;")}
  ${(props) => (props.disabled ? "pointer-events: none;" : "")}

  &:visited {
    color: ${(props) => (!props.inheritColor && !props.disabled ? "var(--color-fg-neutral-medium)" : "")};
    & > span:hover {
      ${(props) => `color: ${props.theme.visitedFontColor};`}
    }
  }
  &:focus {
    outline: var(--border-width-m) var(--border-style-default) var(--border-color-secondary-medium);
    outline-offset: var(--border-width-m);
    ${(props) => props.disabled && "outline: none"}
  }
`;

const LinkContainer = styled.span<{
  iconPosition: LinkProps["iconPosition"];
  inheritColor: LinkProps["inheritColor"];
}>`
  border-bottom: transparent;
  display: inline-flex;
  align-items: center;
  ${(props) => (props.iconPosition === "before" ? "flex-direction: row-reverse;" : "")}
  gap: var(--spacing-gap-xs);

  &:hover {
    color: var(--color-fg-secondary-stronger);
    cursor: pointer;
  }
  &:active {
    color: var(--color-fg-neutral-dark) !important;
  }
`;

const LinkIconContainer = styled.div`
  display: flex;
  font-size: var(--height-xxs);
  svg {
    width: 16px;
    height: var(--height-xxs);
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
    return (
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
    );
  }
);

export default DxcLink;
