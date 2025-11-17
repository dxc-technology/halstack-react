import { useLayoutEffect, useMemo, useRef, useState } from "react";
import styled from "@emotion/styled";
import MenuItem from "../base-menu/MenuItem";
import NavigationTreePropsType, { GroupItemWithId, ItemWithId, SectionWithId } from "./types";
import Section from "../base-menu/Section";
import NavigationTreeContext from "../base-menu/BaseMenuContext";
import scrollbarStyles from "../styles/scroll";
import { addIdToItems, isSection } from "../base-menu/utils";
import SubMenu from "../base-menu/SubMenu";

const NavigationTreeContainer = styled.div<{ displayBorder: boolean }>`
  box-sizing: border-box;
  margin: 0;
  display: grid;
  gap: var(--spacing-gap-xs);
  /* min-width: 248px; */
  max-height: 100%;
  background-color: var(--color-bg-neutral-lightest);
  overflow-y: auto;
  overflow-x: hidden;
  ${scrollbarStyles};
  ${({ displayBorder }) =>
    displayBorder &&
    `
      border: var(--border-width-s) var(--border-style-default) var(--border-color-neutral-lighter);
      border-radius: var(--border-radius-s);
      padding: var(--spacing-padding-m) var(--spacing-padding-xs);
    `}
`;

export default function DxcNavigationTree({
  items,
  displayBorder = true,
  displayGroupLines = false,
  displayControlsAfter = false,
  hasPopOver = false,
  isHorizontal = false,
}: NavigationTreePropsType) {
  const [firstUpdate, setFirstUpdate] = useState(true);
  const [selectedItemId, setSelectedItemId] = useState(-1);
  const NavigationTreeRef = useRef<HTMLDivElement | null>(null);
  const itemsWithId = useMemo(() => addIdToItems(items), [items]);
  const contextValue = useMemo(
    () => ({
      selectedItemId,
      setSelectedItemId,
      displayGroupLines,
      displayControlsAfter,
      hasPopOver,
      isHorizontal,
    }),
    [selectedItemId, setSelectedItemId, displayGroupLines, displayControlsAfter, hasPopOver, isHorizontal]
  );

  useLayoutEffect(() => {
    if (selectedItemId !== -1 && firstUpdate) {
      const NavigationTreeEl = NavigationTreeRef.current;
      const selectedItemEl = NavigationTreeEl?.querySelector("[aria-pressed='true']");
      if (selectedItemEl instanceof HTMLButtonElement) {
        NavigationTreeEl?.scrollTo?.({
          top: (selectedItemEl?.offsetTop ?? 0) - (NavigationTreeEl?.clientHeight ?? 0) / 2,
        });
      }
      setFirstUpdate(false);
    }
  }, [firstUpdate, selectedItemId]);

  return (
    <NavigationTreeContainer displayBorder={displayBorder} ref={NavigationTreeRef}>
      <NavigationTreeContext.Provider value={contextValue}>
        {itemsWithId[0] && isSection(itemsWithId[0]) ? (
          (itemsWithId as SectionWithId[]).map((item, index) => (
            <Section key={`section-${index}`} section={item} index={index} length={itemsWithId.length} />
          ))
        ) : (
          <SubMenu isHorizontal={isHorizontal}>
            {(itemsWithId as (GroupItemWithId | ItemWithId)[]).map((item, index) => (
              <MenuItem item={item} key={`${item.label}-${index}`} />
            ))}
          </SubMenu>
        )}
      </NavigationTreeContext.Provider>
    </NavigationTreeContainer>
  );
}
