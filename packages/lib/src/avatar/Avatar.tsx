import { memo, useCallback, useMemo, useState } from "react";
import AvatarPropsType from "./types";
import { getFontSize, getInitials } from "./utils";
import DxcTypography from "../typography/Typography";
import DxcImage from "../image/Image";
import DxcActionIcon from "../action-icon/ActionIcon";
import DxcFlex from "../flex/Flex";

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

    const content = (
      <>
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
      </>
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
          status={status}
          tabIndex={tabIndex}
          title={title}
        />
      </LabelWrapper>
    );
  }
);

export default DxcAvatar;
