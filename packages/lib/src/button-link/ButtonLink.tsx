import styled from "@emotion/styled";
import DxcIcon from "../icon/Icon";
import ButtonLinkProps from "./types";
import type { ButtonMode, ButtonSize } from "../button/types";
import { getHeight, widths } from "../button/utils";
import { getButtonLinkStyles } from "./utils";
import { Tooltip } from "../tooltip/Tooltip";

const ButtonLink = styled.a<{
  iconPosition: ButtonLinkProps["iconPosition"];
  disabled: ButtonLinkProps["disabled"];
  size: ButtonSize;
  $mode: ButtonMode;
  iconOnly: boolean;
}>`
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-direction: ${({ iconPosition }) => (iconPosition === "after" ? "row" : "row-reverse")};
  gap: ${({ size }) =>
    size.height === "medium" || size.height === "small" ? "var(--spacing-gap-xs)" : "var(--spacing-gap-s)"};
  height: ${({ size }) => getHeight(size.height)};
  width: ${(props) => (props.size.width ? widths[props.size?.width] : "fit-content")};

  ${(props) => getButtonLinkStyles(props.disabled, props.$mode, props.size)};
  ${({ size, iconOnly }) => {
    switch (size.height) {
      case "small":
        return `padding: var(--spacing-padding-none) var(${iconOnly ? "--spacing-padding-xxs" : "--spacing-padding-xs"});`;
      case "medium":
        return "padding: var(--spacing-padding-none) var(--spacing-padding-xs)";
      case "large":
        return `padding: var(--spacing-padding-none) var(${iconOnly ? "--spacing-padding-xs" : "--spacing-padding-m"});`;
      default:
        return `padding: var(--spacing-padding-none) var(${iconOnly ? "--spacing-padding-xs" : "--spacing-padding-m"});`;
    }
  }};
`;

const DxcButtonLink = ({
  disabled,
  href,
  icon,
  iconPosition = "before",
  label,
  mode = "primary",
  newWindow,
  onClick,
  size = { height: "large", width: "fitContent" },
  tabIndex = 0,
  title,
  ref,
  ...otherProps
}: ButtonLinkProps) => (
  <Tooltip label={!disabled ? title : undefined}>
    <ButtonLink
      role={onClick ? "button" : "link"}
      tabIndex={!disabled ? tabIndex : -1}
      onClick={!disabled ? onClick : undefined}
      href={!disabled && href ? href : undefined}
      target={href ? (newWindow ? "_blank" : "_self") : undefined}
      aria-disabled={disabled}
      aria-label={label || title}
      disabled={disabled}
      $mode={mode}
      size={size}
      iconPosition={iconPosition}
      iconOnly={!label && !!icon}
      ref={ref}
      {...otherProps}
    >
      {label}
      {icon && <span>{typeof icon === "string" ? <DxcIcon icon={icon} /> : icon}</span>}
    </ButtonLink>
  </Tooltip>
);

DxcButtonLink.displayName = "DxcButtonLink";

export default DxcButtonLink;
