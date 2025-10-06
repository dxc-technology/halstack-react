import { forwardRef, Ref } from "react";
import styled from "@emotion/styled";
import { spaces } from "../common/variables";
import DxcIcon from "../icon/Icon";
import { LinkProps } from "./types";

const Link = styled.a<{
  disabled: LinkProps["disabled"];
  inheritColor: LinkProps["inheritColor"];
  margin: LinkProps["margin"];
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
  font-size: inherit;
  font-weight: var(--typography-link-regular);
  text-decoration: none;
  color: ${({ disabled, inheritColor }) =>
    inheritColor ? "inherit" : !disabled ? "var(--color-fg-primary-strong)" : "var(--color-fg-neutral-medium)"};
  ${({ disabled }) => (disabled ? "cursor: default;" : "cursor: pointer;")}
  ${({ disabled }) => (disabled ? "pointer-events: none;" : "")}  
  ${({ disabled, inheritColor }) =>
    !inheritColor && !disabled && "&:visited { color: var(--color-fg-primary-strongest); }"};
  &:focus {
    outline: var(--border-width-m) var(--border-style-default) var(--border-color-secondary-medium);
    ${({ disabled }) => disabled && "outline: none"}
  }
`;

const LinkContent = styled.span<{
  iconPosition: LinkProps["iconPosition"];
  inheritColor: LinkProps["inheritColor"];
}>`
  display: inline-flex;
  align-items: center;
  ${({ iconPosition }) => iconPosition === "before" && "flex-direction: row-reverse;"}
  gap: var(--spacing-gap-xs);
  padding: var(--spacing-padding-xxxs);

  &:hover {
    color: var(--color-fg-primary-stronger);
    cursor: pointer;
  }
  &:active {
    color: var(--color-fg-neutral-dark) !important;
  }
`;

const IconContainer = styled.div`
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
      children,
      disabled,
      href,
      icon,
      iconPosition = "before",
      inheritColor,
      margin,
      newWindow,
      onClick,
      tabIndex = 0,
      ...otherProps
    }: LinkProps,
    ref: Ref<HTMLAnchorElement>
  ) => (
    <Link
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
      <LinkContent iconPosition={iconPosition} inheritColor={inheritColor}>
        {children}
        {icon && <IconContainer>{typeof icon === "string" ? <DxcIcon icon={icon} /> : icon}</IconContainer>}
      </LinkContent>
    </Link>
  )
);

DxcLink.displayName = "DxcLink";

export default DxcLink;
