import { forwardRef } from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { ActionIconPropTypes, RefType } from "./types";
import {
  getBackgroundColor,
  getBorderRadius,
  getBorderWidth,
  getColor,
  getIconSize,
  getModeColor,
  getOutlineWidth,
  getSize,
} from "./utils";
import DxcIcon from "../icon/Icon";
import { TooltipWrapper } from "../tooltip/Tooltip";

const ActionIconContainer = styled.div<
  {
    hasAction?: boolean;
    size: ActionIconPropTypes["size"];
    disabled?: ActionIconPropTypes["disabled"];
  } & React.AnchorHTMLAttributes<HTMLAnchorElement>
>`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${({ size }) => getSize(size)};
  aspect-ratio: 1 / 1;
  text-decoration: none;
  ${({ hasAction, disabled, size }) =>
    !disabled &&
    hasAction &&
    css`
      cursor: pointer;
      &:hover > div:first-child > div:first-child,
      &:active > div:first-child > div:first-child {
        display: block;
      }
      &:focus > div:first-child,
      &:active > div:first-child {
        outline-style: solid;
        outline-width: ${getOutlineWidth(size)};
        outline-color: var(--border-color-secondary-medium);
      }
      &:focus-visible {
        outline: none;
      }
    `}
  ${({ disabled }) =>
    disabled &&
    css`
      cursor: not-allowed;
      & > div:first-child > div:first-child {
        display: block;
        background-color: rgba(255, 255, 255, 0.5);
      }
    `}
`;

const ActionIconWrapper = styled.div<{
  shape: ActionIconPropTypes["shape"];
  color: ActionIconPropTypes["color"];
  size: ActionIconPropTypes["size"];
}>`
  position: relative;
  height: 100%;
  aspect-ratio: 1 / 1;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  background-color: ${({ color }) => getBackgroundColor(color)};
  color: ${({ color }) => getColor(color)};
  border-radius: ${({ shape, size }) => getBorderRadius(shape, size)};
`;

const Overlay = styled.div`
  display: none;
  position: absolute;
  inset: 0;
  height: 100%;
  width: 100%;
  background-color: var(--color-alpha-400-a);
`;

const ActionIconIcon = styled.div<{ size: ActionIconPropTypes["size"] }>`
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 1;
  font-size: ${({ size }) => getIconSize(size)};
`;

const StatusContainer = styled.div<{
  status: ActionIconPropTypes["status"];
  size: ActionIconPropTypes["size"];
}>`
  position: absolute;
  right: 0px;
  ${({ status }) => (status?.position === "top" ? "top: 0px;" : "bottom: 0px;")}
  width: 25%;
  height: 25%;
  border-width: ${({ size }) => getBorderWidth(size)};
  border-style: solid;
  border-color: var(--border-color-neutral-brighter);
  border-radius: 100%;
  background-color: ${({ status }) => getModeColor(status!.mode)};
`;

const ActionIcon = forwardRef<RefType, ActionIconPropTypes>(
  (
    {
      ariaLabel,
      content,
      color = "transparent",
      disabled = false,
      icon,
      linkHref,
      onClick,
      shape = "circle",
      size = "medium",
      status,
      tabIndex = 0,
      title,
    },
    ref
  ) => {
    return (
      <TooltipWrapper condition={!!title} label={title}>
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
          ref={linkHref ? undefined : (ref as React.Ref<HTMLDivElement>)}
        >
          <ActionIconWrapper shape={shape} color={color} size={size}>
            {(!!onClick || !!linkHref) && <Overlay aria-hidden="true" />}
            {content ? (
              content
            ) : (
              <ActionIconIcon size={size} color={color}>
                {icon && (typeof icon === "string" ? <DxcIcon icon={icon} /> : icon)}
              </ActionIconIcon>
            )}
          </ActionIconWrapper>
          {status && <StatusContainer role="status" size={size} status={status} />}
        </ActionIconContainer>
      </TooltipWrapper>
    );
  }
);

export default ActionIcon;
