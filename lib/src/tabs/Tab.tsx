import React, { forwardRef, Ref } from "react";
import styled from "styled-components";
import { TabProps } from "./types";
import DxcBadge from "../badge/Badge";

const Tab = forwardRef(
  (
    { active, tab, tabIndex, hasLabelAndIcon, iconPosition, onClick, onMouseEnter, onMouseLeave }: TabProps,
    ref: Ref<HTMLButtonElement>
  ): JSX.Element => {
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
        <ParentLabelSpan>
          <MainLabelContainer hasBadge={tab.notificationNumber}>
            <TabLabelContainer hasLabelAndIcon={hasLabelAndIcon} iconPosition={iconPosition}>
              {tab.icon && (
                <TabIconContainer hasLabelAndIcon={hasLabelAndIcon} iconPosition={iconPosition}>
                  {typeof tab.icon === "string" ? <TabIcon src={tab.icon} /> : tab.icon}
                </TabIconContainer>
              )}
              <LabelTextContainer>{tab.label}</LabelTextContainer>
            </TabLabelContainer>
          </MainLabelContainer>
          {tab.notificationNumber && tab.notificationNumber && (
            <BadgeContainer hasLabelAndIcon={hasLabelAndIcon} iconPosition={iconPosition}>
              <DxcBadge notificationText={tab.notificationNumber > 99 ? "+99" : tab.notificationNumber} />
            </BadgeContainer>
          )}
        </ParentLabelSpan>
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
  position: relative;
  box-sizing: border-box;
  text-align: center;
  flex-shrink: 0;
  line-height: 1.75;
  white-space: normal;
  letter-spacing: 0.02857em;
  border: 0;
  cursor: pointer;
  margin: 0;
  display: inline-flex;
  outline: 0;
  align-items: center;
  user-select: none;
  border-radius: 0;
  vertical-align: middle;
  justify-content: center;
  text-decoration: none;
  opacity: 0.7;
  border-bottom-style: solid;
  border-bottom-color: ${(props) => props.theme.dividerColor};
  font-family: ${(props) => props.theme.fontFamily};
  font-size: ${(props) => props.theme.fontSize};
  font-style: ${(props) => props.theme.fontStyle};
  font-weight: ${(props) => props.theme.fontWeight};
  min-width: 90px;
  max-width: 360px;
  padding: ${(props) =>
    ((!props.hasLabelAndIcon || (props.hasLabelAndIcon && props.iconPosition !== "top")) && "12px 16px") || "8px 16px"};
  height: ${(props) =>
    ((!props.hasLabelAndIcon || (props.hasLabelAndIcon && props.iconPosition !== "top")) && "48px") || "72px"};
  min-height: ${(props) =>
    ((!props.hasLabelAndIcon || (props.hasLabelAndIcon && props.iconPosition !== "top")) && "48px") || "72px"};
  background-color: ${(props) => props.theme.unselectedBackgroundColor};
  color: ${(props) => props.theme.unselectedFontColor};
  svg {
    color: ${(props) => props.theme.unselectedIconColor};
  }

  &:hover {
    background-color: ${(props) => `${props.theme.hoverBackgroundColor} !important`};
  }

  &:active {
    background-color: ${(props) => `${props.theme.pressedBackgroundColor} !important`};
    font-weight: ${(props) => `${props.theme.pressedFontWeight} !important`};
  }

  &:focus {
    outline: ${(props) => props.theme.focusOutline} auto 1px;
  }

  &[aria-selected="true"] {
    background-color: ${(props) => props.theme.selectedBackgroundColor};
    color: ${(props) => props.theme.selectedFontColor};
    svg {
      color: ${(props) => props.theme.selectedIconColor};
    }
    opacity: 1;
  }

  &[aria-disabled="true"] {
    background-color: ${(props) => props.theme.unselectedBackgroundColor} !important;
    cursor: not-allowed !important;
    pointer-events: all;
    color: ${(props) => props.theme.disabledFontColor};
    font-style: ${(props) => props.theme.disabledFontStyle};
    svg {
      color: ${(props) => props.theme.disabledIconColor};
    }
    outline: none !important;
    opacity: 0.5;
  }
`;

const ParentLabelSpan = styled.div`
  position: relative;
`;

const TabLabelContainer = styled.div<IconProps>`
  display: flex;
  flex-direction: ${(props) => (props.hasLabelAndIcon && props.iconPosition === "top" && "column") || "row"};
  align-items: center;
`;

const LabelTextContainer = styled.div``;

const BadgeContainer = styled.div<IconProps>`
  position: absolute;
  right: 0;
  top: ${(props) => (props.hasLabelAndIcon && props.iconPosition === "top" && "0") || "5px"};
  width: 23px;
  height: 17px;
`;

const MainLabelContainer = styled.div<{ hasBadge: number | boolean }>`
  display: flex;
  flex-direction: row;
  margin-left: ${(props) => (props.hasBadge && "35px") || "unset"};
  margin-right: ${(props) => (props.hasBadge && "35px") || "unset"};
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
