import styled from "@emotion/styled";
import DxcIcon from "../icon/Icon";
import ChipPropsType, { ChipAvatarType } from "./types";
import DxcActionIcon from "../action-icon/ActionIcon";
import DxcAvatar from "../avatar/Avatar";
import { isValidElement, ReactNode, useState } from "react";
import { SVG } from "../common/utils";
import { getChipStyles } from "./utils";

const Chip = styled.div<{
  disabled: ChipPropsType["disabled"];
  mode: ChipPropsType["mode"];
  selected: ChipPropsType["selected"];
  isAvatar?: boolean;
  type?: string;
}>`
  max-width: min(100%, 320px);
  height: var(--height-m);
  box-sizing: border-box;
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-gap-xxs);
  padding: ${({ isAvatar }) =>
    isAvatar
      ? "var(--spacing-padding-none) var(--spacing-padding-xs) var(--spacing-padding-none) var(--spacing-padding-xxs)"
      : "var(--spacing-padding-none) var(--spacing-padding-xs)"};
  cursor: ${({ mode }) => (mode === "selectable" ? "pointer" : "default")};
  border-radius: var(--border-radius-xl);
  border-width: var(--border-width-s);
  border-style: var(--border-style-default);

  ${({ mode, selected }) => getChipStyles(mode, selected)}
`;

const ContentWrapper = styled.div<{ mode: ChipPropsType["mode"] }>`
  max-width: ${({ mode }) => (mode === "dismissible" ? "calc(100% - var(--spacing-gap-xxs) - 24px)" : "100%")};
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-gap-xs);
`;

const LabelContainer = styled.span`
  font-size: var(--typography-label-s);
  font-family: var(--typography-font-family);
  font-weight: var(--typography-label-regular);
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: var(--height-xxs);
  svg {
    height: var(--height-xxs);
  }
`;

const isAvatarType = (value: string | SVG | ChipAvatarType | undefined): value is ChipAvatarType => {
  return typeof value === "object" && value !== null && "color" in value;
};

const renderPrefix = (prefix: string | SVG | ChipAvatarType | undefined, disabled: boolean): ReactNode | undefined => {
  if (typeof prefix === "string") {
    return (
      <IconContainer>
        <DxcIcon icon={prefix} />
      </IconContainer>
    );
  }

  if (isAvatarType(prefix)) {
    return (
      <DxcAvatar
        color={prefix.color}
        label={prefix.profileName}
        icon={prefix.icon}
        imageSrc={prefix.imageSrc}
        size="xsmall"
        disabled={disabled}
      />
    );
  }

  return isValidElement(prefix) ? <IconContainer>{prefix}</IconContainer> : undefined;
};

const DxcChip = ({
  disabled = false,
  label,
  mode = "selectable",
  onClick,
  prefix,
  selected,
  tabIndex = 0,
}: ChipPropsType) => {
  const [innerSelected, setInnerSelected] = useState(false);

  if (mode === "selectable" && isAvatarType(prefix) && !label) {
    return null;
  }

  const handleSelectableClick = () => {
    if (selected == null) {
      setInnerSelected((prev) => !prev);
    }
    onClick?.();
  };

  const isSelected = selected ?? innerSelected;

  return (
    <Chip
      as={mode === "selectable" ? "button" : "div"}
      type={mode === "selectable" ? "button" : undefined}
      aria-label={mode === "selectable" ? label || "Chip" : label}
      aria-pressed={mode === "selectable" ? isSelected : undefined}
      disabled={disabled}
      isAvatar={isAvatarType(prefix)}
      onClick={mode === "selectable" && !disabled ? handleSelectableClick : undefined}
      selected={isSelected}
      tabIndex={mode === "selectable" && !disabled ? tabIndex : -1}
      mode={mode}
    >
      <ContentWrapper mode={mode}>
        {prefix && renderPrefix(prefix, disabled)}
        {label && <LabelContainer>{label}</LabelContainer>}
      </ContentWrapper>

      {mode === "dismissible" && (
        <DxcActionIcon
          size="xsmall"
          disabled={disabled}
          icon="clear"
          onClick={onClick}
          tabIndex={tabIndex}
          title={!disabled ? "Clear" : undefined}
        />
      )}
    </Chip>
  );
};

export default DxcChip;
