import { memo, useCallback, useMemo, useState } from "react";
import AvatarPropsType from "./types";
import { getBorderWidth, getFontSize, getInitials, getModeColor } from "./utils";
import DxcTypography from "../typography/Typography";
import DxcImage from "../image/Image";
import DxcActionIcon from "../action-icon/ActionIcon";
import DxcFlex from "../flex/Flex";
import styled from "@emotion/styled";
import { css } from "@emotion/react";

const ContentWrapper = styled.div<{ hasAction: boolean }>`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: inherit;

  ${({ hasAction }) =>
    hasAction &&
    css`
      &:hover > div:first-of-type,
      &:active > div:first-of-type {
        display: block;
      }
    `}
`;

const Overlay = styled.div<{ disabled: AvatarPropsType["disabled"] }>`
  display: none;
  position: absolute;
  inset: 0;
  height: 100%;
  width: 100%;
  border-radius: inherit;
  background-color: var(--color-alpha-400-a);
  pointer-events: none;

  ${({ disabled }) =>
    disabled &&
    css`
      display: block;
      background-color: rgba(255, 255, 255, 0.5);
    `}
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

const DxcAvatar = memo(
  ({
    color = "neutral",
    disabled = false,
    icon = "person",
    imageSrc,
    label,
    linkHref,
    onClick,
    primaryText,
    secondaryText,
    shape = "circle",
    size = "medium",
    status,
    tabIndex = 0,
    title,
  }: AvatarPropsType) => {
    const [error, setError] = useState<boolean>(false);
    const initials = useMemo(() => getInitials(label), [label]);
    const handleError = useCallback(() => setError(true), []);
    const hasAction = !disabled && (!!onClick || !!linkHref);

    const content = (
      <ContentWrapper hasAction={hasAction}>
        {(!!onClick || !!linkHref || disabled) && <Overlay disabled={disabled} aria-hidden="true" />}

        {imageSrc && !error ? (
          <DxcImage
            src={imageSrc}
            alt={label || title || "Avatar"}
            onError={handleError}
            width="100%"
            height="100%"
            objectFit="cover"
            objectPosition="center"
          />
        ) : (
          <DxcTypography
            as="span"
            fontFamily="var(--typography-font-family)"
            fontSize={getFontSize(size)}
            fontWeight="var(--typography-label-semibold)"
            fontStyle="normal"
            lineHeight="normal"
            color="inherit"
          >
            {initials}
          </DxcTypography>
        )}

        {status && <StatusContainer role="status" status={status} size={size} />}
      </ContentWrapper>
    );

    const LabelWrapper = ({ condition, children }: { condition: boolean; children: React.ReactNode }) =>
      condition ? (
        <DxcFlex gap="var(--spacing-gap-s)" alignItems="center">
          {children}
          <DxcFlex direction="column" justifyContent="center" alignItems="flex-start" gap="var(--spacing-gap-none)">
            {primaryText && (
              <DxcTypography
                as="h3"
                color="var(--color-fg-neutral-dark)"
                fontSize="var(--typography-label-l)"
                fontFamily="var(--typography-font-family)"
                fontStyle="normal"
                fontWeight="var(--typography-label-regular)"
                lineHeight="normal"
              >
                {primaryText}
              </DxcTypography>
            )}
            {secondaryText && (
              <DxcTypography
                as="p"
                color="var(--color-fg-neutral-stronger)"
                fontSize="var(--typography-label-s)"
                fontFamily="var(--typography-font-family)"
                fontStyle="normal"
                fontWeight="var(--typography-label-regular)"
                lineHeight="normal"
              >
                {secondaryText}
              </DxcTypography>
            )}
          </DxcFlex>
        </DxcFlex>
      ) : (
        <>{children}</>
      );

    return (
      <LabelWrapper condition={!!(primaryText || secondaryText)}>
        <DxcActionIcon
          ariaLabel={label}
          content={(imageSrc && !error) || initials ? content : undefined}
          color={
            ["primary", "secondary", "tertiary", "success", "info", "neutral", "warning", "error"].includes(color)
              ? color
              : "neutral"
          }
          disabled={disabled}
          icon={icon}
          linkHref={linkHref}
          onClick={onClick}
          shape={shape}
          size={size}
          tabIndex={tabIndex}
          title={title}
        />
      </LabelWrapper>
    );
  }
);

export default DxcAvatar;
