import React, {
  useState,
  ReactElement,
  useMemo,
  useRef,
  useEffect,
} from "react";
import styled, { ThemeProvider } from "styled-components";
import useTheme from "../useTheme";
import NavTabsPropsType from "./types";
import DxcTab from "./Tab";
import NavTabsContext from "./NavTabsContext";

const getPropInChild = (child, propName) =>
  child.props
    ? child.props[propName]
      ? child.props[propName]
      : child.props.children
        ? getPropInChild(child.props.children, propName)
        : undefined
    : undefined;

const getLabelFromTab = (child) =>
  typeof child === "string"
    ? child.toString()
    : child.props.children
      ? Array.isArray(child.props.children)
        ? getLabelFromTab(child.props.children[0])
        : getLabelFromTab(child.props.children)
      : undefined;

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

const DxcNavTabs = ({
  iconPosition = "top",
  tabIndex = 0,
  children,
}: NavTabsPropsType): JSX.Element => {
  const [innerFocusIndex, setInnerFocusIndex] = useState(null);
  const [underlineWidth, setUnderlineWidth] = useState(null);
  const refNavTabList = useRef(null);
  const colorsTheme = useTheme();

  useEffect(() => {
    console.log(refNavTabList?.current?.scrollWidth);
    setUnderlineWidth(refNavTabList?.current?.scrollWidth);
  }, [children]);

  const contextValue = useMemo(
    () => ({
      iconPosition,
      tabIndex,
      focusedLabel:
        innerFocusIndex === null
          ? undefined
          : getLabelFromTab(children[innerFocusIndex]),
    }),
    [iconPosition, tabIndex, innerFocusIndex]
  );

  const handleOnKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    const activeTab = React.Children.toArray(children).findIndex(
      (child: ReactElement) => getPropInChild(child, "active")
    );

    switch (event.key) {
      case "Left":
      case "ArrowLeft":
        event.preventDefault();
        setInnerFocusIndex(
          getPreviousTabIndex(
            children,
            innerFocusIndex === null ? activeTab : innerFocusIndex
          )
        );
        break;
      case "Right":
      case "ArrowRight":
        event.preventDefault();
        setInnerFocusIndex(
          getNextTabIndex(
            children,
            innerFocusIndex === null ? activeTab : innerFocusIndex
          )
        );
        break;
      default:
        break;
    }
  };

  return (
    <ThemeProvider theme={colorsTheme.navTabs}>
      <NavTabsContainer
        onKeyDown={handleOnKeyDown}
        ref={refNavTabList}
        role="tablist"
        aria-label="Navigation tabs"
      >
        <NavTabsContext.Provider value={contextValue}>
          {children}
        </NavTabsContext.Provider>
        <Underline underlineWidth={underlineWidth} />
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
