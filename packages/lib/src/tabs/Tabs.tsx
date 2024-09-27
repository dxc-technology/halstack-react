import { Children, isValidElement, ReactElement, useCallback, useEffect, useMemo, useRef, useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import useTheme from "../useTheme";
import { TabsContext } from "./TabsContext";
import DxcTab from "./Tab";
import TabsPropsType, { TabProps } from "./types";
import DxcTabsLegacy from "./TabsLegacy";
import { spaces } from "../common/variables";
import useTranslatedLabels from "../useTranslatedLabels";
import DxcIcon from "../icon/Icon";

const useResize = (refTabList) => {
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

const getPreviousTabIndex = (array, initialIndex): number => {
  let index = initialIndex === 0 ? array.length - 1 : initialIndex - 1;
  while (array[index].props.disabled) {
    index = index === 0 ? array.length - 1 : index - 1;
  }
  return index;
};

const getNextTabIndex = (array, initialIndex): number => {
  let index = initialIndex === array.length - 1 ? 0 : initialIndex + 1;
  while (array[index].props.disabled) {
    index = index === array.length - 1 ? 0 : index + 1;
  }
  return index;
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
  children,
}: TabsPropsType): JSX.Element => {
  const childrenArray: ReactElement<TabProps>[] = useMemo(() => {
    return Children.toArray(children) as ReactElement<TabProps>[];
  }, [children]);
  const hasLabelAndIcon = useMemo(() => {
    return childrenArray.some((child) => isValidElement(child) && child.props.icon && child.props.label);
  }, [childrenArray]);

  const [activeTabLabel, setActiveTabLabel] = useState(() => {
    const hasActiveChild = childrenArray.some(
      (child) => isValidElement(child) && (child.props.active || child.props.defaultActive) && !child.props.disabled
    );
    const initialActiveTab = hasActiveChild
      ? childrenArray.find(
          (child) => isValidElement(child) && (child.props.active || child.props.defaultActive) && !child.props.disabled
        )
      : childrenArray.find((child) => isValidElement(child) && !child.props.disabled);

    return isValidElement(initialActiveTab) ? initialActiveTab.props.label : "";
  });
  const [innerFocusIndex, setInnerFocusIndex] = useState(null);
  const [activeIndicatorWidth, setActiveIndicatorWidth] = useState(0);
  const [activeIndicatorLeft, setActiveIndicatorLeft] = useState(0);
  const [countClick, setCountClick] = useState(0);
  const [totalTabsWidth, setTotalTabsWidth] = useState(0);
  const [translateScroll, setTranslateScroll] = useState(0);
  const [scrollRightEnabled, setScrollRightEnabled] = useState(true);
  const [scrollLeftEnabled, setScrollLeftEnabled] = useState(false);
  const [minHeightTabs, setMinHeightTabs] = useState(0);
  const refTabList = useRef(null);
  const colorsTheme = useTheme();
  const viewWidth = useResize(refTabList);
  const translatedLabels = useTranslatedLabels();
  const enabledIndicator = useMemo(() => viewWidth < totalTabsWidth, [viewWidth]);

  useEffect(() => {
    if (refTabList.current) {
      setTotalTabsWidth(refTabList.current.firstElementChild?.offsetWidth);
      setMinHeightTabs(refTabList?.current?.offsetHeight + 1);
    }
  }, [childrenArray]);

  const contextValue = useMemo(() => {
    const focusedChild = childrenArray[innerFocusIndex];
    return {
      iconPosition,
      tabIndex,
      focusedLabel: isValidElement(focusedChild) && focusedChild.props.label,
      isControlled: childrenArray.some((child) => isValidElement(child) && typeof child.props.active !== "undefined"),
      activeLabel: activeTabLabel,
      hasLabelAndIcon,
      setActiveLabel: setActiveTabLabel,
      setActiveIndicatorWidth,
      setActiveIndicatorLeft,
    };
  }, [iconPosition, tabIndex, innerFocusIndex, activeTabLabel, childrenArray, hasLabelAndIcon]);

  const scrollLeft = () => {
    const scrollWidth = refTabList?.current?.offsetWidth * 0.75;
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
    const scrollWidth = refTabList?.current?.offsetWidth * 0.75;
    let moveX = 0;
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

  const handleOnKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    const activeTab = childrenArray.findIndex((child: ReactElement) => child.props.label === activeTabLabel);
    switch (event.key) {
      case "Left":
      case "ArrowLeft":
        event.preventDefault();
        setInnerFocusIndex(getPreviousTabIndex(childrenArray, innerFocusIndex === null ? activeTab : innerFocusIndex));
        break;
      case "Right":
      case "ArrowRight":
        event.preventDefault();
        setInnerFocusIndex(getNextTabIndex(childrenArray, innerFocusIndex === null ? activeTab : innerFocusIndex));
        break;
      case "Tab":
        if (activeTab !== innerFocusIndex) {
          setInnerFocusIndex(activeTab);
        }
        break;
    }
  };

  return children ? (
    <>
      <ThemeProvider theme={colorsTheme.tabs}>
        <TabsContainer margin={margin}>
          <Underline />
          <Tabs hasLabelAndIcon={hasLabelAndIcon} iconPosition={iconPosition}>
            <ScrollIndicator
              onClick={scrollLeft}
              enabled={enabledIndicator}
              disabled={!scrollLeftEnabled}
              aria-label={translatedLabels.tabs.scrollLeft}
              tabIndex={scrollLeftEnabled ? tabIndex : -1}
              minHeightTabs={minHeightTabs}
            >
              <DxcIcon icon={"keyboard_arrow_left"} />
            </ScrollIndicator>
            <TabsContent>
              <TabsContentScroll translateScroll={translateScroll} ref={refTabList} enabled={enabledIndicator}>
                <TabList role="tablist" onKeyDown={handleOnKeyDown} minHeightTabs={minHeightTabs}>
                  <TabsContext.Provider value={contextValue}>{children}</TabsContext.Provider>
                </TabList>
                <ActiveIndicator
                  tabWidth={activeIndicatorWidth}
                  tabLeft={activeIndicatorLeft}
                  aria-disabled={childrenArray.some(
                    (child) => isValidElement(child) && activeTabLabel === child.props.label && child.props.disabled
                  )}
                />
              </TabsContentScroll>
            </TabsContent>
            <ScrollIndicator
              onClick={scrollRight}
              enabled={enabledIndicator}
              disabled={!scrollRightEnabled}
              aria-label={translatedLabels.tabs.scrollRight}
              tabIndex={scrollRightEnabled ? tabIndex : -1}
              minHeightTabs={minHeightTabs}
            >
              <DxcIcon icon={"keyboard_arrow_right"} />
            </ScrollIndicator>
          </Tabs>
        </TabsContainer>
      </ThemeProvider>
      {Children.map(children, (child) => {
        if (isValidElement(child) && child.props.label === activeTabLabel) {
          return child.props.children;
        }
        return null;
      })}
    </>
  ) : (
    tabs && (
      <DxcTabsLegacy
        defaultActiveTabIndex={defaultActiveTabIndex}
        activeTabIndex={activeTabIndex}
        tabs={tabs}
        onTabClick={onTabClick}
        onTabHover={onTabHover}
        margin={margin}
        iconPosition={iconPosition}
        tabIndex={tabIndex}
      />
    )
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

DxcTabs.Tab = DxcTab;

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
