import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { spaces } from "../common/variables.js";
import useTheme from "../useTheme";
import useTranslatedLabels from "../useTranslatedLabels";
import Tab from "./Tab";
import TabsPropsType, { Margin, Space } from "./types";

const arrowIcons = {
  left: (
    <svg focusable="false" viewBox="0 0 24 24" aria-hidden="true" role="img">
      <path d="M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"></path>
    </svg>
  ),
  right: (
    <svg focusable="false" viewBox="0 0 24 24" aria-hidden="true" role="img">
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
      window.removeEventListener("load", handleWindowSizeChange);
      window.removeEventListener("resize", handleWindowSizeChange);
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
  const colorsTheme = useTheme();
  const [innerActiveTabIndex, setInnerActiveTabIndex] = useState(defaultActiveTabIndex ?? 0);
  const hasLabelAndIcon = tabs && tabs.filter((tab) => tab.label && tab.icon).length > 0;
  const [activeIndicatorWidth, setActiveIndicatorWidth] = useState(0);
  const [activeIndicatorLeft, setActiveIndicatorLeft] = useState(0);
  const [translateScroll, setTranslateScroll] = useState(0);
  const [scrollRightEnabled, setScrollRightEnabled] = useState(true);
  const [scrollLeftEnabled, setScrollLeftEnabled] = useState(false);
  const [countClick, setCountClick] = useState(0);
  const [totalTabsWidth, setTotalTabsWidth] = useState(0);
  const [currentFocusIndex, setCurrentFocusIndex] = useState(0);
  const [temporalFocusIndex, setTemporalFocusIndex] = useState(0);
  const refTabs = useRef([]);
  const refTabList = useRef(null);
  const viewWidth = useResize(refTabList);
  const enabledIndicator = useMemo(() => viewWidth < totalTabsWidth, [viewWidth]);
  const translatedLabels = useTranslatedLabels();

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
      setScrollLeftEnabled(false);
      setScrollRightEnabled(true);
    } else {
      moveX = countClick - scrollWidth;
      setScrollRightEnabled(true);
      setScrollLeftEnabled(true);
    }
    setTranslateScroll(-moveX);
    setCountClick(moveX);
  };

  const scrollRight = () => {
    const scrollWidth = viewWidth * 0.75;
    let moveX;
    if (countClick + scrollWidth + viewWidth >= totalTabsWidth) {
      moveX = totalTabsWidth - viewWidth;
      setScrollRightEnabled(false);
      setScrollLeftEnabled(true);
    } else {
      moveX = countClick + scrollWidth;
      setScrollLeftEnabled(true);
      setScrollRightEnabled(true);
    }
    setTranslateScroll(-moveX);
    setCountClick(moveX);
  };

  const setPreviousTabFocus = () => {
    setTemporalFocusIndex((temporalFocusIndex) => {
      let index = temporalFocusIndex === 0 ? tabs.length - 1 : temporalFocusIndex - 1;
      while (tabs[index].isDisabled) {
        index = index === 0 ? tabs.length - 1 : index - 1;
      }
      refTabs?.current[index].focus();
      return index;
    });
  };

  const setNextTabFocus = () => {
    setTemporalFocusIndex((temporalFocusIndex) => {
      let index = temporalFocusIndex === tabs.length - 1 ? 0 : temporalFocusIndex + 1;
      while (tabs[index].isDisabled) {
        index = index === tabs.length - 1 ? 0 : index + 1;
      }
      refTabs?.current[index].focus();
      return index;
    });
  };

  const handleOnKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    switch (event.key) {
      case "Left":
      case "ArrowLeft":
        event.preventDefault();
        setPreviousTabFocus();
        break;
      case "Right":
      case "ArrowRight":
        event.preventDefault();
        setNextTabFocus();
        break;
      case "Enter":
      case " ":
        event.preventDefault();
        setCurrentFocusIndex(temporalFocusIndex);
        handleSelected(temporalFocusIndex);
        break;
      case "Tab":
        if (temporalFocusIndex !== currentFocusIndex) {
          event.preventDefault();
          setTemporalFocusIndex(currentFocusIndex);
          refTabs?.current[currentFocusIndex].focus();
        }
        handleSelected(currentFocusIndex);
        break;
    }
  };

  return (
    <ThemeProvider theme={colorsTheme.tabs}>
      <TabsContainer margin={margin}>
        <Underline />
        <Tabs hasLabelAndIcon={hasLabelAndIcon} iconPosition={iconPosition}>
          <ScrollLeftComponent
            onClick={scrollLeft}
            scrollLeftEnabled={scrollLeftEnabled}
            enabled={enabledIndicator}
            aria-disabled="false"
            aria-label={translatedLabels.tabs.scrollLeft}
            role="button"
          >
            {arrowIcons.left}
          </ScrollLeftComponent>
          <TabsContent>
            <TabsContentScroll translateScroll={translateScroll} ref={refTabList} enabled={enabledIndicator}>
              <TabList role="tablist" onKeyDown={handleOnKeyDown}>
                {tabs.map((tab, i) => (
                  <Tab
                    tab={tab}
                    key={`tab${i}${tab.label}`}
                    active={activeTabIndex === i || innerActiveTabIndex === i}
                    tabIndex={(activeTabIndex === i || innerActiveTabIndex === i) && !tab.isDisabled ? tabIndex : -1}
                    hasLabelAndIcon={hasLabelAndIcon}
                    iconPosition={iconPosition}
                    ref={(el) => (refTabs.current[i] = el)}
                    onClick={() => {
                      setCurrentFocusIndex(i);
                      setTemporalFocusIndex(i);
                      handleSelected(i);
                    }}
                    onMouseEnter={() => {
                      onTabHover?.(i);
                    }}
                    onMouseLeave={() => {
                      onTabHover?.(i);
                    }}
                  ></Tab>
                ))}
              </TabList>
              <ActiveIndicator tabWidth={activeIndicatorWidth} tabLeft={activeIndicatorLeft}></ActiveIndicator>
            </TabsContentScroll>
          </TabsContent>
          <ScrollRightComponent
            onClick={scrollRight}
            scrollRightEnabled={scrollRightEnabled}
            enabled={enabledIndicator}
            aria-disabled="false"
            aria-label={translatedLabels.tabs.scrollRight}
            role="button"
          >
            {arrowIcons.right}
          </ScrollRightComponent>
        </Tabs>
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
  z-index: 1;
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
  min-height: ${(props) =>
    ((!props.hasLabelAndIcon || (props.hasLabelAndIcon && props.iconPosition !== "top")) && "48px") || "72px"};
  height: ${(props) =>
    ((!props.hasLabelAndIcon || (props.hasLabelAndIcon && props.iconPosition !== "top")) && "48px") || "72px"};
  display: flex;
  overflow: hidden;
`;

type ScrollIndicatorProps = {
  enabled: boolean;
  scrollLeftEnabled?: boolean;
  scrollRightEnabled?: boolean;
};

const ScrollIndicator = styled.div<ScrollIndicatorProps>`
  display: ${(props) => (props.enabled ? "flex" : "none")};
  background-color: #ffffff;
  font-size: 1.25rem;
  min-width: ${(props) => props.theme.scrollButtonsWidth};
  height: 100%;
  padding: 0;
  justify-content: center;
  cursor: pointer;
  border-bottom: solid ${(props) => props.theme.dividerThickness} ${(props) => props.theme.dividerColor};
  box-sizing: border-box;
  visibility: visible;
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
    color: ${(props) => props.theme.unselectedFontColor};
  }
`;

const ScrollLeftComponent = styled(ScrollIndicator)`
  ${(props) => props.enabled && !props.scrollLeftEnabled && "cursor: not-allowed;"}
  &:hover {
    background-color: ${(props) =>
      props.scrollLeftEnabled ? `${props.theme.hoverBackgroundColor} !important` : "transparent !important"};
  }
  svg {
    ${(props) => props.enabled && (props.scrollLeftEnabled ? `visibility: visible;` : `visibility: hidden;`)}
  }
`;

const ScrollRightComponent = styled(ScrollIndicator)`
  margin-left: -3px;
  ${(props) => props.enabled && !props.scrollRightEnabled && "cursor: not-allowed;"}
  &:hover {
    background-color: ${(props) =>
      props.scrollRightEnabled ? `${props.theme.hoverBackgroundColor} !important` : "transparent !important"};
  }
  svg {
    ${(props) => props.enabled && (props.scrollRightEnabled ? `visibility: visible;` : `visibility: hidden;`)}
  }
`;

type ActiveIndicatorProps = {
  tabLeft: number;
  tabWidth: number;
};

const ActiveIndicator = styled.span<ActiveIndicatorProps>`
  left: ${(props) => `${props.tabLeft}px`};
  width: ${(props) => `${props.tabWidth}px`};
  z-index: 2;
  background-color: ${(props) => props.theme.selectedUnderlineColor};
  bottom: 0;
  height: ${(props) => props.theme.selectedUnderlineThickness};
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
  min-height: 48px;
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

export default DxcTabs;
