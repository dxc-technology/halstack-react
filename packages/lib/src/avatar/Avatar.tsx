import { useState } from "react";
import AvatarPropsType from "./types";
import styled from "@emotion/styled";
import DxcImage from "../image/Image";
import DxcIcon from "../icon/Icon";
import { TooltipWrapper } from "../tooltip/Tooltip";
import {
  getBackgroundColor,
  getBorderRadius,
  getBorderWidth,
  getColor,
  getFontSize,
  getIconSize,
  getInitials,
  getModeColor,
  getOutlineWidth,
  getSize,
} from "./utils";

const AvatarContainer = styled.div<{
  hasAction?: boolean;
  size: AvatarPropsType["size"];
  href?: AvatarPropsType["linkHref"];
  disabled?: AvatarPropsType["disabled"];
}>`
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
    `
    cursor: pointer;
    &:hover > div:first-child > div:first-child {
      display: block;
    }
    &:focus > div:first-child {
      outline-style: solid;
      outline-width: ${getOutlineWidth(size)};
      outline-color: var(--border-color-secondary-medium);
    }
    &:active > div:first-child {
      outline-style: solid;
      outline-width: ${getOutlineWidth(size)};
      outline-color: var(--border-color-secondary-medium);
    }
    &:active > div:first-child > div:first-child {
      display: block;
    }
    `}
  ${({ disabled }) =>
    disabled &&
    `
      cursor: not-allowed;
      & > div:first-child > div:first-child {
        display: block;
        background-color: rgba(255, 255, 255, 0.50);
      }
    `}
`;

const AvatarWrapper = styled.div<{
  shape: AvatarPropsType["shape"];
  color: AvatarPropsType["color"];
  size: AvatarPropsType["size"];
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
  height: 100%;
  width: 100%;
  background-color: var(--color-alpha-400-a);
`;

const Initials = styled.div<{ size: AvatarPropsType["size"] }>`
  color: inherit;
  font-family: var(--typography-font-family);
  font-style: normal;
  font-weight: var(--typography-label-semibold);
  font-size: ${({ size }) => getFontSize(size)};
  line-height: normal;
`;

const AvatarIcon = styled.div<{ color: AvatarPropsType["color"]; size: AvatarPropsType["size"] }>`
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 1;
  font-size: ${({ size }) => getIconSize(size)};
`;

const StatusContainer = styled.div<{
  status: AvatarPropsType["status"];
  size: AvatarPropsType["size"];
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

export default function DxcAvatar({
  color = "grey",
  disabled = false,
  icon = "person",
  imageSrc,
  label,
  linkHref,
  onClick,
  shape = "circle",
  size = "medium",
  status,
  tabIndex = 0,
  title,
}: AvatarPropsType) {
  const [error, setError] = useState<boolean>(false);
  const initials = getInitials(label);

  return (
    <TooltipWrapper condition={!!title} label={title}>
      <AvatarContainer
        size={size}
        onClick={!disabled ? onClick : undefined}
        hasAction={!!onClick || !!linkHref}
        tabIndex={!disabled && (onClick || linkHref) ? tabIndex : undefined}
        role={onClick ? "button" : undefined}
        as={linkHref ? "a" : undefined}
        href={!disabled && linkHref ? linkHref : undefined}
        aria-label={(onClick || linkHref) && (label || title || "Avatar")}
        disabled={disabled}
      >
        <AvatarWrapper shape={shape} color={color} size={size}>
          <Overlay aria-hidden="true" />
          {imageSrc && !error ? (
            <DxcImage
              src={imageSrc}
              alt={label || title || "Avatar"}
              onError={() => setError(true)}
              width="100%"
              height="100%"
              objectFit="cover"
              objectPosition="center"
            />
          ) : initials.length > 0 ? (
            <Initials size={size}>{initials}</Initials>
          ) : (
            <AvatarIcon size={size} color={color}>
              {icon && (typeof icon === "string" ? <DxcIcon icon={icon} /> : icon)}
            </AvatarIcon>
          )}
        </AvatarWrapper>
        {status && <StatusContainer role="status" size={size} status={status} />}
      </AvatarContainer>
    </TooltipWrapper>
  );
}
