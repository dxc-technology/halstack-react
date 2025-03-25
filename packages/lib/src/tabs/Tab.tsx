import { forwardRef, KeyboardEvent, MutableRefObject, Ref, useContext, useEffect, useRef } from "react";
import styled from "styled-components";
import DxcBadge from "../badge/Badge";
import DxcIcon from "../icon/Icon";
import { Tooltip } from "../tooltip/Tooltip";
import TabsContext from "./TabsContext";
import { TabProps, TabsContextProps } from "./types";

export const sharedTabStyles = `
  background-color: var(--color-bg-neutral-lightest);
  color: var(--color-fg-neutral-stronger);
  cursor: pointer;

  &[aria-selected="true"]:enabled {
    color: var(--color-fg-primary-strong);
  }
  &:hover:enabled {
    background: var(--color-bg-primary-lighter);
  }
  &:active:enabled {
    background: var(--color-bg-primary-lighter);
  }
  &:focus:enabled {
    outline: var(--border-width-s) var(--border-style-default) var(--border-color-primary-stronger);
    outline-offset: -1px;
  }
  &:disabled {
    color: var(--color-fg-neutral-medium);
    cursor: not-allowed;
  }
`;

const Tab = styled.button<{
  hasLabelAndIcon: boolean;
  iconPosition: TabsContextProps["iconPosition"];
}>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-gap-m);
  border: 0;
  min-width: max-content;
  max-width: 360px;
  ${({ iconPosition }) =>
    iconPosition === "top"
      ? "padding: var(--spacing-padding-xs) var(--spacing-padding-m); height: 72px;"
      : "padding: var(--spacing-gap-s) var(--spacing-padding-m); height: var(--height-xxl);"}
  overflow: hidden;
  ${sharedTabStyles}
`;

const LabelIconContainer = styled.div<{
  iconPosition: TabsContextProps["iconPosition"];
}>`
  display: flex;
  flex-direction: ${({ iconPosition }) => (iconPosition === "top" ? "column" : "row")};
  align-items: center;
  gap: var(--spacing-gap-m);
`;

const Label = styled.span`
  font-family: var(--typography-font-family);
  font-size: var(--typography-label-l);
  font-weight: var(--typography-label-semibold);
`;

const IconContainer = styled.div`
  display: flex;
  font-size: var(--height-s);
  svg {
    height: var(--height-s);
    width: 24px;
  }
`;

const BadgeContainer = styled.div<{
  hasLabelAndIcon: boolean;
  iconPosition: TabsContextProps["iconPosition"];
}>`
  display: flex;
  align-items: ${({ hasLabelAndIcon, iconPosition }) =>
    hasLabelAndIcon && iconPosition === "top" ? "flex-start" : "center"};
  height: 100%;
`;

const Underline = styled.span<{ active: boolean }>`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: ${({ active }) => (active ? "var(--border-width-m)" : "var(--border-width-s)")};
  background-color: ${({ active }) =>
    active ? "var(--border-color-primary-stronger)" : "var(--border-color-neutral-medium)"};
`;

const DxcTab = forwardRef(
  (
    { active, disabled, icon, label, notificationNumber, onClick, onHover, title }: TabProps,
    ref: Ref<HTMLButtonElement>
  ) => {
    const {
      activeLabel,
      focusedLabel,
      iconPosition,
      isControlled,
      setActiveLabel,
      tabIndex = 0,
    } = useContext(TabsContext) ?? {};
    const tabRef = useRef<HTMLButtonElement | null>(null);

    const handleOnKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
      switch (event.key) {
        case " ":
        case "Enter":
          event.preventDefault();
          tabRef?.current?.click();
          break;
        default:
          break;
      }
    };

    useEffect(() => {
      if (focusedLabel === label) tabRef?.current?.focus();
    }, [focusedLabel, label]);

    useEffect(() => {
      if (active) setActiveLabel?.(label);
    }, [active, label, setActiveLabel]);

    return (
      <Tooltip label={title}>
        <Tab
          aria-selected={activeLabel === label}
          disabled={disabled}
          hasLabelAndIcon={Boolean(icon && label)}
          iconPosition={iconPosition}
          onClick={() => {
            if (!isControlled) setActiveLabel?.(label);
            onClick?.();
          }}
          onKeyDown={handleOnKeyDown}
          onMouseEnter={() => onHover?.()}
          ref={(anchorRef) => {
            tabRef.current = anchorRef;
            if (ref) {
              if (typeof ref === "function") ref(anchorRef);
              else {
                const currentRef = ref as MutableRefObject<HTMLButtonElement | null>;
                currentRef.current = anchorRef;
              }
            }
          }}
          role="tab"
          tabIndex={activeLabel === label && !disabled ? tabIndex : -1}
          type="button"
        >
          <LabelIconContainer iconPosition={iconPosition}>
            {icon && <IconContainer>{typeof icon === "string" ? <DxcIcon icon={icon} /> : icon}</IconContainer>}
            <Label>{label}</Label>
          </LabelIconContainer>
          {!disabled && notificationNumber && (
            <BadgeContainer hasLabelAndIcon={Boolean(icon && label)} iconPosition={iconPosition}>
              <DxcBadge
                label={typeof notificationNumber === "number" ? notificationNumber : undefined}
                mode="notification"
                size="small"
              />
            </BadgeContainer>
          )}
          <Underline active={activeLabel === label} />
        </Tab>
      </Tooltip>
    );
  }
);

export default DxcTab;
