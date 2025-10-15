import { memo } from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import GorgoritoPropTypes from "./types";
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

const GorgoritorContainer = styled.div<
  {
    hasAction?: boolean;
    size: GorgoritoPropTypes["size"];
    disabled?: GorgoritoPropTypes["disabled"];
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

const GorgoritorWrapper = styled.div<{
  shape: GorgoritoPropTypes["shape"];
  color: GorgoritoPropTypes["color"];
  size: GorgoritoPropTypes["size"];
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

const GorgoritorIcon = styled.div<{ size: GorgoritoPropTypes["size"] }>`
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 1;
  font-size: ${({ size }) => getIconSize(size)};
`;

const StatusContainer = styled.div<{
  status: GorgoritoPropTypes["status"];
  size: GorgoritoPropTypes["size"];
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

const DxcGorgorito = memo(
  ({
    ariaLabel,
    content,
    color = "neutral",
    disabled = false,
    icon = "person",
    linkHref,
    onClick,
    shape = "circle",
    size = "medium",
    status,
    tabIndex = 0,
    title,
  }: GorgoritoPropTypes) => {
    return (
      <TooltipWrapper condition={!!title} label={title}>
        <GorgoritorContainer
          size={size}
          onClick={!disabled ? onClick : undefined}
          hasAction={!!onClick || !!linkHref}
          tabIndex={!disabled && (onClick || linkHref) ? tabIndex : undefined}
          role={onClick ? "button" : undefined}
          as={linkHref ? "a" : undefined}
          href={!disabled ? linkHref : undefined}
          aria-label={(onClick || linkHref) && (ariaLabel || title || "Gorgorito")}
          disabled={disabled}
        >
          <GorgoritorWrapper shape={shape} color={color} size={size}>
            {!!onClick || (!!linkHref && <Overlay aria-hidden="true" />)}
            {content ? (
              content
            ) : (
              <GorgoritorIcon size={size} color={color}>
                {icon && (typeof icon === "string" ? <DxcIcon icon={icon} /> : icon)}
              </GorgoritorIcon>
            )}
          </GorgoritorWrapper>
          {status && <StatusContainer role="status" size={size} status={status} />}
        </GorgoritorContainer>
      </TooltipWrapper>
    );
  }
);

export default DxcGorgorito;
