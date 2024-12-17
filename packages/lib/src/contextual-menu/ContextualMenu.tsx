import { useLayoutEffect, useMemo, useRef, useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import CoreTokens from "../common/coreTokens";
import useTheme from "../useTheme";
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
  border: 1px solid ${({ theme }) => theme.borderColor};
  border-radius: 0.25rem;
  padding: ${CoreTokens.spacing_16} ${CoreTokens.spacing_8};
  display: grid;
  gap: ${CoreTokens.spacing_4};
  min-width: 248px;
  max-height: 100%;
  background-color: ${({ theme }) => theme.backgroundColor};
  overflow-y: auto;
  overflow-x: hidden;
  &::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${CoreTokens.color_grey_700};
    border-radius: 0.25rem;
  }
  &::-webkit-scrollbar-track {
    background-color: ${CoreTokens.color_grey_300};
    border-radius: 0.25rem;
  }
`;

const StyledSubMenu = styled.ul`
  margin: 0;
  padding: 0;
  display: grid;
  gap: ${CoreTokens.spacing_4};
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
  const colorsTheme = useTheme();

  const [firstUpdate, setFirstUpdate] = useState(true);
  useLayoutEffect(() => {
    if (selectedItemId !== -1 && firstUpdate) {
      const contextualMenuEl = contextualMenuRef?.current;
      const selectedItemEl = contextualMenuEl?.querySelector("[aria-pressed='true']") as HTMLButtonElement;
      contextualMenuEl?.scrollTo?.({
        top: (selectedItemEl?.offsetTop ?? 0) - (contextualMenuEl?.clientHeight ?? 0) / 2,
      });
      setFirstUpdate(false);
    }
  }, [firstUpdate, selectedItemId]);

  return (
    <ThemeProvider theme={colorsTheme.contextualMenu}>
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
    </ThemeProvider>
  );
}
