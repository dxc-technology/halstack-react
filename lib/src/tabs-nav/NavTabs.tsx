import React, { useState, useEffect, ReactElement } from "react";
import styled, { ThemeProvider } from "styled-components";
import useTheme from "../useTheme";
import { NavTabsProps } from "./types";
import DxcTab from "./Tab";

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

const DxcNavTabs = ({ iconPosition = "top", tabIndex = 0, children }: NavTabsProps): JSX.Element => {
  const colorsTheme = useTheme();

  const [innerFocus, setInnerFocus] = useState(null);

  const handleOnKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    switch (event.keyCode) {
      case 37: // arrow left
        event.preventDefault();
        setInnerFocus(getPreviousTabIndex(React.Children.toArray(children), innerFocus));
        break;
      case 39: // arrow right
        event.preventDefault();
        setInnerFocus(getNextTabIndex(React.Children.toArray(children), innerFocus));
        break;
    }
  };

  useEffect(() => {
    setInnerFocus(React.Children.toArray(children).findIndex((child: ReactElement) => child.props.active));
  }, [children]);

  return (
    <ThemeProvider theme={colorsTheme.tabs}>
      <NavTabsContainer onKeyDown={handleOnKeyDown} role="tablist" aria-label="Navigation tabs">
        {React.Children.toArray(children).map((child: ReactElement, index: number) =>
          React.cloneElement(child, {
            iconPosition,
            tabIndex,
            hasIcons: React.Children.toArray(children).some((child: ReactElement) => child.props.icon),
            focused: index === innerFocus,
          })
        )}
      </NavTabsContainer>
    </ThemeProvider>
  );
};

DxcNavTabs.Tab = DxcTab;

const NavTabsContainer = styled.div`
  display: flex;
`;

export default DxcNavTabs;
