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
  border-radius: var(--spacing-gap-xs);
  width: fit-content;
  font-family: var(--typography-font-family);
  font-size: var(--typography-link-m);
  font-weight: var(--typography-link-regular);
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
    color: ${(props) => (!props.inheritColor && !props.disabled ? "var(--color-fg-primary-strong)" : "")};
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
  ) => (
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
  )
);

DxcLink.displayName = "DxcLink";

export default DxcLink;
