import { useLayoutEffect, useMemo, useRef, useState } from "react";
import styled from "@emotion/styled";
import MenuItem from "./MenuItem";
import ContextualMenuPropsType, { GroupItemWithId, ItemWithId, SectionWithId } from "./types";
import Section from "./Section";
import ContextualMenuContext from "./ContextualMenuContext";
import scrollbarStyles from "../styles/scroll";
import { addIdToItems, isSection } from "./utils";
import SubMenu from "./SubMenu";

const ContextualMenuContainer = styled.div<{ displayBorder: boolean }>`
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

export default function DxcContextualMenu({
  items,
  displayBorder = true,
  displayGroupLines = false,
  displayControlsAfter = false,
  responsiveView = false,
}: ContextualMenuPropsType) {
  const [firstUpdate, setFirstUpdate] = useState(true);
  const [selectedItemId, setSelectedItemId] = useState(-1);
  const contextualMenuRef = useRef<HTMLDivElement | null>(null);
  const itemsWithId = useMemo(() => addIdToItems(items), [items]);
  const contextValue = useMemo(
    () => ({ selectedItemId, setSelectedItemId, displayGroupLines, displayControlsAfter, responsiveView }),
    [selectedItemId, setSelectedItemId, displayGroupLines, displayControlsAfter, responsiveView]
  );

  useLayoutEffect(() => {
    if (selectedItemId !== -1 && firstUpdate) {
      const contextualMenuEl = contextualMenuRef.current;
      const selectedItemEl = contextualMenuEl?.querySelector("[aria-pressed='true']");
      if (selectedItemEl instanceof HTMLButtonElement) {
        contextualMenuEl?.scrollTo?.({
          top: (selectedItemEl?.offsetTop ?? 0) - (contextualMenuEl?.clientHeight ?? 0) / 2,
        });
      }
      setFirstUpdate(false);
    }
  }, [firstUpdate, selectedItemId]);

  return (
    <ContextualMenuContainer displayBorder={displayBorder} ref={contextualMenuRef}>
      <ContextualMenuContext.Provider value={contextValue}>
        {itemsWithId[0] && isSection(itemsWithId[0]) ? (
          (itemsWithId as SectionWithId[]).map((item, index) => (
            <Section key={`section-${index}`} section={item} index={index} length={itemsWithId.length} />
          ))
        ) : (
          <SubMenu>
            {(itemsWithId as (GroupItemWithId | ItemWithId)[]).map((item, index) => (
              <MenuItem item={item} key={`${item.label}-${index}`} />
            ))}
          </SubMenu>
        )}
      </ContextualMenuContext.Provider>
    </ContextualMenuContainer>
  );
}
