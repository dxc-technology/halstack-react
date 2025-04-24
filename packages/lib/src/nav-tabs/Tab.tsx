import { useEffect, forwardRef, Ref, useContext, useRef, useImperativeHandle, KeyboardEvent } from "react";
import styled from "styled-components";
import DxcBadge from "../badge/Badge";
import DxcFlex from "../flex/Flex";
import NavTabsPropsType, { TabProps } from "./types";
import NavTabsContext from "./NavTabsContext";
import DxcIcon from "../icon/Icon";
import DxcInset from "../inset/Inset";

const TabContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;

const TabLink = styled.a<{
  disabled: TabProps["disabled"];
  iconPosition: NavTabsPropsType["iconPosition"];
}>`
  box-sizing: border-box;
  display: flex;
  flex-direction: ${({ iconPosition }) => (iconPosition === "top" ? "column" : "row")};
  justify-content: center;
  align-items: center;
  gap: var(--spacing-gap-xs);
  height: ${({ iconPosition }) => (iconPosition === "top" ? "78px" : "100%")};
  min-width: 176px;
  min-height: 48px;
  padding: var(--spacing-padding-none) var(--spacing-padding-xs);
  border-radius: var(--border-radius-s);
  background-color: var(--color-bg-neutral-lightest);
  text-decoration: none;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};

  ${(props) =>
    !props.disabled &&
    `
      :hover {
        background-color: var(--color-bg-primary-lighter);
      }
      :focus {
        outline: var(--border-width-m) var(--border-style-default) var(--border-color-secondary-medium);
        outline-offset: calc(var(--border-width-m) * -1);
      }
      :active {
        background-color: var(--color-bg-primary-lighter);
      }
  `}
`;

const Label = styled.span<{
  disabled: TabProps["disabled"];
}>`
  display: inline;
  color: ${({ disabled }) => (disabled ? "var(--color-fg-neutral-medium)" : "var(--color-fg-neutral-stronger)")};
  font-family: var(--typography-font-family);
  font-size: var(--typography-label-l);
  font-weight: var(--typography-label-semibold);
  text-align: center;
  text-decoration: none;
  text-overflow: unset;
  white-space: normal;
`;

const IconContainer = styled.div<{
  disabled: TabProps["disabled"];
}>`
  display: flex;
  color: ${({ disabled }) => (disabled ? "var(--color-fg-neutral-medium)" : "var(--color-fg-neutral-stronger)")};
  font-size: var(--height-s);
  svg {
    height: var(--height-s);
    width: 24px;
  }
`;

const Underline = styled.span<{ active: TabProps["active"] }>`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: var(--border-width-m);
  background-color: ${({ active }) =>
    active ? "var(--border-color-primary-stronger)" : "var(--border-color-neutral-medium)"};
`;

const Tab = forwardRef(
  (
    { href, active = false, icon, disabled = false, notificationNumber = false, children, ...otherProps }: TabProps,
    ref: Ref<HTMLAnchorElement>
  ) => {
    const { iconPosition, tabIndex, focusedLabel } = useContext(NavTabsContext) ?? {};
    const tabRef = useRef<HTMLAnchorElement>();
    const innerRef = useRef<HTMLAnchorElement | null>(null);
    useImperativeHandle(ref, () => innerRef.current!, []);

    useEffect(() => {
      if (focusedLabel === children.toString()) {
        tabRef?.current?.focus();
      }
    }, [children, focusedLabel]);

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
      <TabContainer>
        <DxcInset space="var(--spacing-padding-xs)">
          <TabLink
            href={!disabled ? href : undefined}
            disabled={disabled}
            iconPosition={iconPosition}
            ref={(anchorRef: HTMLAnchorElement) => {
              tabRef.current = anchorRef;
              if (ref) {
                if (typeof ref === "function") ref(anchorRef);
                else innerRef.current = anchorRef;
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
              <IconContainer disabled={disabled}>
                {typeof icon === "string" ? <DxcIcon icon={icon} /> : icon}
              </IconContainer>
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
          </TabLink>
        </DxcInset>
        <Underline active={active} />
      </TabContainer>
    );
  }
);

export default Tab;
