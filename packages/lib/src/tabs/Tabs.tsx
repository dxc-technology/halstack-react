import {
  Children,
  isValidElement,
  KeyboardEvent,
  ReactElement,
  useContext,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import styled from "styled-components";
import TabsContext from "./TabsContext";
import DxcTab, { sharedTabStyles } from "./Tab";
import TabsPropsType, { TabProps } from "./types";
import DxcTabsLegacy from "./TabsLegacy";
import { spaces } from "../common/variables";
import { HalstackLanguageContext } from "../HalstackContext";
import DxcIcon from "../icon/Icon";
import { getPreviousTabIndex, getNextTabIndex } from "./utils";
import useWidth from "../utils/useWidth";

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

const Underline = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: var(--border-width-s);
  background-color: var(--border-color-neutral-medium);
`;

const Tabs = styled.div`
  display: flex;
  background-color: var(--color-bg-neutral-lightest);
`;

const ScrollIndicatorButton = styled.button`
  display: grid;
  place-items: center;
  background: var(--color-bg-neutral-lightest);
  border: 0;
  min-width: 47px;
  height: 47px;
  padding: 0;
  ${sharedTabStyles}

  /* Scroll indicator arrow icon */
  > span {
    display: flex;
    font-size: var(--height-s);
    svg {
      height: var(--height-s);
      width: 24px;
    }
  }
`;

const TabsContent = styled.div`
  flex: 1 1 auto;
  display: inline-block;
  position: relative;
  white-space: nowrap;
  overflow-x: auto;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const ScrollableTabsList = styled.div<{
  enabled: boolean;
  iconPosition: TabsPropsType["iconPosition"];
  translateScroll: number;
}>`
  display: flex;
  ${({ enabled, translateScroll }) =>
    enabled ? `transform: translateX(${translateScroll}px)` : "transform: translateX(0px)"};
  transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  height: ${({ iconPosition }) => (iconPosition === "top" ? "72px" : "var(--height-xxl)")};
`;

const DxcTabs = ({
  activeTabIndex,
  children,
  defaultActiveTabIndex,
  iconPosition = "left",
  margin,
  onTabClick,
  onTabHover,
  tabIndex = 0,
  tabs,
}: TabsPropsType) => {
  const childrenArray: ReactElement<TabProps>[] = useMemo(
    () => Children.toArray(children) as ReactElement<TabProps>[],
    [children]
  );
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
  console.log("activeTabLabel", activeTabLabel);
  const [countClick, setCountClick] = useState(0);
  const [innerFocusIndex, setInnerFocusIndex] = useState<number | null>(null);
  const [scrollLeftEnabled, setScrollLeftEnabled] = useState(false);
  const [scrollRightEnabled, setScrollRightEnabled] = useState(true);
  const [translateScroll, setTranslateScroll] = useState(0);
  const [totalTabsWidth, setTotalTabsWidth] = useState(0);
  const refTabList = useRef<HTMLDivElement | null>(null);
  const translatedLabels = useContext(HalstackLanguageContext);
  const viewWidth = useWidth(refTabList.current);
  const contextValue = useMemo(() => {
    const focusedChild = innerFocusIndex != null ? childrenArray[innerFocusIndex] : null;
    return {
      activeLabel: activeTabLabel,
      focusedLabel: isValidElement(focusedChild) ? focusedChild.props.label : "",
      iconPosition,
      isControlled: childrenArray.some((child) => isValidElement(child) && typeof child.props.active !== "undefined"),
      setActiveLabel: setActiveTabLabel,
      tabIndex,
    };
  }, [activeTabLabel, childrenArray, iconPosition, innerFocusIndex, tabIndex]);

  const scrollLeft = () => {
    const offsetHeight = refTabList?.current?.offsetHeight ?? 0;
    let moveX = 0;
    if (countClick <= offsetHeight) {
      moveX = 0;
      setScrollLeftEnabled(false);
      setScrollRightEnabled(true);
    } else {
      moveX = countClick - offsetHeight * 2;
      setScrollRightEnabled(true);
      setScrollLeftEnabled(true);
    }
    setTranslateScroll(-moveX);
    setCountClick(moveX);
  };

  const scrollRight = () => {
    const offsetHeight = refTabList?.current?.offsetHeight ?? 0;
    let moveX = 0;
    if (countClick + offsetHeight >= totalTabsWidth) {
      moveX = totalTabsWidth - offsetHeight;
      setScrollRightEnabled(false);
      setScrollLeftEnabled(true);
    } else {
      moveX = countClick + offsetHeight * 2;
      setScrollLeftEnabled(true);
      setScrollRightEnabled(true);
    }
    setTranslateScroll(-moveX);
    setCountClick(moveX);
  };

  const handleOnKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
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
      default:
        break;
    }
  };

  useLayoutEffect(() => {
    if (refTabList.current)
      setTotalTabsWidth(() => {
        let total = 0;
        refTabList.current?.querySelectorAll('[role="tab"]').forEach((tab) => {
          total += (tab as HTMLElement).offsetWidth;
        });
        return total;
      });
  }, []);

  return children ? (
    <>
      <TabsContainer margin={margin}>
        <Underline />
        <Tabs>
          {viewWidth < totalTabsWidth && (
            <ScrollIndicatorButton
              aria-label={translatedLabels.tabs.scrollLeft}
              disabled={!scrollLeftEnabled}
              onClick={scrollLeft}
              tabIndex={scrollLeftEnabled ? tabIndex : -1}
            >
              <DxcIcon icon="keyboard_arrow_left" />
            </ScrollIndicatorButton>
          )}
          <TabsContent>
            <ScrollableTabsList
              enabled={viewWidth < totalTabsWidth}
              iconPosition={iconPosition}
              onKeyDown={handleOnKeyDown}
              ref={refTabList}
              role="tablist"
              translateScroll={translateScroll}
            >
              <TabsContext.Provider value={contextValue}>{children}</TabsContext.Provider>
            </ScrollableTabsList>
          </TabsContent>
          {viewWidth < totalTabsWidth && (
            <ScrollIndicatorButton
              aria-label={translatedLabels.tabs.scrollRight}
              disabled={!scrollRightEnabled}
              onClick={scrollRight}
              tabIndex={scrollRightEnabled ? tabIndex : -1}
            >
              <DxcIcon icon="keyboard_arrow_right" />
            </ScrollIndicatorButton>
          )}
        </Tabs>
      </TabsContainer>
      {
      // Children.map(children, (child) =>
      //   isValidElement(child) && child.props.label === activeTabLabel ? child.props.children : null
      // )
      }
    </>
  ) : (
    tabs != null && (
      <DxcTabsLegacy
        activeTabIndex={activeTabIndex}
        defaultActiveTabIndex={defaultActiveTabIndex}
        iconPosition={iconPosition}
        margin={margin}
        onTabClick={onTabClick}
        onTabHover={onTabHover}
        tabIndex={tabIndex}
        tabs={tabs}
      />
    )
  );
};

DxcTabs.Tab = DxcTab;

export default DxcTabs;
