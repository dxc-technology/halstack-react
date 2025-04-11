import { useEffect, forwardRef, Ref, useContext, useRef, useImperativeHandle, KeyboardEvent } from "react";
import styled from "styled-components";
import DxcBadge from "../badge/Badge";
import DxcFlex from "../flex/Flex";
import NavTabsPropsType, { TabProps } from "./types";
import NavTabsContext from "./NavTabsContext";
import DxcIcon from "../icon/Icon";

const TabContainer = styled.div<{ active: TabProps["active"] }>`
  align-items: stretch;
  border-bottom: var(--border-width-m) var(--border-style-default)
    ${(props) => (props.active ? "var(--border-color-primary-stronger)" : "transparent")};
  padding: var(--spacing-padding-xs);
`;

const Tab = styled.a<{
  disabled: TabProps["disabled"];
  hasIcon: boolean;
  iconPosition: NavTabsPropsType["iconPosition"];
}>`
  box-sizing: border-box;
  display: flex;
  flex-direction: ${(props) => (props.hasIcon && props.iconPosition === "top" ? "column" : "row")};
  justify-content: center;
  align-items: center;
  gap: var(--spacing-gap-xs);
  height: ${(props) => (props.hasIcon && props.iconPosition === "top" ? "78px" : "100%")};
  min-width: 176px;
  min-height: 48px;
  padding: var(--spacing-padding-none) var(--spacing-padding-xs);
  border-radius: var(--border-radius-s);
  background: var(--color-bg-neutral-lightest);
  text-decoration-color: transparent;
  text-decoration-line: none;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};

  ${(props) =>
    !props.disabled &&
    `
      :hover {
        background: var(--color-bg-primary-lighter);
      }
      :focus {
        outline: var(--border-width-m) var(--border-style-default) var(--border-color-secondary-medium);
        outline-offset: calc(var(--border-width-m) * -1);
      }
      :active {
        background: var(--color-bg-primary-lighter);
      }
  `}
`;

const Label = styled.span<{
  disabled: TabProps["disabled"];
}>`
  display: inline;
  color: ${(props) => (props.disabled ? "var(--color-fg-neutral-medium)" : "var(--color-fg-neutral-stronger)")};
  font-family: var(--typography-font-family);
  font-size: var(--typography-label-l);
  font-weight: var(--typography-label-semibold);
  text-align: center;
  text-decoration: none;
  text-overflow: unset;
  white-space: normal;
`;

const TabIconContainer = styled.div<{
  disabled: TabProps["disabled"];
}>`
  display: flex;
  font-size: var(--height-s);
  color: ${(props) => (props.disabled ? "var(--color-fg-neutral-medium)" : "var(--color-fg-neutral-stronger)")};
  svg {
    height: var(--height-s);
    width: 24px;
  }
`;

const DxcTab = forwardRef(
  (
    { href, active = false, icon, disabled = false, notificationNumber = false, children, ...otherProps }: TabProps,
    ref: Ref<HTMLAnchorElement>
  ): JSX.Element => {
    const tabRef = useRef<HTMLAnchorElement>();
    const { iconPosition, tabIndex, focusedLabel } = useContext(NavTabsContext) ?? {};
    const innerRef = useRef<HTMLAnchorElement | null>(null);
    useImperativeHandle(ref, () => innerRef.current!, []);

    useEffect(() => {
      if (focusedLabel === children.toString()) {
        tabRef?.current?.focus();
      }
    }, [focusedLabel]);

    const handleOnKeyDown = (event: KeyboardEvent<HTMLAnchorElement>) => {
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

    return (
      <TabContainer active={active}>
        <Tab
          href={!disabled ? href : undefined}
          disabled={disabled}
          iconPosition={iconPosition}
          hasIcon={icon != null}
          ref={(anchorRef: HTMLAnchorElement) => {
            tabRef.current = anchorRef;

            if (ref) {
              if (typeof ref === "function") {
                ref(anchorRef);
              } else {
                innerRef.current = anchorRef;
              }
            }
          }}
          onKeyDown={handleOnKeyDown}
          tabIndex={active ? tabIndex : -1}
          role="tab"
          aria-selected={active}
          aria-disabled={disabled}
          {...otherProps}
        >
          {icon && (
            <TabIconContainer disabled={disabled}>
              {typeof icon === "string" ? <DxcIcon icon={icon} /> : icon}
            </TabIconContainer>
          )}
          <DxcFlex alignItems="center" gap="var(--spacing-gap-s)">
            <Label disabled={disabled}>{children}</Label>
            {notificationNumber && !disabled && (
              <DxcBadge
                mode="notification"
                size="small"
                label={typeof notificationNumber === "number" ? notificationNumber : undefined}
              />
            )}
          </DxcFlex>
        </Tab>
      </TabContainer>
    );
  }
);

export default DxcTab;
