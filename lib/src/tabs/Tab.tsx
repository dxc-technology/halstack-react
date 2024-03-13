import React, { forwardRef, Ref } from "react";
import styled from "styled-components";
import { TabProps } from "./types";
import DxcBadge from "../badge/Badge";
import BaseTypography from "../utils/BaseTypography";
import useTheme from "../useTheme";
import DxcIcon from "../icon/Icon";

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
          notificationNumber={tab.notificationNumber}
          hasLabelAndIcon={hasLabelAndIcon}
          iconPosition={iconPosition}
          disabled={tab.isDisabled}
        >
          {tab.icon && (
            <TabIconContainer hasLabelAndIcon={hasLabelAndIcon} iconPosition={iconPosition}>
              {typeof tab.icon === "string" ? <DxcIcon icon={tab.icon} /> : tab.icon}
            </TabIconContainer>
          )}
          <BaseTypography
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
          </BaseTypography>
        </MainLabelContainer>
        {tab.notificationNumber && !tab.isDisabled && (
          <BadgeContainer hasLabelAndIcon={hasLabelAndIcon} iconPosition={iconPosition}>
            <DxcBadge
              mode="notification"
              size="small"
              label={typeof tab.notificationNumber === "number" && tab.notificationNumber}
            />
          </BadgeContainer>
        )}
      </TabContainer>
    );
  }
);

const TabContainer = styled.button<{
  hasLabelAndIcon: TabProps["hasLabelAndIcon"];
  iconPosition: TabProps["iconPosition"];
}>`
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
  svg {
    color: ${(props) => props.theme.unselectedIconColor};
  }

  &[aria-selected="true"] {
    background-color: ${(props) => props.theme.selectedBackgroundColor};
    svg {
      color: ${(props) => props.theme.selectedIconColor};
    }
    opacity: 1;
  }

  &:disabled {
    background-color: ${(props) => props.theme.unselectedBackgroundColor} !important;
    cursor: not-allowed !important;
    pointer-events: all;
    font-style: ${(props) => props.theme.disabledFontStyle};
    outline: none !important;

    svg {
      color: ${(props) => props.theme.disabledIconColor};
    }
    > div {
      opacity: 0.5;
    }
  }
`;

const BadgeContainer = styled.div<{
  hasLabelAndIcon: TabProps["hasLabelAndIcon"];
  iconPosition: TabProps["iconPosition"];
}>`
  margin-left: 12px;
  height: 100%;
  display: flex;
  align-items: ${(props) => (props.hasLabelAndIcon && props.iconPosition === "top" ? "flex-start" : "center")};
`;

const MainLabelContainer = styled.div<{
  notificationNumber: TabProps["tab"]["notificationNumber"];
  hasLabelAndIcon: TabProps["hasLabelAndIcon"];
  iconPosition: TabProps["iconPosition"];
  disabled: TabProps["tab"]["isDisabled"];
}>`
  display: flex;
  flex-direction: ${(props) => (props.hasLabelAndIcon && props.iconPosition === "top" && "column") || "row"};
  align-items: center;
  margin-left: ${(props) =>
    props.notificationNumber && !props.disabled
      ? typeof props.notificationNumber === "number"
        ? "36px"
        : "18px"
      : "unset"};
`;

const TabIconContainer = styled.div<{
  hasLabelAndIcon: TabProps["hasLabelAndIcon"];
  iconPosition: TabProps["iconPosition"];
}>`
  display: flex;
  margin-bottom: ${(props) => (props.hasLabelAndIcon && props.iconPosition === "top" && "8px") || ""};
  margin-right: ${(props) => (props.hasLabelAndIcon && props.iconPosition === "left" && "12px") || ""};

  img,
  svg {
    height: 22px;
    width: 22px;
  }
`;

export default React.memo(Tab);
