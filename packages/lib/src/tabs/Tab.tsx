import { forwardRef, KeyboardEvent, MutableRefObject, Ref, useContext, useEffect, useRef } from "react";
import styled from "@emotion/styled";
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
    outline: var(--border-width-m) var(--border-style-default) var(--border-color-secondary-medium);
    outline-offset: -2px;
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
  border: var(--border-width-none);
  height: ${({ iconPosition }) => (iconPosition === "top" ? "71px" : "47px")};
  max-width: 360px;
  min-width: max-content;
  padding: ${({ iconPosition }) => (iconPosition === "top" ? "var(--spacing-padding-xs)" : "var(--spacing-gap-s)")}
    var(--spacing-padding-m);
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
  bottom: -1px;
  left: 0;
  width: 100%;
  height: ${({ active }) => (active ? "var(--border-width-m)" : "var(--border-width-s)")};
  background-color: ${({ active }) =>
    active ? "var(--border-color-primary-stronger)" : "var(--border-color-neutral-medium)"};
`;

const DxcTab = forwardRef(
  (
    { active, disabled, icon, label, notificationNumber, onClick, onHover, title, tabId = label }: TabProps,
    ref: Ref<HTMLButtonElement>
  ) => {
    const {
      activeTabId,
      focusedTabId,
      iconPosition,
      isControlled,
      setActiveTabId,
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
      if (focusedTabId === tabId) tabRef?.current?.focus();
    }, [focusedTabId, tabId]);

    useEffect(() => {
      if (active) setActiveTabId?.(tabId ?? "");
    }, [active, tabId, setActiveTabId]);

    return (
      <Tooltip label={title}>
        <Tab
          aria-selected={activeTabId === tabId}
          disabled={disabled}
          hasLabelAndIcon={Boolean(icon && label)}
          iconPosition={iconPosition}
          onClick={() => {
            if (!isControlled) {
              setActiveTabId?.(tabId ?? "");
            }
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
          tabIndex={activeTabId === label && !disabled ? tabIndex : -1}
          type="button"
          aria-label={label ?? tabId ?? "tab"}
        >
          <LabelIconContainer iconPosition={iconPosition}>
            {icon && <IconContainer>{typeof icon === "string" ? <DxcIcon icon={icon} /> : icon}</IconContainer>}
            {label && <Label>{label}</Label>}
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
          <Underline active={activeTabId === tabId} />
        </Tab>
      </Tooltip>
    );
  }
);

DxcTab.displayName = "DxcTab";

export default DxcTab;
