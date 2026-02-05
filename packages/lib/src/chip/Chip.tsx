import styled from "@emotion/styled";
import { spaces } from "../common/variables";
import DxcIcon from "../icon/Icon";
import ChipPropsType, { ChipAvatarType } from "./types";
import DxcActionIcon from "../action-icon/ActionIcon";
import DxcAvatar from "../avatar/Avatar";
import { isValidElement, useEffect, useRef, useState } from "react";
import { Tooltip } from "../tooltip/Tooltip";
import { SVG } from "../common/utils";

const Chip = styled.div<{
  margin: ChipPropsType["margin"];
  size: ChipPropsType["size"];
}>`
  height: ${({ size }) =>
    size === "small" ? "var(--height-s)" : size === "large" ? "var(--height-xl)" : "var(--height-m)"};
  min-width: ${({ size }) => (size === "small" ? "60px" : "80px")};
  max-width: 172px;
  box-sizing: border-box;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: var(--color-bg-primary-lightest);
  border-radius: var(--border-radius-xl);
  padding: ${({ size }) =>
    size === "large" ? "var(--spacing-padding-xs)" : "var(--spacing-padding-xxs) var(--spacing-padding-xs)"};
  margin: ${(props) => (props.margin && typeof props.margin !== "object" ? spaces[props.margin] : "0px")};
  margin-top: ${(props) =>
    props.margin && typeof props.margin === "object" && props.margin.top ? spaces[props.margin.top] : ""};
  margin-right: ${(props) =>
    props.margin && typeof props.margin === "object" && props.margin.right ? spaces[props.margin.right] : ""};
  margin-bottom: ${(props) =>
    props.margin && typeof props.margin === "object" && props.margin.bottom ? spaces[props.margin.bottom] : ""};
  margin-left: ${(props) =>
    props.margin && typeof props.margin === "object" && props.margin.left ? spaces[props.margin.left] : ""};
`;

const LeftContainer = styled.div`
  display: flex;
  align-items: center;
  gap: var(--spacing-gap-xxs);
`;

const LabelContainer = styled.span<{ disabled: ChipPropsType["disabled"] }>`
  font-size: var(--typography-label-s);
  font-family: var(--typography-font-family);
  font-weight: var(--typography-label-regular);
  color: ${({ disabled }) => (disabled ? "var(--color-fg-neutral-lightest)" : "var(--color-fg-neutral-dark)")};
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;

const IconContainer = styled.div<{
  disabled: ChipPropsType["disabled"];
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ disabled }) => (disabled ? "var(--color-fg-neutral-medium)" : "var(--color-fg-neutral-dark)")};
  font-size: var(--height-xxs);
  svg {
    height: var(--height-xxs);
    width: var(--height-xxs);
  }
`;

const isAvatarType = (value: string | SVG | ChipAvatarType): value is ChipAvatarType => {
  return typeof value === "object" && value !== null && "color" in value;
};

const checkEllipsis = (element: HTMLElement | null): boolean => {
  if (!element) return false;
  return element.scrollWidth > element.clientWidth;
};

const DxcChip = ({ action, disabled = false, label, margin, prefix, size = "medium", tabIndex = 0 }: ChipPropsType) => {
  const labelRef = useRef<HTMLSpanElement>(null);
  const [isTruncated, setIsTruncated] = useState(true);

  useEffect(() => {
    const handleEllipsisCheck = () => {
      setIsTruncated(checkEllipsis(labelRef.current));
    };

    handleEllipsisCheck();
    window.addEventListener("resize", handleEllipsisCheck);
    return () => window.removeEventListener("resize", handleEllipsisCheck);
  }, []);

  return (
    <Chip margin={margin} size={size}>
      <LeftContainer>
        {prefix &&
          (typeof prefix === "string" ? (
            <IconContainer disabled={disabled}>
              <DxcIcon icon={prefix} />
            </IconContainer>
          ) : isAvatarType(prefix) && size !== "small" ? (
            <DxcAvatar
              color={prefix.color}
              label={prefix.profileName}
              icon={prefix.icon}
              imageSrc={prefix.imageSrc}
              size="xsmall"
              disabled={disabled}
            />
          ) : (
            isValidElement(prefix) && <IconContainer disabled={disabled}>{prefix}</IconContainer>
          ))}

        {label && (
          <Tooltip label={isTruncated ? label : undefined}>
            <LabelContainer disabled={disabled} ref={labelRef}>
              {label}
            </LabelContainer>
          </Tooltip>
        )}
      </LeftContainer>

      {action && (
        <DxcActionIcon
          size="xsmall"
          disabled={disabled}
          icon={action.icon}
          onClick={action.onClick}
          tabIndex={tabIndex}
          title={!disabled ? action.title : undefined}
        />
      )}
    </Chip>
  );
};

export default DxcChip;
