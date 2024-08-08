import { Children, KeyboardEvent, ReactElement, ReactNode, useEffect, useMemo, useRef, useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import useTheme from "../useTheme";
import NavTabsPropsType from "./types";
import DxcTab from "./Tab";
import NavTabsContext from "./NavTabsContext";

const getPropInChild = (child: ReactNode, propName: string): any => {
  if (child && typeof child === "object" && "props" in child) {
    const childWithProps = child as ReactElement;
    if (childWithProps.props[propName]) {
      return childWithProps.props[propName];
    }
    if (childWithProps.props.children) {
      return getPropInChild(childWithProps.props.children, propName);
    }
  }
  return undefined;
};

const getLabelFromTab = (child: ReactNode): string | undefined => {
  if (typeof child === "string") {
    return child;
  }
  if (child && typeof child === "object" && "props" in child) {
    const childWithProps = child as ReactElement;
    if (Array.isArray(childWithProps.props.children)) {
      return getLabelFromTab(childWithProps.props.children[0]);
    }
    return getLabelFromTab(childWithProps.props.children);
  }
  return undefined;
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
  const colorsTheme = useTheme();

  const childArray = Children.toArray(children).filter(
    (child) => typeof child === "object" && "props" in child
  ) as ReactElement[];

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
    <ThemeProvider theme={colorsTheme?.navTabs}>
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
