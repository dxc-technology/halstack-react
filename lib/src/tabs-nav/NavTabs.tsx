import React, { useState, ReactElement, createContext, useMemo } from "react";
import styled, { ThemeProvider } from "styled-components";
import useTheme from "../useTheme";
import { NavTabsContextProps, NavTabsProps } from "./types";
import DxcTab from "./Tab";

export const NavTabsContext = createContext<NavTabsContextProps | null>(null);

const getPropInChild = (child, propName) => {
  return child.props
    ? child.props[propName]
      ? child.props[propName]
      : child.props.children
      ? getPropInChild(child.props.children, propName)
      : undefined
    : undefined;
};

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

const DxcNavTabs = ({ iconPosition = "top", tabIndex = 0, children }: NavTabsProps): JSX.Element => {
  const colorsTheme = useTheme();

  const [innerFocus, setInnerFocus] = useState(null);

  const contextValue = useMemo(
    () => ({
      iconPosition,
      tabIndex,
      hasIcons: React.Children.toArray(children).some((child: ReactElement) => getPropInChild(child, "icon")),
      focusedLabel: innerFocus === null ? undefined : getLabelFromTab(children[innerFocus]),
    }),
    [iconPosition, tabIndex, innerFocus]
  );

  const handleOnKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    const activeTab = React.Children.toArray(children).findIndex((child: ReactElement) =>
      getPropInChild(child, "active")
    );
    switch (event.key) {
      case "Left":
      case "ArrowLeft":
        event.preventDefault();
        setInnerFocus(getPreviousTabIndex(children, innerFocus === null ? activeTab : innerFocus));
        break;
      case "Right":
      case "ArrowRight":
        event.preventDefault();
        setInnerFocus(getNextTabIndex(children, innerFocus === null ? activeTab : innerFocus));
        break;
    }
  };

  return (
    <ThemeProvider theme={colorsTheme.tabs}>
      <NavTabsContainer onKeyDown={handleOnKeyDown} role="tablist" aria-label="Navigation tabs">
        <NavTabsContext.Provider value={contextValue}>{children}</NavTabsContext.Provider>
      </NavTabsContainer>
    </ThemeProvider>
  );
};

DxcNavTabs.Tab = DxcTab;

const NavTabsContainer = styled.div`
  display: flex;
`;

export default DxcNavTabs;
