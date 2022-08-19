import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { spaces } from "../common/variables.js";
import DxcBadge from "../badge/Badge";
import useTheme from "../useTheme";
import TabsPropsType, { Margin, Space } from "./types";

const iconIndicator = {
  left: (
    <svg focusable="false" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"></path>
    </svg>
  ),
  right: (
    <svg focusable="false" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"></path>
    </svg>
  ),
};

const useResize = (refTabList) => {
  const [viewWidth, setViewWidth] = useState(0);

  const handleWindowSizeChange = useCallback(() => {
    setViewWidth(refTabList?.current?.offsetWidth);
  }, [refTabList]);

  useEffect(() => {
    window.addEventListener("load", handleWindowSizeChange);
    window.addEventListener("resize", handleWindowSizeChange);

    return () => {
      window.addEventListener("load", handleWindowSizeChange);
      window.addEventListener("resize", handleWindowSizeChange);
    };
  }, [refTabList, handleWindowSizeChange]);

  return viewWidth;
};

const DxcTabs = ({
  defaultActiveTabIndex,
  activeTabIndex,
  tabs,
  onTabClick,
  onTabHover,
  margin,
  iconPosition = "top",
  tabIndex = 0,
}: TabsPropsType): JSX.Element => {
  const [innerActiveTabIndex, setInnerActiveTabIndex] = useState(defaultActiveTabIndex ?? 0);
  const colorsTheme = useTheme();
  const hasLabelAndIcon = tabs && tabs.filter((tab) => tab.label && tab.icon).length > 0;

  const [activeIndicatorWidth, setActiveIndicatorWidth] = useState(0);
  const [activeIndicatorLeft, setActiveIndicatorLeft] = useState(0);
  const [translateScroll, setTranslateScroll] = useState(0);
  const [rightIndicatorEnabled, setRightIndicatorEnabled] = useState(true);
  const [leftIndicatorEnabled, setLeftIndicatorEnabled] = useState(false);
  const [countClick, setCountClick] = useState(0);
  const [totalTabsWidth, setTotalTabsWidth] = useState(0);

  const refTabs = useRef([]);
  const refTabList = useRef(null);

  const viewWidth = useResize(refTabList);

  const enabledIndicator = useMemo(() => viewWidth < totalTabsWidth, [viewWidth]);

  useEffect(() => {
    const sumWidth = refTabs?.current?.reduce(function (count, obj) {
      return count + obj.offsetWidth;
    }, 0);
    setTotalTabsWidth(sumWidth);
    setActiveIndicatorWidth(refTabs?.current[activeTabIndex ?? innerActiveTabIndex]?.offsetWidth);
    setActiveIndicatorLeft(refTabs?.current[activeTabIndex ?? innerActiveTabIndex]?.offsetLeft);
  }, [refTabs]);

  const handleSelected = (newValue) => {
    activeTabIndex ?? setInnerActiveTabIndex(newValue);
    onTabClick?.(newValue);
    setActiveIndicatorWidth(refTabs?.current[newValue]?.offsetWidth);
    setActiveIndicatorLeft(refTabs?.current[newValue]?.offsetLeft);
  };

  const scrollLeft = () => {
    const scrollWidth = viewWidth * 0.75;
    let moveX;
    if (countClick <= scrollWidth) {
      moveX = 0;
      setLeftIndicatorEnabled(false);
      setRightIndicatorEnabled(true);
    } else {
      moveX = countClick - scrollWidth;
      setRightIndicatorEnabled(true);
      setLeftIndicatorEnabled(true);
    }
    setTranslateScroll(-moveX);
    setCountClick(moveX);
  };

  const scrollRight = () => {
    const scrollWidth = viewWidth * 0.75;
    let moveX;
    if (countClick + scrollWidth + viewWidth >= totalTabsWidth) {
      moveX = totalTabsWidth - viewWidth;
      setRightIndicatorEnabled(false);
      setLeftIndicatorEnabled(true);
    } else {
      moveX = countClick + scrollWidth;
      setLeftIndicatorEnabled(true);
      setRightIndicatorEnabled(true);
    }
    setTranslateScroll(-moveX);
    setCountClick(moveX);
  };

  const getLabelForTab = (tab) => (
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
      {tab.notificationNumber && tab.notificationNumber !== false && (
        <BadgeContainer hasLabelAndIcon={hasLabelAndIcon} iconPosition={iconPosition}>
          <DxcBadge notificationText={tab.notificationNumber > 99 ? "+99" : tab.notificationNumber} />
        </BadgeContainer>
      )}
    </ParentLabelSpan>
  );

  return (
    <ThemeProvider theme={colorsTheme.tabs}>
      <TabsContainer margin={margin}>
        <Tabs hasLabelAndIcon={hasLabelAndIcon} iconPosition={iconPosition}>
          <ScrollLeftComponent
            onClick={scrollLeft}
            leftIndicatorEnabled={leftIndicatorEnabled}
            enabled={enabledIndicator}
            aria-disabled="false"
          >
            {iconIndicator.left}
          </ScrollLeftComponent>
          <TabsContent>
            <TabsContentScroll translateScroll={translateScroll} ref={refTabList} enabled={enabledIndicator}>
              <TabList role="tablist">
                {tabs.map((tab, i) => (
                  <Tab
                    role="tab"
                    type="button"
                    tabIndex={(activeTabIndex === i || innerActiveTabIndex === i) && !tab.isDisabled ? tabIndex : -1}
                    key={`tab${i}${tab.label}`}
                    disabled={tab.isDisabled}
                    aria-disabled={tab.isDisabled}
                    aria-selected={activeTabIndex === i || innerActiveTabIndex === i}
                    hasLabelAndIcon={hasLabelAndIcon}
                    iconPosition={iconPosition}
                    ref={(el) => (refTabs.current[i] = el)}
                    onClick={() => {
                      handleSelected(i);
                    }}
                    onMouseEnter={() => {
                      onTabHover?.(i);
                    }}
                    onMouseLeave={() => {
                      onTabHover?.(null);
                    }}
                  >
                    {getLabelForTab(tab)}
                  </Tab>
                ))}
              </TabList>
              <ActiveIndicator tabWidth={activeIndicatorWidth} tabLeft={activeIndicatorLeft}></ActiveIndicator>
            </TabsContentScroll>
          </TabsContent>
          <ScrollRightComponent
            onClick={scrollRight}
            rightIndicatorEnabled={rightIndicatorEnabled}
            enabled={enabledIndicator}
            aria-disabled="false"
          >
            {iconIndicator.right}
          </ScrollRightComponent>
        </Tabs>
        <Underline />
      </TabsContainer>
    </ThemeProvider>
  );
};

const Underline = styled.div`
  left: 0;
  bottom: 0;
  width: 100%;
  position: absolute;
  height: ${(props) => props.theme.dividerThickness};
  background-color: ${(props) => props.theme.dividerColor};
  z-index: 0;
`;

const TabsContainer = styled.div<{ margin: Margin | Space }>`
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
`;

type IconProps = {
  hasLabelAndIcon: boolean;
  iconPosition: "top" | "left";
};

const Tabs = styled.div<IconProps>`
  background-color: #ffffff;
  min-height: ${(props) =>
    ((!props.hasLabelAndIcon || (props.hasLabelAndIcon && props.iconPosition !== "top")) && "48px") || "72px"};
  height: ${(props) =>
    ((!props.hasLabelAndIcon || (props.hasLabelAndIcon && props.iconPosition !== "top")) && "48px") || "72px"};
  display: flex;
  overflow: hidden;
`;

const Tab = styled.button<IconProps>`
  text-transform: none;
  overflow: hidden;
  position: relative;
  box-sizing: border-box;
  text-align: center;
  flex-shrink: 0;
  line-height: 1.75;
  white-space: normal;
  letter-spacing: 0.02857em;
  color: inherit;
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

type ScrollIndicatorProps = {
  enabled: boolean;
  leftIndicatorEnabled?: boolean;
  rightIndicatorEnabled?: boolean;
};

const ScrollIndicator = styled.div<ScrollIndicatorProps>`
  display: ${(props) => (props.enabled ? "flex" : "none")};
  background-color: #ffffff;
  font-size: 1.25rem;
  color: #666666;
  min-width: 48px;
  width: 48px;
  height: 100%;
  padding: 0;
  justify-content: center;
  cursor: pointer;
  &:hover {
    background-color: ${(props) => `${props.theme.hoverBackgroundColor} !important`};
  }
  &:focus {
    outline: ${(props) => props.theme.focusOutline} auto 1px;
  }
  svg {
    height: 20px;
    width: 20px;
    align-self: center;
  }
`;

const ScrollLeftComponent = styled(ScrollIndicator)`
  ${(props) =>
    props.enabled && (props.leftIndicatorEnabled ? `visibility: visible;` : `visibility: hidden; cursor: not-allowed;`)}
`;

const ScrollRightComponent = styled(ScrollIndicator)`
  ${(props) =>
    props.enabled &&
    (props.rightIndicatorEnabled ? `visibility: visible;` : `visibility: hidden; cursor: not-allowed;`)}
`;

type ActiveIndicatorProps = {
  tabLeft: number;
  tabWidth: number;
};

const ActiveIndicator = styled.span<ActiveIndicatorProps>`
  left: ${(props) => `${props.tabLeft}px`};
  width: ${(props) => `${props.tabWidth}px`};
  z-index: 2;
  background-color: #5f249f;
  bottom: 0;
  height: 2px;
  position: absolute;
  transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
`;

const TabsContent = styled.div`
  display: flex;
  z-index: 1;
  flex: 1 1 auto;
  display: inline-block;
  position: relative;
  white-space: nowrap;
  overflow-x: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const TabList = styled.div`
  display: flex;
`;

type TabsContentScrollProps = {
  translateScroll: number;
  enabled: boolean;
};

const TabsContentScroll = styled.div<TabsContentScrollProps>`
  display: flex;
  ${(props) => (props.enabled ? `transform: translateX(${props.translateScroll}px)` : `transform: translateX(0px)`)};
  transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
`;

const TabIcon = styled.img`
  width: 100%;
  display: inline-flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
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

const MainLabelContainer = styled.div<{ hasBadge: boolean }>`
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

export default DxcTabs;
