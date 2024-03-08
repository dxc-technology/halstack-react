import React, { useEffect, forwardRef, Ref, useContext, useRef } from "react";
import styled from "styled-components";
import DxcBadge from "../badge/Badge";
import DxcFlex from "../flex/Flex";
import NavTabsPropsType, { TabProps } from "./types";
import BaseTypography from "../utils/BaseTypography";
import useTheme from "../useTheme";
import { NavTabsContext } from "./NavTabsContext";

const DxcTab = forwardRef(
  (
    { href, active = false, icon, disabled = false, notificationNumber = false, children, ...otherProps }: TabProps,
    ref: Ref<HTMLAnchorElement>
  ): JSX.Element => {
    const tabRef = useRef<HTMLAnchorElement>();
    const colorsTheme = useTheme();
    const { iconPosition, tabIndex, focusedLabel } = useContext(NavTabsContext);

    useEffect(() => {
      focusedLabel === children.toString() && tabRef?.current?.focus();
    }, [focusedLabel]);

    const handleOnKeyDown = (event: React.KeyboardEvent<HTMLAnchorElement>) => {
      switch (event.key) {
        case " ":
        case "Enter":
          event.preventDefault();
          tabRef?.current?.click();
          break;
      }
    };

    return (
      <TabContainer active={active} role="tab" aria-selected={active} aria-disabled={disabled}>
        <Tab
          href={!disabled ? href : undefined}
          disabled={disabled}
          active={active}
          iconPosition={iconPosition}
          hasIcon={icon != null ? true : false}
          ref={(anchorRef) => {
            tabRef.current = anchorRef;

            if (ref) {
              if (typeof ref === "function") ref(anchorRef);
              else (ref as React.MutableRefObject<HTMLAnchorElement | null>).current = anchorRef;
            }
          }}
          onKeyDown={handleOnKeyDown}
          tabIndex={active ? tabIndex : -1}
          {...otherProps}
        >
          {icon && (
            <TabIconContainer iconPosition={iconPosition}>
              {typeof icon === "string" ? <img src={icon} alt="Tab icon" /> : icon}
            </TabIconContainer>
          )}
          <DxcFlex alignItems="center" gap="0.5rem">
            <BaseTypography
              color={
                disabled
                  ? colorsTheme.navTabs.disabledFontColor
                  : active
                  ? colorsTheme.navTabs.selectedFontColor
                  : colorsTheme.navTabs.unselectedFontColor
              }
              fontFamily={colorsTheme.navTabs.fontFamily}
              fontSize={colorsTheme.navTabs.fontSize}
              fontStyle={colorsTheme.navTabs.fontStyle}
              fontWeight={colorsTheme.navTabs.fontWeight}
              textAlign="center"
              letterSpacing="0.025em"
              lineHeight="1.715em"
            >
              {children}
            </BaseTypography>
            {notificationNumber && !disabled && (
              <DxcBadge
                mode="notification"
                size="small"
                label={typeof notificationNumber === "number" && notificationNumber}
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
  border-bottom: 2px solid ${(props) => (props.active ? props.theme.selectedUnderlineColor : 'transparent')};
  padding: 0.5rem;
  z-index: 1;
  svg {
    color: ${(props) => props.theme.unselectedIconColor};
  }
  &[aria-selected="true"] {
    svg {
      color: ${(props) => props.theme.selectedIconColor};
    }
  }
  &[aria-disabled="true"] {
    svg {
      color: ${(props) => props.theme.disabledIconColor};
    }
  }
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

const TabIconContainer = styled.div<{ iconPosition: NavTabsPropsType["iconPosition"] }>`
  display: flex;

  img,
  svg {
    height: 24px;
    width: 24px;
  }
`;

export default DxcTab;
