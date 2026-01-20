import styled from "@emotion/styled";
import { spaces } from "../common/variables";
import DxcIcon from "../icon/Icon";
import ChipPropsType, { ChipAvatarType } from "./types";
import DxcActionIcon from "../action-icon/ActionIcon";
import DxcAvatar from "../avatar/Avatar";
import { isValidElement, useRef, useMemo, useLayoutEffect, useState } from "react";
import { Tooltip } from "../tooltip/Tooltip";
import useWidth from "../utils/useWidth";

const Chip = styled.div<{
  margin: ChipPropsType["margin"];
  size: ChipPropsType["size"];
  disabled: ChipPropsType["disabled"];
}>`
  height: ${({ size }) =>
    size === "small" ? "var(--height-s)" : size === "large" ? "var(--height-xl)" : "var(--height-m)"};
  min-width: ${({ size }) => (size === "small" ? "60px" : "80px")};
  max-width: 172px;
  box-sizing: border-box;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-gap-xs);
  background-color: var(--color-bg-primary-lightest);
  border-radius: var(--border-radius-xl);
  padding: ${({ size }) => (size === "small" ? "var(--spacing-padding-xxs)" : "var(--spacing-padding-xs)")};
  margin: ${(props) => (props.margin && typeof props.margin !== "object" ? spaces[props.margin] : "0px")};
  margin-top: ${(props) =>
    props.margin && typeof props.margin === "object" && props.margin.top ? spaces[props.margin.top] : ""};
  margin-right: ${(props) =>
    props.margin && typeof props.margin === "object" && props.margin.right ? spaces[props.margin.right] : ""};
  margin-bottom: ${(props) =>
    props.margin && typeof props.margin === "object" && props.margin.bottom ? spaces[props.margin.bottom] : ""};
  margin-left: ${(props) =>
    props.margin && typeof props.margin === "object" && props.margin.left ? spaces[props.margin.left] : ""};
  cursor: ${({ disabled }) => disabled && "not-allowed"};
`;

const LabelContainer = styled.span<{ disabled: ChipPropsType["disabled"] }>`
  font-size: var(--typography-label-s);
  font-family: var(--typography-font-family);
  font-weight: var(--typography-label-regular);
  color: ${({ disabled }) => (disabled ? "var(--color-fg-neutral-lightest)" : "var(--color-fg-neutral-dark)")};
  text-overflow: ellipsis;
  white-space: nowrap;
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

const DxcChip = ({ action, disabled = false, label, margin, prefix, size = "medium", tabIndex = 0 }: ChipPropsType) => {
  const isAvatarPrefix = (prefix: ChipPropsType["prefix"]): prefix is ChipAvatarType =>
    typeof prefix === "object" && prefix !== null && "color" in prefix;

  const chipRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);
  const chipWidth = useWidth(chipRef);
  const [textWidth, setTextWidth] = useState(0);

  // Measure the actual text width without ellipsis constraints
  useLayoutEffect(() => {
    if (label && labelRef.current) {
      const measureElement = document.createElement("span");
      measureElement.style.position = "absolute";
      measureElement.style.visibility = "hidden";
      measureElement.style.whiteSpace = "nowrap";
      measureElement.style.fontSize = "var(--typography-label-s)";
      measureElement.style.fontFamily = "var(--typography-font-family)";
      measureElement.style.fontWeight = "var(--typography-label-regular)";
      measureElement.textContent = label;

      document.body.appendChild(measureElement);
      setTextWidth(measureElement.getBoundingClientRect().width);
      document.body.removeChild(measureElement);
    }
  }, [label]);

  const shouldShowTooltip = useMemo(() => {
    if (!chipWidth || !textWidth || !label) return false;

    const chipPadding = size === "small" ? 8 : 12;
    const gap = 4;

    let usedSpace = chipPadding;

    if (prefix) {
      usedSpace += 24 + gap;
    }

    if (action) {
      usedSpace += 24 + gap;
    }

    const availableSpace = chipWidth - usedSpace;
    return textWidth > availableSpace;
  }, [chipWidth, textWidth, label, prefix, action, size]);

  return (
    <Chip disabled={disabled} margin={margin} size={size} ref={chipRef}>
      {prefix &&
        (isAvatarPrefix(prefix) && size !== "small" ? (
          <DxcAvatar
            color={prefix.color}
            label={prefix.profileName}
            icon={prefix.icon}
            imageSrc={prefix.imageSrc}
            size="xsmall"
            disabled={disabled}
          />
        ) : typeof prefix === "string" ? (
          <IconContainer disabled={disabled}>
            <DxcIcon icon={prefix} />
          </IconContainer>
        ) : (
          isValidElement(prefix) && <IconContainer disabled={disabled}>{prefix}</IconContainer>
        ))}

      {label && (
        <Tooltip label={shouldShowTooltip ? label : undefined}>
          <LabelContainer disabled={disabled} ref={labelRef}>
            {label}
          </LabelContainer>
        </Tooltip>
      )}

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
