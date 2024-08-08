import { KeyboardEvent, MutableRefObject, useCallback, useEffect, useMemo, useRef, useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { spaces } from "../common/variables";
import DxcIcon from "../icon/Icon";
import useTheme from "../useTheme";
import useTranslatedLabels from "../useTranslatedLabels";
import Tab from "./Tab";
import TabsPropsType from "./types";

const useResize = (refTabList: MutableRefObject<HTMLDivElement | null>) => {
  const [viewWidth, setViewWidth] = useState(0);

  const handleWindowSizeChange = useCallback(() => {
    setViewWidth(refTabList?.current?.offsetWidth ?? 0);
  }, [refTabList]);

  useEffect(() => {
    handleWindowSizeChange();
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
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
    tabs && defaultActiveTabIndex && !tabs[defaultActiveTabIndex]?.isDisabled ? defaultActiveTabIndex : firstFocus
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
  const refTabs = useRef<HTMLButtonElement[]>([]);
  const refTabList = useRef<HTMLDivElement | null>(null);
  const viewWidth = useResize(refTabList);
  const translatedLabels = useTranslatedLabels();
  const enabledIndicator = useMemo(() => viewWidth < totalTabsWidth, [viewWidth]);

  useEffect(() => {
    const sumWidth = refTabs?.current?.reduce((count, obj) => count + obj.offsetWidth, 0);
    setTotalTabsWidth(sumWidth);
    setActiveIndicatorWidth(refTabs?.current[activeTabIndex ?? innerActiveTabIndex]?.offsetWidth ?? 0);
    setActiveIndicatorLeft(refTabs?.current[activeTabIndex ?? innerActiveTabIndex]?.offsetLeft ?? 0);
  }, [refTabs]);

  useEffect(() => {
    setMinHeightTabs((refTabList?.current?.offsetHeight || 0) + 1);
  }, [refTabList]);

  useEffect(() => {
    if (activeTabIndex && activeTabIndex >= 0) {
      setActiveIndicatorWidth(refTabs?.current[activeTabIndex]?.offsetWidth ?? 0);
      setActiveIndicatorLeft(refTabs?.current[activeTabIndex]?.offsetLeft ?? 0);
    }
  }, [activeTabIndex]);

  const handleSelected = (newValue: number) => {
    if (activeTabIndex == null) {
      setInnerActiveTabIndex(newValue);
    }
    onTabClick?.(newValue);
    if (activeTabIndex === undefined) {
      setActiveIndicatorWidth(refTabs?.current[newValue]?.offsetWidth ?? 0);
      setActiveIndicatorLeft(refTabs?.current[newValue]?.offsetLeft ?? 0);
    }
  };

  const scrollLeft = () => {
    const scrollWidth = (refTabList?.current?.offsetHeight || 0) * 0.75;
    let moveX = 0;
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
    const scrollWidth = (refTabList?.current?.offsetHeight || 0) * 0.75;
    let moveX = 0;
    if (countClick + scrollWidth + (refTabList?.current?.offsetHeight || 0) >= totalTabsWidth) {
      moveX = totalTabsWidth - (refTabList?.current?.offsetHeight || 0);
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
    setTemporalFocusIndex((currentTemporalFocusIndex) => {
      let index = currentTemporalFocusIndex === 0 ? tabs.length - 1 : currentTemporalFocusIndex - 1;
      while (tabs[index]?.isDisabled) {
        index = index === 0 ? tabs.length - 1 : index - 1;
      }
      refTabs?.current[index]?.focus({ preventScroll: true });
      setScrollFocus(index);
      return index;
    });
  };

  const setNextTabFocus = () => {
    setTemporalFocusIndex((currentTemporalFocusIndex) => {
      let index = currentTemporalFocusIndex === tabs.length - 1 ? 0 : currentTemporalFocusIndex + 1;
      while (tabs[index]?.isDisabled) {
        index = index === tabs.length - 1 ? 0 : index + 1;
      }
      refTabs?.current[index]?.focus({ preventScroll: true });
      setScrollFocus(index);
      return index;
    });
  };

  const setScrollFocus = (actualIndex: number) => {
    let sumPrev = 0;
    refTabs?.current?.forEach((item, index) => {
      if (index <= actualIndex) {
        sumPrev += item.offsetWidth;
      }
    });
    let moveX = 0;
    if (actualIndex === tabs.length - 1) {
      moveX = totalTabsWidth - (refTabList?.current?.offsetHeight || 0);
      setScrollLeftEnabled(true);
      setScrollRightEnabled(false);
    } else if (refTabList?.current?.offsetWidth && sumPrev > refTabList?.current?.offsetWidth) {
      moveX = sumPrev - (refTabList?.current?.offsetHeight || 0) + 1; // plus 1px for the outline
      setScrollLeftEnabled(true);
      setScrollRightEnabled(true);
    } else {
      setScrollLeftEnabled(false);
      setScrollRightEnabled(true);
    }
    setTranslateScroll(-moveX);
    setCountClick(moveX);
  };

  const handleOnKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
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
          refTabs?.current[currentFocusIndex]?.focus();
        }
        handleSelected(currentFocusIndex);
        break;
      default:
        break;
    }
  };

  const isTabActive = (index: number) =>
    activeTabIndex != null && activeTabIndex >= 0 ? activeTabIndex === index : innerActiveTabIndex === index;
  const isActiveIndicatorDisabled =
    firstFocus === -1 ||
    (tabs && activeTabIndex !== undefined && activeTabIndex >= 0 && !!tabs[activeTabIndex]?.isDisabled);

  return (
    <ThemeProvider theme={colorsTheme?.tabs}>
      <TabsContainer margin={margin}>
        <Underline />
        <Tabs hasLabelAndIcon={hasLabelAndIcon} iconPosition={iconPosition}>
          <ScrollIndicator
            onClick={scrollLeft}
            enabled={enabledIndicator}
            disabled={!scrollLeftEnabled}
            aria-label={translatedLabels?.tabs?.scrollLeft}
            tabIndex={scrollLeftEnabled ? tabIndex : -1}
            minHeightTabs={minHeightTabs}
          >
            <DxcIcon icon="keyboard_arrow_left" />
          </ScrollIndicator>
          <TabsContent>
            <TabsContentScroll translateScroll={translateScroll} ref={refTabList} enabled={enabledIndicator}>
              <TabList role="tablist" onKeyDown={handleOnKeyDown} minHeightTabs={minHeightTabs}>
                {tabs.map((tab, i) => (
                  <Tab
                    tab={tab}
                    key={`tab-${i}`}
                    active={isTabActive(i)}
                    tabIndex={isTabActive(i) && !tab.isDisabled ? tabIndex : -1}
                    hasLabelAndIcon={hasLabelAndIcon}
                    iconPosition={iconPosition}
                    ref={(el: HTMLButtonElement) => {
                      refTabs.current[i] = el;
                    }}
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
                  />
                ))}
              </TabList>
              <ActiveIndicator
                tabWidth={activeIndicatorWidth}
                tabLeft={activeIndicatorLeft}
                aria-disabled={isActiveIndicatorDisabled}
              />
            </TabsContentScroll>
          </TabsContent>
          <ScrollIndicator
            onClick={scrollRight}
            enabled={enabledIndicator}
            disabled={!scrollRightEnabled}
            aria-label={translatedLabels?.tabs?.scrollRight}
            tabIndex={scrollRightEnabled ? tabIndex : -1}
            minHeightTabs={minHeightTabs}
          >
            <DxcIcon icon="keyboard_arrow_right" />
          </ScrollIndicator>
        </Tabs>
      </TabsContainer>
    </ThemeProvider>
  );
};

const Underline = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: ${(props) => props.theme.dividerThickness};
  background-color: ${(props) => props.theme.dividerColor};
`;

const TabsContainer = styled.div<{ margin: TabsPropsType["margin"] }>`
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

const Tabs = styled.div<{
  hasLabelAndIcon: boolean;
  iconPosition: TabsPropsType["iconPosition"];
}>`
  min-height: ${(props) =>
    ((!props.hasLabelAndIcon || (props.hasLabelAndIcon && props.iconPosition !== "top")) && "48px") || "72px"};
  height: ${(props) =>
    ((!props.hasLabelAndIcon || (props.hasLabelAndIcon && props.iconPosition !== "top")) && "48px") || "72px"};
  display: flex;
  overflow: hidden;
  background-color: ${(props) => props.theme.unselectedBackgroundColor};
`;

const ScrollIndicator = styled.button<{
  enabled: boolean;
  minHeightTabs: number;
}>`
  box-sizing: border-box;
  display: ${(props) => (props.enabled ? "flex" : "none")};
  justify-content: center;
  min-width: ${(props) => props.theme.scrollButtonsWidth};
  height: ${(props) => props.minHeightTabs - 1}px;
  padding: 0;
  border: none;
  background-color: #ffffff;
  font-size: 1.25rem;
  cursor: pointer;

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
  &:disabled {
    cursor: default;
    display: none;
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

  span {
    align-self: center;
    height: 20px;
    width: 20px;
  }

  span::before {
    color: ${(props) => props.theme.unselectedFontColor};
  }
`;

const ActiveIndicator = styled.span<{ tabLeft: number; tabWidth: number }>`
  position: absolute;
  bottom: 0;
  left: ${(props) => `${props.tabLeft}px`};
  width: ${(props) => `${props.tabWidth}px`};
  height: ${(props) => props.theme.selectedUnderlineThickness};
  background-color: ${(props) => props.theme.selectedUnderlineColor};
  &[aria-disabled="true"] {
    background-color: ${(props) => props.theme.disabledFontColor};
    display: none;
  }
`;

const TabsContent = styled.div`
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

const TabsContentScroll = styled.div<{
  translateScroll: number;
  enabled: boolean;
}>`
  display: flex;
  ${(props) => (props.enabled ? `transform: translateX(${props.translateScroll}px)` : `transform: translateX(0px)`)};
  transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
`;

export default DxcTabs;
