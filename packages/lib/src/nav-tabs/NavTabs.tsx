import { Children, KeyboardEvent, ReactElement, useMemo, useState } from "react";
import styled from "@emotion/styled";
import NavTabsPropsType from "./types";
import Tab from "./Tab";
import NavTabsContext from "./NavTabsContext";
import { getLabelFromTab, getPropInChild, getPreviousTabIndex, getNextTabIndex } from "./utils";

const NavTabsContainer = styled.div`
  position: relative;
  display: flex;
  overflow: auto hidden;
`;

const Underline = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  height: var(--border-width-m);
  background-color: var(--border-color-neutral-medium);
  width: 100%;
`;

const DxcNavTabs = ({ iconPosition = "left", tabIndex = 0, children }: NavTabsPropsType): JSX.Element => {
  const [innerFocusIndex, setInnerFocusIndex] = useState<number | null>(null);
  const childArray = Children.toArray(children).filter(
    (child) => typeof child === "object" && "props" in child
  ) as ReactElement[];

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
    <NavTabsContainer onKeyDown={handleOnKeyDown} role="tablist" aria-label="Navigation tabs">
      <Underline />
      <NavTabsContext.Provider value={contextValue}>{children}</NavTabsContext.Provider>
    </NavTabsContainer>
  );
};

DxcNavTabs.Tab = Tab;

export default DxcNavTabs;
