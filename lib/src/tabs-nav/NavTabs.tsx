import React, { useState, useEffect } from "react";
import styled, { ThemeProvider } from "styled-components";
import useTheme from "../useTheme";
import { NavTabsProps } from "./types";
import DxcTab from "./Tab";

const getTabIndex = (array, initialIndex, isNext) => {
  let index = initialIndex === 0 ? array.length - 1 : initialIndex - 1;
  while (array[index].props.disabled) {
    index = index === 0 ? array.length - 1 : index - 1;
  }
  return index;
}

const getTabIndex2 = (array, initialIndex, isNext) => {
  let index = initialIndex === array.length - 1 ? 0 : initialIndex + 1;
  while (array[index].props.disabled) {
    index = index === array.length - 1 ? 0 : index + 1;
  }
  return index;
}

const DxcNavTabs = ({ iconPosition = "top", tabIndex = 0, children }: NavTabsProps): JSX.Element => {
  const colorsTheme = useTheme();

  const [innerFocus, setInnerFocus] = useState(null);

  const setPreviousTabFocus = () => {
    setInnerFocus(getTabIndex(React.Children.toArray(children), innerFocus, false));
  };

  const setNextTabFocus = () => {
    setInnerFocus(getTabIndex2(React.Children.toArray(children), innerFocus, true));
  };

  const handleOnKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    switch (event.keyCode) {
      case 37: // arrow left
        event.preventDefault();
        setPreviousTabFocus();
        break;
      case 39: // arrow right
        event.preventDefault();
        setNextTabFocus();
        break;
      case 13: // enter
      case 32: // space
        event.preventDefault();
        break;
    }
  };

  useEffect(() => {
    setInnerFocus(React.Children.toArray(children).findIndex((child) => child.props.active));
  }, [children]);

  return (
    <ThemeProvider theme={colorsTheme.tabs}>
      <NavTabsContainer onKeyDown={handleOnKeyDown}>
        {React.Children.toArray(children).map((child, index) => {
          console.log(innerFocus);
          return React.cloneElement(child, {
            iconPosition,
            tabIndex,
            hasIcons: React.Children.toArray(children).some((child) => child.props.icon),
            focused: index === innerFocus,
          });
        })}
      </NavTabsContainer>
    </ThemeProvider>
  );
};

DxcNavTabs.Tab = DxcTab;

const NavTabsContainer = styled.div`
  display: flex;
`;

export default DxcNavTabs;
