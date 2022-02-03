import React from "react";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import styled, { ThemeProvider } from "styled-components";

import { spaces } from "../common/variables.js";
import DxcBadge from "../badge/Badge";
import useTheme from "../useTheme.js";
import TabsPropsType from "./types";

const DxcTabs = ({
  activeTabIndex,
  tabs,
  onTabClick,
  onTabHover,
  margin,
  iconPosition = "top",
  tabIndex = 0,
}: TabsPropsType): JSX.Element => {
  const [innerActiveTabIndex, setInnerActiveTabIndex] = React.useState(0);
  const colorsTheme = useTheme();
  const hasLabelAndIcon = tabs && tabs.filter((tab) => tab.label && tab.icon).length > 0;

  const handleChange = (event, newValue) => {
    if (activeTabIndex == null) {
      setInnerActiveTabIndex(newValue);
    }
    onTabClick?.(newValue);
  };

  const getLabelForTab = (tab) => {
    return (
      <ParentLabelSpan>
        <MainLabelContainer hasBadge={tab.notificationNumber}>
          <TabLabelContainer hasLabelAndIcon={hasLabelAndIcon} iconPosition={iconPosition}>
            {tab.icon ? (
              <TabIconContainer hasLabelAndIcon={hasLabelAndIcon} iconPosition={iconPosition}>
                {typeof tab.icon === "object" ? tab.icon : React.createElement(tab.icon)}
              </TabIconContainer>
            ) : (
              tab.iconSrc && <TabIcon src={tab.iconSrc} />
            )}
            <LabelTextContainer>{tab.label}</LabelTextContainer>
          </TabLabelContainer>
        </MainLabelContainer>
        {tab.notificationNumber && tab.notificationNumber !== false && (
          <BadgeContainer hasLabelAndIcon={hasLabelAndIcon} iconPosition={iconPosition}>
            <DxcBadge notificationText={tab.notificationNumber > 99 ? "+99" : tab.notificationNumber} />
          </BadgeContainer>
        )}
      </ParentLabelSpan>
    );
  };

  return (
    <ThemeProvider theme={colorsTheme.tabs}>
      <DxCTabs margin={margin} hasLabelAndIcon={hasLabelAndIcon} iconPosition={iconPosition}>
        <Underline />
        <Tabs
          value={activeTabIndex != null ? activeTabIndex : innerActiveTabIndex}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="auto"
        >
          {tabs.map((tab, i) => (
            <Tab
              tabIndex={(activeTabIndex === i || innerActiveTabIndex === i) && !tab.isDisabled ? tabIndex : -1}
              key={`tab${i}${tab.label}`}
              label={getLabelForTab(tab)}
              disabled={tab.isDisabled}
              disableRipple={true}
              onMouseEnter={() => {
                onTabHover?.(i);
              }}
              onMouseLeave={() => {
                onTabHover?.(null);
              }}
            />
          ))}
        </Tabs>
      </DxCTabs>
    </ThemeProvider>
  );
};
const ParentLabelSpan = styled.div`
  position: relative;
`;
const TabLabelContainer = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.hasLabelAndIcon && props.iconPosition === "top" && "column") || "row"};
  align-items: center;
`;
const LabelTextContainer = styled.div``;
const BadgeContainer = styled.div`
  position: absolute;
  right: 0;
  top: ${(props) => (props.hasLabelAndIcon && props.iconPosition === "top" && "0") || "5px"};
  width: 23px;
  height: 17px;
`;
const MainLabelContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: ${(props) => (props.hasBadge && "35px") || "unset"};
  margin-right: ${(props) => (props.hasBadge && "35px") || "unset"};
`;

const Underline = styled.div`
  left: 0px;
  bottom: 0;
  width: 100%;
  height: ${(props) => props.theme.dividerThickness};
  position: absolute;
  background-color: ${(props) => props.theme.dividerColor};
`;

const DxCTabs = styled.div`
  position: relative;
  margin: ${(props) => (props.margin && typeof props.margin !== "object" ? spaces[props.margin] : "0px")};
  margin-top: ${(props) =>
    props.margin && typeof props.margin === "object" && props.margin.top ? spaces[props.margin.top] : ""};
  margin-right: ${(props) =>
    props.margin && typeof props.margin === "object" && props.margin.right ? spaces[props.margin.right] : ""};
  margin-bottom: ${(props) =>
    props.margin && typeof props.margin === "object" && props.margin.bottom ? spaces[props.margin.bottom] : ""};
  margin-left: ${(props) =>
    props.margin && typeof props.margin === "object" && props.margin.left ? spaces[props.margin.left] : ""};

  .MuiTabs-root {
    background: white;
    min-height: ${(props) =>
      ((!props.hasLabelAndIcon || (props.hasLabelAndIcon && props.iconPosition !== "top")) && "48px") || "72px"};

    .MuiTabs-scroller {
      .MuiTabs-flexContainer + span {
        z-index: 4;
      }
    }
    .MuiTab-root {
      text-transform: ${(props) => props.theme.fontTextTransform} !important;
    }
    .MuiButtonBase-root {
      font-family: ${(props) => props.theme.fontFamily};
      font-size: ${(props) => props.theme.fontSize};
      font-style: ${(props) => props.theme.fontStyle};
      font-weight: ${(props) => props.theme.fontWeight};

      padding: ${(props) =>
        ((!props.hasLabelAndIcon || (props.hasLabelAndIcon && props.iconPosition !== "top")) && "12px 16px") ||
        "8px 16px"};
      height: ${(props) =>
        ((!props.hasLabelAndIcon || (props.hasLabelAndIcon && props.iconPosition !== "top")) && "48px") || "72px"};
      min-width: 90px;
      max-width: 360px;
      min-height: ${(props) =>
        ((!props.hasLabelAndIcon || (props.hasLabelAndIcon && props.iconPosition !== "top")) && "48px") || "72px"};

      &:hover {
        background-color: ${(props) => `${props.theme.hoverBackgroundColor} !important`};
      }
      &:active {
        background-color: ${(props) => `${props.theme.pressedBackgroundColor} !important`};
        font-weight: ${(props) => `${props.theme.pressedFontWeight} !important`};
      }
      &:not(.Mui-selected) {
        background-color: ${(props) => props.theme.unselectedBackgroundColor};
        color: ${(props) => props.theme.unselectedFontColor};
        svg {
          color: ${(props) => props.theme.unselectedIconColor};
        }
      }
      &.Mui-selected {
        background-color: ${(props) => props.theme.selectedBackgroundColor};
        color: ${(props) => props.theme.selectedFontColor};
        svg {
          color: ${(props) => props.theme.selectedIconColor};
        }
      }
      &.Mui-disabled {
        cursor: not-allowed !important;
        pointer-events: all;
        color: ${(props) => props.theme.disabledFontColor};
        font-style: ${(props) => props.theme.disabledFontStyle};
        svg {
          color: ${(props) => props.theme.disabledIconColor};
        }
      }
      &:focus {
        outline: ${(props) => props.theme.focusOutline} auto 1px;
      }
    }
    .MuiTabs-indicator {
      background-color: ${(props) => props.theme.selectedUnderlineColor};
      height: ${(props) => props.theme.selectedUnderlineThickness};
    }
    .MuiTabs-scrollButtons {
      min-width: ${(props) => props.theme.scrollButtonsWidth};
      width: ${(props) => props.theme.scrollButtonsWidth};
      padding: 0;
    }
    @media (max-width: 599.95px) {
      .MuiTabs-scrollButtonsDesktop {
        display: flex;
      }
    }
  }
`;

const TabIcon = styled.img`
  max-height: 22px;
  max-width: 22px;
`;

const TabIconContainer = styled.div`
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

export default DxcTabs;
