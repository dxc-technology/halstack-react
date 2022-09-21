import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { spaces } from "../common/variables.js";
import useTheme from "../useTheme";
import useTranslatedLabels from "../useTranslatedLabels";
import Tab from "./Tab";
import TabsPropsType, { Margin, Space } from "./types";

const arrowIcons = {
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
      window.removeEventListener("load", handleWindowSizeChange);
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, [handleWindowSizeChange]);

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
  const hasLabelAndIcon = tabs && tabs.filter((tab) => tab.label && tab.icon).length > 0;
  const firstFocus = tabs && tabs.findIndex((tab) => !tab.isDisabled);
  const [innerActiveTabIndex, setInnerActiveTabIndex] = useState(
    tabs && defaultActiveTabIndex && !tabs[defaultActiveTabIndex].isDisabled ? defaultActiveTabIndex : firstFocus
  );
  const [activeIndicatorWidth, setActiveIndicatorWidth] = useState(0);
  const [activeIndicatorLeft, setActiveIndicatorLeft] = useState(0);
  const [translateScroll, setTranslateScroll] = useState(0);
  const [scrollRightEnabled, setScrollRightEnabled] = useState(true);
  const [scrollLeftEnabled, setScrollLeftEnabled] = useState(false);
  const [countClick, setCountClick] = useState(0);
  const [totalTabsWidth, setTotalTabsWidth] = useState(0);
  const [currentFocusIndex, setCurrentFocusIndex] = useState(activeTabIndex ?? innerActiveTabIndex);
  const [temporalFocusIndex, setTemporalFocusIndex] = useState(activeTabIndex ?? innerActiveTabIndex);
  const [minHeightTabs, setMinHeightTabs] = useState(0);
  const refTabs = useRef([]);
  const refTabList = useRef(null);
  const viewWidth = useResize(refTabList);
  const translatedLabels = useTranslatedLabels();
  const enabledIndicator = useMemo(() => viewWidth < totalTabsWidth, [viewWidth]);

  useEffect(() => {
    let sumWidth = refTabs?.current?.reduce(function (count, obj) {
      return count + obj.offsetWidth;
    }, 0);
    setTotalTabsWidth(sumWidth);
    setActiveIndicatorWidth(refTabs?.current[activeTabIndex ?? innerActiveTabIndex]?.offsetWidth);
    setActiveIndicatorLeft(refTabs?.current[activeTabIndex ?? innerActiveTabIndex]?.offsetLeft);
  }, [refTabs]);

  useEffect(() => {
    setMinHeightTabs(refTabList?.current?.offsetHeight + 1);
  }, [refTabList]);

  const handleSelected = (newValue) => {
    activeTabIndex ?? setInnerActiveTabIndex(newValue);
    onTabClick?.(newValue);
    setActiveIndicatorWidth(refTabs?.current[activeTabIndex ?? newValue]?.offsetWidth);
    setActiveIndicatorLeft(refTabs?.current[activeTabIndex ?? newValue]?.offsetLeft);
  };

  const scrollLeft = () => {
    const scrollWidth = refTabList?.current?.offsetWidth * 0.75;
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
    const scrollWidth = refTabList?.current?.offsetWidth * 0.75;
    let moveX;
    if (countClick + scrollWidth + refTabList?.current?.offsetWidth >= totalTabsWidth) {
      moveX = totalTabsWidth - refTabList?.current?.offsetWidth;
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
      refTabs?.current[index].focus({ preventScroll: true });
      setScrollFocus(index);
      return index;
    });
  };

  const setNextTabFocus = () => {
    setTemporalFocusIndex((temporalFocusIndex) => {
      let index = temporalFocusIndex === tabs.length - 1 ? 0 : temporalFocusIndex + 1;
      while (tabs[index].isDisabled) {
        index = index === tabs.length - 1 ? 0 : index + 1;
      }
      refTabs?.current[index].focus({ preventScroll: true });
      setScrollFocus(index);
      return index;
    });
  };

  const setScrollFocus = (actualIndex: number) => {
    let sumPrev = 0;
    refTabs?.current?.map((item, index) => {
      if (index <= actualIndex) {
        sumPrev += item.offsetWidth;
      }
    });
    let moveX = 0;
    if (actualIndex === tabs.length - 1) {
      moveX = totalTabsWidth - refTabList?.current?.offsetWidth;
      setScrollLeftEnabled(true);
      setScrollRightEnabled(false);
    } else if (sumPrev > refTabList?.current?.offsetWidth) {
      moveX = sumPrev - refTabList?.current?.offsetWidth + 1; //plus 1px for the outline
      setScrollLeftEnabled(true);
      setScrollRightEnabled(true);
    } else {
      setScrollLeftEnabled(false);
      setScrollRightEnabled(true);
    }
    setTranslateScroll(-moveX);
    setCountClick(moveX);
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

  const isTabActive = (index) => (activeTabIndex >= 0 ? activeTabIndex === index : innerActiveTabIndex === index);
  const isActiveIndicatorDisabled =
    firstFocus === -1 || (tabs && activeTabIndex >= 0 && tabs[activeTabIndex].isDisabled);

  return (
    <ThemeProvider theme={colorsTheme.tabs}>
      <TabsContainer margin={margin}>
        <Underline />
        <Tabs hasLabelAndIcon={hasLabelAndIcon} iconPosition={iconPosition}>
          <ScrollIndicator
            onClick={scrollLeft}
            scrollLeftEnabled={scrollLeftEnabled}
            enabled={enabledIndicator}
            aria-disabled={!scrollLeftEnabled}
            aria-label={translatedLabels.tabs.scrollLeft}
            tabIndex={scrollLeftEnabled ? tabIndex : -1}
            minHeightTabs={minHeightTabs}
          >
            {arrowIcons.left}
          </ScrollIndicator>
          <TabsContent>
            <TabsContentScroll translateScroll={translateScroll} ref={refTabList} enabled={enabledIndicator}>
              <TabList role="tablist" onKeyDown={handleOnKeyDown} minHeightTabs={minHeightTabs}>
                {tabs.map((tab, i) => (
                  <Tab
                    tab={tab}
                    key={`tab${i}${tab.label}`}
                    active={isTabActive(i)}
                    tabIndex={isTabActive(i) && !tab.isDisabled ? tabIndex : -1}
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
                      onTabHover?.(null);
                    }}
                  ></Tab>
                ))}
              </TabList>
              <ActiveIndicator
                tabWidth={activeIndicatorWidth}
                tabLeft={activeIndicatorLeft}
                aria-disabled={isActiveIndicatorDisabled}
              ></ActiveIndicator>
            </TabsContentScroll>
          </TabsContent>
          <ScrollIndicator
            onClick={scrollRight}
            scrollRightEnabled={scrollRightEnabled}
            enabled={enabledIndicator}
            aria-disabled={!scrollRightEnabled}
            aria-label={translatedLabels.tabs.scrollRight}
            tabIndex={scrollRightEnabled ? tabIndex : -1}
            minHeightTabs={minHeightTabs}
          >
            {arrowIcons.right}
          </ScrollIndicator>
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
  minHeightTabs: number;
};

const ScrollIndicator = styled.button<ScrollIndicatorProps>`
  display: ${(props) => (props.enabled ? "flex" : "none")};
  background-color: #ffffff;
  font-size: 1.25rem;
  min-width: ${(props) => props.theme.scrollButtonsWidth};
  height: ${(props) => props.minHeightTabs - 1}px;
  padding: 0;
  justify-content: center;
  cursor: pointer;
  border-bottom: solid ${(props) => props.theme.dividerThickness} ${(props) => props.theme.dividerColor};
  box-sizing: border-box;
  border: none;
  &:hover {
    background-color: ${(props) => `${props.theme.hoverBackgroundColor} !important`};
  }
  &:focus {
    outline: ${(props) => props.theme.focusOutline} solid 1px;
    outline-offset: -1px;
  }
  &:active {
    background-color: ${(props) => `${props.theme.pressedBackgroundColor} !important`};
  }
  svg {
    height: 20px;
    width: 20px;
    align-self: center;
    fill: ${(props) => props.theme.unselectedFontColor};
    visibility: visible;
  }
  &[aria-disabled="true"] {
    pointer-events: none;
    cursor: default;
    svg {
      visibility: hidden;
    }
    &:focus {
      outline: none;
    }
    &:hover,
    &:active {
      background-color: transparent !important;
    }
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
  &[aria-disabled="true"] {
    background-color: ${(props) => props.theme.disabledFontColor};
    display: none;
  }
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

const TabList = styled.div<{ minHeightTabs: number }>`
  display: flex;
  min-height: ${(props) => props.minHeightTabs}px;
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
