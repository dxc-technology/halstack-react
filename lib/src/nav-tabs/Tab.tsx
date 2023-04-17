import React, { useLayoutEffect, createRef, forwardRef, Ref, useContext } from "react";
import styled from "styled-components";
import DxcBadge from "../badge/Badge";
import { NavTabsContext } from "./NavTabs";
import { TabProps } from "./types";
import BaseTypography from "../utils/BaseTypography";
import useTheme from "../useTheme";

const DxcTab = forwardRef(
  (
    { href, active = false, icon, disabled = false, notificationNumber = false, children, ...otherProps }: TabProps,
    ref: Ref<HTMLAnchorElement>
  ): JSX.Element => {
    const tabRef: React.MutableRefObject<HTMLAnchorElement> = createRef();

    const { iconPosition, tabIndex, hasIcons, focusedLabel } = useContext(NavTabsContext);
    const colorsTheme = useTheme();

    useLayoutEffect(() => {
      focusedLabel === children.toString() && tabRef?.current?.focus();
    }, [focusedLabel]);

    const handleOnKeyDown = (event: React.KeyboardEvent<HTMLAnchorElement>) => {
      switch (event.key) {
        case " ":
        case "Enter":
          tabRef?.current?.click();
          event.preventDefault();
          break;
      }
    };

    return (
      <TabContainer active={active} role="tab" aria-selected={active} aria-disabled={disabled}>
        <Tab
          href={!disabled && href ? href : undefined}
          disabled={disabled}
          active={active}
          iconPosition={iconPosition}
          hasIcon={hasIcons}
          ref={(anchorRef) => {
            tabRef.current = anchorRef;

            if (ref) {
              if (typeof ref === "function") ref(anchorRef);
              else {
                (ref as React.MutableRefObject<HTMLAnchorElement | null>).current = anchorRef;
              }
            }
          }}
          onKeyDown={handleOnKeyDown}
          tabIndex={active ? tabIndex : -1}
          {...otherProps}
        >
          {icon && (
            <TabIconContainer iconPosition={iconPosition}>
              {typeof icon === "string" ? <img src={icon} /> : icon}
            </TabIconContainer>
          )}
          <LabelContainer>
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
            {notificationNumber && (
              <BadgeContainer>
                <DxcBadge notificationText={notificationNumber > 99 ? "+99" : notificationNumber} disabled={disabled} />
              </BadgeContainer>
            )}
          </LabelContainer>
        </Tab>
      </TabContainer>
    );
  }
);

type TabContainerProps = {
  active?: boolean;
};
const TabContainer = styled.div<TabContainerProps>`
  border-bottom: 2px solid ${(props) => (props.active ? props.theme.selectedUnderlineColor : props.theme.dividerColor)};
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

type TabStyleProps = {
  disabled: boolean;
  hasIcon: boolean;
  active?: boolean;
  iconPosition: "top" | "left";
};
const Tab = styled.a<TabStyleProps>`
  display: flex;
  flex-direction: ${(props) => (props.hasIcon && props.iconPosition === "top" ? "column" : "row")};
  justify-content: center;
  align-items: center;
  height: ${(props) => (props.hasIcon && props.iconPosition === "top" ? "66px" : "32px")};
  min-width: 164px;
  margin: 0.5rem;
  padding: 0.375rem;
  border-radius: 4px;
  background: ${(props) =>
    props.active ? props.theme.selectedBackgroundColor : props.theme.unselectedBackgroundColor};
  text-decoration-color: transparent;
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

type TabIconContainerProps = {
  iconPosition?: "top" | "left";
};
const TabIconContainer = styled.div<TabIconContainerProps>`
  display: flex;
  margin-bottom: ${(props) => props.iconPosition === "top" && "0.375rem"};
  margin-right: ${(props) => props.iconPosition === "left" && "0.625rem"};

  img,
  svg {
    height: 24px;
    width: 24px;
  }
`;

const LabelContainer = styled.div`
  display: flex;
  align-items: center;
`;

const BadgeContainer = styled.div`
  margin-left: 0.5rem;
`;

export default DxcTab;
