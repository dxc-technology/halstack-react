import { useLayoutEffect, useMemo, useRef, useState } from "react";
import styled from "styled-components";
import MenuItem from "./MenuItem";
import ContextualMenuPropsType, {
  GroupItem,
  GroupItemWithId,
  Item,
  ItemWithId,
  SubMenuProps,
  Section as SectionType,
  SectionWithId,
} from "./types";
import Section from "./Section";
import ContextualMenuContext from "./ContextualMenuContext";

const ContextualMenu = styled.div`
  box-sizing: border-box;
  margin: 0;
  border: var(--border-width-s) solid var(--border-color-neutral-lighter);
  border-radius: var(--border-radius-s);
  padding: var(--spacing-padding-m) var(--spacing-padding-xs);
  display: flex;
  flex-direction: column;
  gap: var(--spacing-gap-xs);
  min-width: 240px;
  max-height: 100%;
  background-color: var(--color-bg-neutral-lightest);
  overflow-y: auto;
  overflow-x: hidden;
  &::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: var(--color-fg-neutral-strong);
    border-radius: var(--border-radius-s);
  }
  &::-webkit-scrollbar-track {
    background-color: var(--color-bg-neutral-light);
    border-radius: 0 var(--border-radius-s) var(--border-radius-s) 0;
  }
`;

const StyledSubMenu = styled.ul`
  margin: 0;
  padding: 0;
  display: grid;
  gap: var(--spacing-gap-xs);
  list-style: none;
`;

const isGroupItem = (item: Item | GroupItem): item is GroupItem => "items" in item;
const isSection = (item: SectionType | Item | GroupItem): item is SectionType => "items" in item && !("label" in item);
const addIdToItems = (items: ContextualMenuPropsType["items"]): (ItemWithId | GroupItemWithId | SectionWithId)[] => {
  let accId = 0;
  const innerAddIdToItems = (
    items: ContextualMenuPropsType["items"]
  ): (ItemWithId | GroupItemWithId | SectionWithId)[] => {
    return items.map((item: Item | GroupItem | SectionType) =>
      isSection(item)
        ? ({ ...item, items: innerAddIdToItems(item.items) } as SectionWithId)
        : isGroupItem(item)
          ? ({ ...item, items: innerAddIdToItems(item.items) } as GroupItemWithId)
          : { ...item, id: accId++ }
    );
  };
  return innerAddIdToItems(items);
};

export const SubMenu = ({ children, id }: SubMenuProps) => (
  <StyledSubMenu id={id} role="menu">
    {children}
  </StyledSubMenu>
);

export default function DxcContextualMenu({ items }: ContextualMenuPropsType) {
  const [selectedItemId, setSelectedItemId] = useState(-1);
  const contextualMenuRef = useRef<HTMLDivElement | null>(null);
  const itemsWithId = useMemo(() => addIdToItems(items), [items]);
  const contextValue = useMemo(() => ({ selectedItemId, setSelectedItemId }), [selectedItemId, setSelectedItemId]);

  const [firstUpdate, setFirstUpdate] = useState(true);
  useLayoutEffect(() => {
    if (selectedItemId !== -1 && firstUpdate) {
      const contextualMenuEl = contextualMenuRef.current;
      const selectedItemEl = contextualMenuEl?.querySelector("[aria-pressed='true']") as HTMLButtonElement;
      contextualMenuEl?.scrollTo?.({
        top: (selectedItemEl?.offsetTop ?? 0) - (contextualMenuEl?.clientHeight ?? 0) / 2,
      });
      setFirstUpdate(false);
    }
  }, [firstUpdate, selectedItemId]);

  return (
    <ContextualMenu ref={contextualMenuRef}>
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
    </ContextualMenu>
  );
}
