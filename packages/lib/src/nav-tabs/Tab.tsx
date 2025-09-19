import { useEffect, forwardRef, Ref, useContext, useRef, useImperativeHandle, KeyboardEvent } from "react";
import styled from "styled-components";
import DxcBadge from "../badge/Badge";
import DxcFlex from "../flex/Flex";
import NavTabsPropsType, { TabProps } from "./types";
import NavTabsContext from "./NavTabsContext";
import DxcIcon from "../icon/Icon";

const DxcTab = forwardRef(
  (
    {
      href,
      active = false,
      icon,
      disabled = false,
      onClick,
      notificationNumber = false,
      children,
      ...otherProps
    }: TabProps,
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
          aria-disabled={disabled}
          aria-selected={active}
          disabled={disabled}
          active={active}
          href={!disabled ? href : undefined}
          iconPosition={iconPosition}
          onClick={onClick}
          onKeyDown={handleOnKeyDown}
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
          tabIndex={active ? tabIndex : -1}
          role="tab"
          {...otherProps}
        >
          {icon && (
            <TabIconContainer iconPosition={iconPosition} active={active} disabled={disabled}>
              {typeof icon === "string" ? <DxcIcon icon={icon} /> : icon}
            </TabIconContainer>
          )}
          <DxcFlex alignItems="center" gap="0.5rem">
            <Label active={active} disabled={disabled}>
              {children}
            </Label>
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

const TabContainer = styled.div<{ active: TabProps["active"] }>`
  align-items: stretch;
  border-bottom: 2px solid ${(props) => (props.active ? props.theme.selectedUnderlineColor : "transparent")};
  padding: 0.5rem;
`;

const Tab = styled.a<{
  disabled: TabProps["disabled"];
  active: TabProps["active"];
  hasIcon: boolean;
  iconPosition: NavTabsPropsType["iconPosition"];
}>`
  box-sizing: border-box;
  display: flex;
  flex-direction: ${(props) => (props.hasIcon && props.iconPosition === "top" ? "column" : "row")};
  justify-content: center;
  align-items: center;
  gap: ${(props) => (props.hasIcon && props.iconPosition === "top" ? "0.375rem" : "0.625rem")};
  height: ${(props) => (props.hasIcon && props.iconPosition === "top" ? "78px" : "100%")};
  min-width: 176px;
  min-height: 44px;
  padding: 0.375rem;
  border-radius: 4px;
  background: ${(props) =>
    props.active ? props.theme.selectedBackgroundColor : props.theme.unselectedBackgroundColor};
  text-decoration-color: transparent;
  text-decoration-line: none;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};

  ${(props) =>
    !props.disabled &&
    `
      :hover {
        background: ${props.theme.hoverBackgroundColor};
      }
      :focus {
        outline: 2px solid ${props.theme.focusOutline};
      }
      :active {
        background: ${props.theme.pressedBackgroundColor};
        outline: 2px solid #33aaff};
      }
  `}
`;

const Label = styled.span<{
  disabled: TabProps["disabled"];
  active: TabProps["active"];
}>`
  display: inline;
  color: ${(props) =>
    props.disabled
      ? props.theme.disabledFontColor
      : props.active
        ? props.theme.selectedFontColor
        : props.theme.unselectedFontColor};
  font-family: ${(props) => props.theme.fontFamily};
  font-size: ${(props) => props.theme.fontSize};
  font-style: ${(props) => props.theme.fontStyle};
  font-weight: ${(props) => props.theme.fontWeight};
  text-align: center;
  letter-spacing: 0.025em;
  line-height: 1.715em;
  text-decoration: none;
  text-overflow: unset;
  white-space: normal;
  margin: 0;
`;

const TabIconContainer = styled.div<{
  iconPosition: NavTabsPropsType["iconPosition"];
  active: TabProps["active"];
  disabled: TabProps["disabled"];
}>`
  display: flex;
  font-size: 24px;
  color: ${(props) =>
    props.active
      ? props.theme.selectedIconColor
      : props.disabled
        ? props.theme.disabledIconColor
        : props.theme.unselectedIconColor};
  svg {
    height: 24px;
    width: 24px;
  }
`;

export default DxcTab;
