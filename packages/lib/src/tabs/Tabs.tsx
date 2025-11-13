import {
  Children,
  isValidElement,
  KeyboardEvent,
  ReactElement,
  ReactNode,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import styled from "@emotion/styled";
import TabsContext from "./TabsContext";
import DxcTab, { sharedTabStyles } from "./Tab";
import TabsPropsType, { TabProps } from "./types";
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
}>`
  display: flex;
  transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  height: ${({ iconPosition }) => (iconPosition === "top" ? "72px" : "var(--height-xxl)")};
`;

const DxcTabs = ({ children, iconPosition = "left", margin, tabIndex = 0 }: TabsPropsType) => {
  const isTabElement = (child: ReactNode): child is ReactElement<TabProps> => isValidElement<TabProps>(child);
  const childrenArray = useMemo(() => Children.toArray(children).filter(isTabElement), [children]);
  const [activeTabId, setActiveTabId] = useState<string>(() => {
    const activeChild = childrenArray.find(
      (child) => (child.props.active || child.props.defaultActive) && !child.props.disabled
    );
    const initialTab = activeChild ?? childrenArray.find((child) => !child.props.disabled);
    return initialTab?.props.label ?? initialTab?.props.tabId ?? "";
  });
  const [innerFocusIndex, setInnerFocusIndex] = useState<number | null>(null);
  const [scrollLeftEnabled, setScrollLeftEnabled] = useState(false);
  const [scrollRightEnabled, setScrollRightEnabled] = useState(true);
  const [totalTabsWidth, setTotalTabsWidth] = useState(0);
  const refTabListContainer = useRef<HTMLDivElement | null>(null);
  const refTabList = useRef<HTMLDivElement | null>(null);
  const translatedLabels = useContext(HalstackLanguageContext);
  const viewWidth = useWidth(refTabList);
  const contextValue = useMemo(() => {
    const focusedChild = innerFocusIndex != null ? childrenArray[innerFocusIndex] : null;
    return {
      activeTabId: activeTabId,
      focusedTabId: isValidElement(focusedChild) ? (focusedChild.props.label ?? focusedChild.props.tabId) : "",
      iconPosition,
      isControlled: childrenArray.some((child) => typeof child.props.active !== "undefined"),
      setActiveTabId: setActiveTabId,
      tabIndex,
    };
  }, [activeTabId, childrenArray, iconPosition, innerFocusIndex, tabIndex]);

  const scrollToActiveTab = () => {
    if (!refTabListContainer.current || !refTabList.current || !(viewWidth < totalTabsWidth)) return;

    const activeTab = refTabList.current.querySelector('[aria-selected="true"]') as HTMLElement;
    if (!activeTab) return;

    const containerWidth = refTabListContainer.current.offsetWidth;
    const containerScrollLeft = refTabListContainer.current.scrollLeft;
    const tabOffsetLeft = activeTab.offsetLeft;
    const tabWidth = activeTab.offsetWidth;

    const isTabFullyVisible =
      tabOffsetLeft >= containerScrollLeft && tabOffsetLeft + tabWidth <= containerScrollLeft + containerWidth;

    if (!isTabFullyVisible) {
      const targetScroll = tabOffsetLeft - 50;
      refTabListContainer.current.scrollTo({
        left: Math.max(0, targetScroll),
      });
    }
  };

  const scrollLimitCheck = () => {
    const container = refTabListContainer.current;
    if (container) {
      const currentScroll = container.scrollLeft;
      const scrollingLength = container.scrollWidth - container.offsetWidth;
      const startingScroll = currentScroll <= 1;
      const endScroll = currentScroll >= scrollingLength - 1;

      setScrollLeftEnabled(!startingScroll);
      setScrollRightEnabled(!endScroll);
    }
  };

  const scrollLeft = () => {
    if (refTabListContainer.current) {
      refTabListContainer.current.scrollLeft -= 100;
      scrollLimitCheck();
    }
  };

  const scrollRight = () => {
    if (refTabListContainer.current) {
      refTabListContainer.current.scrollLeft += 100;
      scrollLimitCheck();
    }
  };

  const handleOnKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    const activeTab = childrenArray.findIndex((child) => (child.props.label ?? child.props.tabId) === activeTabId);
    let index;
    switch (event.key) {
      case "Left":
      case "ArrowLeft":
        event.preventDefault();
        index = getPreviousTabIndex(childrenArray, innerFocusIndex === null ? activeTab : innerFocusIndex);
        setInnerFocusIndex(index);

        break;
      case "Right":
      case "ArrowRight":
        event.preventDefault();
        index = getNextTabIndex(childrenArray, innerFocusIndex === null ? activeTab : innerFocusIndex);
        setInnerFocusIndex(index);
        break;
      case "Tab":
        if (activeTab !== innerFocusIndex) {
          setInnerFocusIndex(activeTab);
        }
        break;
      default:
        break;
    }
    setTimeout(() => {
      scrollLimitCheck();
    }, 0);
  };

  useEffect(() => {
    const container = refTabListContainer.current;

    if (refTabList.current) {
      setTotalTabsWidth(() => {
        let total = 0;
        refTabList.current?.querySelectorAll('[role="tab"]').forEach((tab, index) => {
          if (tab.ariaSelected === "true" && viewWidth && viewWidth < totalTabsWidth) {
            setInnerFocusIndex(index);
          }
          total += (tab as HTMLElement).offsetWidth;
        });
        return total;
      });
    }

    const handleScroll = () => scrollLimitCheck();
    if (container) {
      container.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (container) {
        container.removeEventListener("scroll", handleScroll);
      }
    };
  }, [viewWidth, totalTabsWidth]);

  useEffect(() => {
    const isControlled = childrenArray.some((child) => typeof child.props.active !== "undefined");
    if (isControlled) {
      const activeChild = childrenArray.find((child) => child.props.active && !child.props.disabled);
      if (activeChild) {
        const newActiveId = activeChild.props.label ?? activeChild.props.tabId ?? "";
        if (newActiveId !== activeTabId) {
          setActiveTabId(newActiveId);
        }
      }
    }

    if (activeTabId && viewWidth && viewWidth < totalTabsWidth) {
      setTimeout(() => {
        scrollToActiveTab();
      }, 100);
    }
  }, [childrenArray, activeTabId, viewWidth, totalTabsWidth]);

  return (
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
          <TabsContent ref={refTabListContainer}>
            <ScrollableTabsList
              enabled={viewWidth < totalTabsWidth}
              iconPosition={iconPosition}
              onKeyDown={handleOnKeyDown}
              ref={refTabList}
              role="tablist"
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
      {Children.map(children, (child) =>
        isTabElement(child) && child.props.tabId === activeTabId ? child.props.children : null
      )}
    </>
  );
};

DxcTabs.Tab = DxcTab;

export default DxcTabs;
