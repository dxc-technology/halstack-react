import React, { forwardRef, Ref } from "react";
import styled from "styled-components";
import { TabProps } from "./types";
import DxcBadge from "../badge/Badge";
import DxcTypography from "../typography/Typography";
import useTheme from "../useTheme";

const Tab = forwardRef(
  (
    { active, tab, tabIndex, hasLabelAndIcon, iconPosition, onClick, onMouseEnter, onMouseLeave }: TabProps,
    ref: Ref<HTMLButtonElement>
  ): JSX.Element => {
    const colorsTheme = useTheme();

    return (
      <TabContainer
        role="tab"
        type="button"
        tabIndex={tabIndex}
        disabled={tab.isDisabled}
        aria-disabled={tab.isDisabled}
        aria-selected={active}
        hasLabelAndIcon={hasLabelAndIcon}
        iconPosition={iconPosition}
        ref={ref}
        onClick={() => {
          onClick();
        }}
        onMouseEnter={() => {
          onMouseEnter();
        }}
        onMouseLeave={() => {
          onMouseLeave();
        }}
      >
        <MainLabelContainer
          hasBadge={tab.notificationNumber}
          hasLabelAndIcon={hasLabelAndIcon}
          iconPosition={iconPosition}
        >
          {tab.icon && (
            <TabIconContainer hasLabelAndIcon={hasLabelAndIcon} iconPosition={iconPosition}>
              {typeof tab.icon === "string" ? <TabIcon src={tab.icon} /> : tab.icon}
            </TabIconContainer>
          )}
          <DxcTypography
            color={
              tab.isDisabled
                ? colorsTheme.tabs.disabledFontColor
                : active
                ? colorsTheme.tabs.selectedFontColor
                : colorsTheme.tabs.unselectedFontColor
            }
            fontFamily={colorsTheme.tabs.fontFamily}
            fontSize={colorsTheme.tabs.fontSize}
            fontStyle={tab.isDisabled ? colorsTheme.tabs.disabledFontStyle : colorsTheme.tabs.fontStyle}
            fontWeight={active ? colorsTheme.tabs.pressedFontWeight : colorsTheme.tabs.fontWeight}
            textAlign="center"
            letterSpacing="0.025em"
            lineHeight="1.715em"
          >
            {tab.label}
          </DxcTypography>
        </MainLabelContainer>
        {tab.notificationNumber && tab.notificationNumber && (
          <BadgeContainer hasLabelAndIcon={hasLabelAndIcon} iconPosition={iconPosition}>
            <DxcBadge notificationText={tab.notificationNumber > 99 ? "+99" : tab.notificationNumber} />
          </BadgeContainer>
        )}
      </TabContainer>
    );
  }
);

type IconProps = {
  hasLabelAndIcon: boolean;
  iconPosition: "top" | "left";
};

const TabContainer = styled.button<IconProps>`
  text-transform: ${(props) => props.theme.fontTextTransform};
  overflow: hidden;
  flex-shrink: 0;
  border: 0;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  user-select: none;
  vertical-align: middle;
  justify-content: center;
  min-width: 90px;
  max-width: 360px;
  padding: ${(props) =>
    ((!props.hasLabelAndIcon || (props.hasLabelAndIcon && props.iconPosition !== "top")) && "12px 16px") || "8px 16px"};
  height: ${(props) =>
    ((!props.hasLabelAndIcon || (props.hasLabelAndIcon && props.iconPosition !== "top")) && "47px") || "71px"};
  min-height: ${(props) =>
    ((!props.hasLabelAndIcon || (props.hasLabelAndIcon && props.iconPosition !== "top")) && "47px") || "71px"};
  background-color: ${(props) => props.theme.unselectedBackgroundColor};
  svg {
    color: ${(props) => props.theme.unselectedIconColor};
  }

  &:hover {
    background-color: ${(props) => `${props.theme.hoverBackgroundColor} !important`};
  }

  &:active {
    background-color: ${(props) => `${props.theme.pressedBackgroundColor} !important`};
  }

  &:focus {
    outline: ${(props) => props.theme.focusOutline} solid 1px;
    outline-offset: -1px;
  }

  &[aria-selected="true"] {
    background-color: ${(props) => props.theme.selectedBackgroundColor};
    svg {
      color: ${(props) => props.theme.selectedIconColor};
    }
    opacity: 1;
  }

  &[aria-disabled="true"] {
    background-color: ${(props) => props.theme.unselectedBackgroundColor} !important;
    cursor: not-allowed !important;
    pointer-events: all;
    font-style: ${(props) => props.theme.disabledFontStyle};
    svg {
      color: ${(props) => props.theme.disabledIconColor};
    }
    outline: none !important;
    > div {
      opacity: 0.5;
    }
  }
`;

const BadgeContainer = styled.div<IconProps>`
  margin-left: 12px;
  height: 100%;
  display: flex;
  align-items: ${(props) => (props.hasLabelAndIcon && props.iconPosition === "top" ? "flex-start" : "center")};
`;

type MainLabelContainerProps = {
  hasBadge: number | boolean;
  hasLabelAndIcon: boolean;
  iconPosition: "top" | "left";
};

const MainLabelContainer = styled.div<MainLabelContainerProps>`
  display: flex;
  flex-direction: ${(props) => (props.hasLabelAndIcon && props.iconPosition === "top" && "column") || "row"};
  align-items: center;
  margin-left: ${(props) =>
    props.hasBadge
      ? typeof props.hasBadge === "number"
        ? `calc(${props.theme.badgeWidthWithNotificationNumber} + 12px)`
        : `calc(${props.theme.badgeWidth} + 12px)`
      : "unset"};
`;

const TabIconContainer = styled.div<IconProps>`
  max-height: 22px;
  max-width: 22px;
  margin-bottom: ${(props) => (props.hasLabelAndIcon && props.iconPosition === "top" && "8px") || ""};
  margin-right: ${(props) => (props.hasLabelAndIcon && props.iconPosition === "left" && "12px") || ""};
  overflow: hidden;
  display: flex;
  align-items: center;
  img,
  svg {
    height: 100%;
    width: 100%;
  }
`;

const TabIcon = styled.img`
  width: 100%;
  display: inline-flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

export default React.memo(Tab);
