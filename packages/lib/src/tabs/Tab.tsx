import { forwardRef, KeyboardEvent, MutableRefObject, Ref, useContext, useEffect, useRef } from "react";
import styled from "styled-components";
import DxcBadge from "../badge/Badge";
import DxcIcon from "../icon/Icon";
import { Tooltip } from "../tooltip/Tooltip";
import TabsContext from "./TabsContext";
import { TabProps, TabsContextProps } from "./types";

const TabContainer = styled.div<{
  iconPosition: TabsContextProps["iconPosition"];
}>`
  display: grid;
  grid-template-rows: 1fr auto;
  ${({ iconPosition }) => (iconPosition === "top" ? "height: 72px;" : "height: var(--height-xxl);")}
`;

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
    outline: var(--border-width-m) var(--border-style-default) var(--border-color-secondary-medium);
    outline-offset: -2px;
  }
  &:disabled {
    color: var(--color-fg-neutral-medium);
    cursor: not-allowed;
  }
`;

const Tab = styled.button<{
  iconPosition: TabsContextProps["iconPosition"];
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-gap-m);
  border: var(--border-width-none);
  min-width: max-content;
  max-width: 360px;
  overflow: hidden;
  padding: ${({ iconPosition }) => (iconPosition === "top" ? "var(--spacing-padding-xs)" : "var(--spacing-gap-s)")}
    var(--spacing-padding-l);
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
        <TabContainer iconPosition={iconPosition}>
          <Tab
            aria-selected={activeLabel === label}
            disabled={disabled}
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
          </Tab>
          <Underline active={activeLabel === label} />
        </TabContainer>
      </Tooltip>
    );
  }
);

export default DxcTab;
