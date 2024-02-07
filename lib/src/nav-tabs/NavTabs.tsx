import React, { useState, ReactElement, createContext, useMemo } from "react";
import styled, { ThemeProvider } from "styled-components";
import useTheme from "../useTheme";
import NavTabsPropsType, { NavTabsContextProps } from "./types";
import DxcTab from "./Tab";

export const NavTabsContext = createContext<NavTabsContextProps | null>(null);

const getPropInChild = (child, propName) =>
  child.props
    ? child.props[propName]
      ? child.props[propName]
      : child.props.children
      ? getPropInChild(child.props.children, propName)
      : undefined
    : undefined;

const getLabelFromTab = (child) => {
  if (typeof child === "string") {
    return child.toString();
  } else if (child.props.children) {
    return Array.isArray(child.props.children)
      ? getLabelFromTab(child.props.children[0])
      : getLabelFromTab(child.props.children);
  }
};

const getPreviousTabIndex = (array, initialIndex): number => {
  let index = initialIndex === 0 ? array.length - 1 : initialIndex - 1;
  while (getPropInChild(array[index], "disabled")) {
    index = index === 0 ? array.length - 1 : index - 1;
  }
  return index;
};

const getNextTabIndex = (array, initialIndex): number => {
  let index = initialIndex === array.length - 1 ? 0 : initialIndex + 1;
  while (getPropInChild(array[index], "disabled")) {
    index = index === array.length - 1 ? 0 : index + 1;
  }
  return index;
};

const DxcNavTabs = ({ iconPosition = "top", tabIndex = 0, children }: NavTabsPropsType): JSX.Element => {
  const [innerFocusIndex, setInnerFocusIndex] = useState(null);
  const colorsTheme = useTheme();

  const contextValue = useMemo(
    () => ({
      iconPosition,
      tabIndex,
      focusedLabel: innerFocusIndex === null ? undefined : getLabelFromTab(children[innerFocusIndex]),
    }),
    [iconPosition, tabIndex, innerFocusIndex]
  );

  const handleOnKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    const activeTab = React.Children.toArray(children).findIndex((child: ReactElement) =>
      getPropInChild(child, "active")
    );
    
    switch (event.key) {
      case "Left":
      case "ArrowLeft":
        event.preventDefault();
        setInnerFocusIndex(getPreviousTabIndex(children, innerFocusIndex === null ? activeTab : innerFocusIndex));
        break;
      case "Right":
      case "ArrowRight":
        event.preventDefault();
        setInnerFocusIndex(getNextTabIndex(children, innerFocusIndex === null ? activeTab : innerFocusIndex));
        break;
    }
  };

  return (
    <ThemeProvider theme={colorsTheme.navTabs}>
      <NavTabsContainer onKeyDown={handleOnKeyDown} role="tablist" aria-label="Navigation tabs">
        <NavTabsContext.Provider value={contextValue}>{children}</NavTabsContext.Provider>
        <Underline />
      </NavTabsContainer>
    </ThemeProvider>
  );
};

const Underline = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: ${(props) => props.theme.dividerColor};
  z-index: -1;
`;

DxcNavTabs.Tab = DxcTab;

const NavTabsContainer = styled.div`
  display: flex;
  position: relative;
`;

export default DxcNavTabs;
