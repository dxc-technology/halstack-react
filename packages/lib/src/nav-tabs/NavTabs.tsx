import {
  Children,
  KeyboardEvent,
  ReactElement,
  ReactNode,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import styled, { ThemeProvider } from "styled-components";
import HalstackContext from "../HalstackContext";
import NavTabsPropsType from "./types";
import DxcTab from "./Tab";
import NavTabsContext from "./NavTabsContext";

const getPropInChild = (child: ReactNode, propName: string) => {
  if (child && typeof child === "object" && "props" in child) {
    const childWithProps = child;
    if (childWithProps.props[propName]) {
      return childWithProps.props[propName];
    } else if (childWithProps.props.children) {
      return getPropInChild(childWithProps.props.children, propName);
    }
  }
};

const getLabelFromTab = (child: ReactNode) => {
  if (typeof child === "string") {
    return child;
  } else if (child && typeof child === "object" && "props" in child) {
    const childWithProps = child;
    if (Array.isArray(childWithProps.props.children)) {
      return getLabelFromTab(childWithProps.props.children[0]);
    } else {
      return getLabelFromTab(childWithProps.props.children);
    }
  }
};

const getPreviousTabIndex = (array: ReactElement[], initialIndex: number): number => {
  let index = initialIndex === 0 ? array.length - 1 : initialIndex - 1;
  while (getPropInChild(array[index], "disabled")) {
    index = index === 0 ? array.length - 1 : index - 1;
  }
  return index;
};

const getNextTabIndex = (array: ReactElement[], initialIndex: number): number => {
  let index = initialIndex === array.length - 1 ? 0 : initialIndex + 1;
  while (getPropInChild(array[index], "disabled")) {
    index = index === array.length - 1 ? 0 : index + 1;
  }
  return index;
};

const DxcNavTabs = ({ iconPosition = "top", tabIndex = 0, children }: NavTabsPropsType): JSX.Element => {
  const [innerFocusIndex, setInnerFocusIndex] = useState<number | null>(null);
  const [underlineWidth, setUnderlineWidth] = useState<number | null>(null);
  const refNavTabList = useRef<HTMLDivElement | null>(null);
  const colorsTheme = useContext(HalstackContext);

  const childArray = Children.toArray(children).filter(
    (child) => typeof child === "object" && "props" in child
  );

  useEffect(() => {
    setUnderlineWidth(refNavTabList?.current?.scrollWidth ?? null);
  }, [children]);

  const contextValue = useMemo(
    () => ({
      iconPosition,
      tabIndex,
      focusedLabel: innerFocusIndex === null ? undefined : getLabelFromTab(childArray[innerFocusIndex]),
    }),
    [iconPosition, tabIndex, innerFocusIndex]
  );

  const handleOnKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    const activeTab = childArray.findIndex((child) => getPropInChild(child, "active"));

    switch (event.key) {
      case "Left":
      case "ArrowLeft":
        event.preventDefault();
        setInnerFocusIndex(getPreviousTabIndex(childArray, innerFocusIndex === null ? activeTab : innerFocusIndex));
        break;
      case "Right":
      case "ArrowRight":
        event.preventDefault();
        setInnerFocusIndex(getNextTabIndex(childArray, innerFocusIndex === null ? activeTab : innerFocusIndex));
        break;
      default:
        break;
    }
  };

  return (
    <ThemeProvider theme={colorsTheme.navTabs}>
      <NavTabsContainer onKeyDown={handleOnKeyDown} ref={refNavTabList} role="tablist" aria-label="Navigation tabs">
        <NavTabsContext.Provider value={contextValue}>{children}</NavTabsContext.Provider>
        <Underline underlineWidth={underlineWidth ?? 0} />
      </NavTabsContainer>
    </ThemeProvider>
  );
};

const Underline = styled.div<{ underlineWidth: number }>`
  position: absolute;
  bottom: 0;
  left: 0;
  height: 2px;
  background-color: ${(props) => props.theme.dividerColor};
  z-index: -1;
  width: ${(props) => props.underlineWidth}px;
`;

DxcNavTabs.Tab = DxcTab;

const NavTabsContainer = styled.div`
  display: flex;
  position: relative;
  overflow: auto;
  z-index: 0;
`;

export default DxcNavTabs;
