import { forwardRef } from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { ActionIconPropTypes, RefType } from "./types";
import { getBackgroundColor, getBorderRadius, getColor, getIconSize, getOutlineWidth, getSize } from "./utils";
import DxcIcon from "../icon/Icon";
import { Tooltip } from "../tooltip/Tooltip";

const ActionIconContainer = styled.div<
  {
    hasAction?: boolean;
    shape: ActionIconPropTypes["shape"];
    size: ActionIconPropTypes["size"];
    disabled?: ActionIconPropTypes["disabled"];
    color: ActionIconPropTypes["color"];
  } & React.AnchorHTMLAttributes<HTMLAnchorElement>
>`
  /* Reset button default styles when rendered as button */
  &[type="button"] {
    border: none;
    padding: 0;
    margin: 0;
    font: inherit;
    outline: none;
  }

  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${({ size }) => getSize(size)};
  aspect-ratio: 1 / 1;
  text-decoration: none;
  border-radius: ${({ shape, size }) => getBorderRadius(shape, size)};
  background-color: ${({ color }) => getBackgroundColor(color)};
  color: ${({ color }) => getColor(color)};

  ${({ hasAction, disabled, size }) =>
    !disabled &&
    hasAction &&
    css`
      cursor: pointer;

      &:focus:enabled,
      &:active:enabled {
        outline-style: solid;
        outline-width: ${getOutlineWidth(size)};
        outline-color: var(--border-color-secondary-medium);
        outline-offset: -2px;
      }
    `}

  ${({ disabled }) =>
    disabled &&
    css`
      cursor: not-allowed;
      & > div:first-child > div:first-child {
        color: var(--color-fg-neutral-medium);
      }
    `}
`;

const IconContainerWrapper = styled.div<{
  hasAction?: boolean;
  disabled: ActionIconPropTypes["disabled"];
}>`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: inherit;

  ${({ hasAction, disabled }) =>
    !disabled &&
    hasAction &&
    css`
      &:hover,
      &:active {
        background-color: var(--color-bg-alpha-light);
      }
    `}
`;

export const IconContainer = styled.div<{ size: ActionIconPropTypes["size"] }>`
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 1;
  font-size: ${({ size }) => getIconSize(size)};
  height: ${({ size }) => getIconSize(size)};
  width: ${({ size }) => getIconSize(size)};
`;

const ForwardedActionIcon = forwardRef<RefType, ActionIconPropTypes>(
  (
    {
      ariaLabel,
      content,
      color = "transparent",
      disabled = false,
      icon,
      linkHref,
      onClick,
      shape = "square",
      size = "medium",
      tabIndex = 0,
      title,
    },
    ref
  ) => {
    return (
      <Tooltip label={title}>
        <ActionIconContainer
          size={size}
          onClick={!disabled ? onClick : undefined}
          hasAction={!!onClick || !!linkHref}
          tabIndex={!disabled && (onClick || linkHref) ? tabIndex : undefined}
          role={onClick ? "button" : undefined}
          as={linkHref ? "a" : onClick ? "button" : "div"}
          type={onClick && !linkHref ? "button" : undefined}
          href={!disabled ? linkHref : undefined}
          aria-label={(onClick || linkHref) && (ariaLabel || title || "Action Icon")}
          disabled={disabled}
          ref={ref}
          shape={shape}
          color={color}
        >
          {content ? (
            content
          ) : (
            <IconContainerWrapper disabled={disabled} hasAction={!!onClick || !!linkHref}>
              <IconContainer size={size} color={color}>
                {icon && (typeof icon === "string" ? <DxcIcon icon={icon} /> : icon)}
              </IconContainer>
            </IconContainerWrapper>
          )}
        </ActionIconContainer>
      </Tooltip>
    );
  }
);

ForwardedActionIcon.displayName = "ActionIcon";

export default ForwardedActionIcon;
