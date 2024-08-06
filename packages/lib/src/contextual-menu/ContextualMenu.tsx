import { Fragment, createContext, useLayoutEffect, useMemo, useRef, useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import CoreTokens from "../common/coreTokens";
import DxcDivider from "../divider/Divider";
import DxcInset from "../inset/Inset";
import useTheme from "../useTheme";
import MenuItem from "./MenuItem";
import ContextualMenuPropsType, {
  ContextualMenuContextProps,
  GroupItem,
  GroupItemWithId,
  Item,
  ItemWithId,
  Section,
  SectionWithId,
} from "./types";

export const ContextualMenuContext = createContext<ContextualMenuContextProps | null>(null);

const isGroupItem = (item: Item | GroupItem): item is GroupItem => "items" in item;
const isSection = (item: Section | Item | GroupItem): item is Section => "items" in item && !("label" in item);

const addIdToItems = (items: ContextualMenuPropsType["items"]): (ItemWithId | GroupItemWithId | SectionWithId)[] => {
  let accId = 0;

  const innerAddIdToItems = (
    innerItems: ContextualMenuPropsType["items"]
  ): (ItemWithId | GroupItemWithId | SectionWithId)[] =>
    innerItems.map((item: Item | GroupItem | Section) => {
      let newItem;
      if (isSection(item)) {
        newItem = {
          ...item,
          id: (accId += 1),
          items: innerAddIdToItems(item.items),
        } as SectionWithId;
      } else if (isGroupItem(item)) {
        newItem = {
          ...item,
          id: (accId += 1),
          items: innerAddIdToItems(item.items),
        } as GroupItemWithId;
      } else {
        newItem = { ...item, id: (accId += 1) } as ItemWithId;
      }
      return newItem;
    });
  return innerAddIdToItems(items);
};

const DxcContextualMenu = ({ items }: ContextualMenuPropsType) => {
  const [selectedItemId, setSelectedItemId] = useState(-1);
  const contextualMenuRef = useRef<HTMLUListElement | null>(null);
  const itemsWithId = useMemo(() => addIdToItems(items), [items]);
  const contextValue = useMemo(() => ({ selectedItemId, setSelectedItemId }), [selectedItemId, setSelectedItemId]);
  const colorsTheme = useTheme();

  const renderSection = (section: SectionWithId, currentSectionIndex: number, length: number) => (
    <Fragment key={`section-${currentSectionIndex}`}>
      <li role="group" aria-labelledby={section.title}>
        {section.title != null && <Title id={section.title}>{section.title}</Title>}
        <SectionList>
          {section.items.map((item, index) => (
            <MenuItem item={item} key={`item-${index}`} />
          ))}
        </SectionList>
      </li>
      {currentSectionIndex !== length - 1 && (
        <DxcInset top="0.25rem" bottom="0.25rem">
          <DxcDivider color="lightGrey" />
        </DxcInset>
      )}
    </Fragment>
  );

  const [firstUpdate, setFirstUpdate] = useState(true);
  useLayoutEffect(() => {
    if (selectedItemId !== -1 && firstUpdate) {
      const contextualMenuEl = contextualMenuRef?.current;
      const selectedItemEl = contextualMenuEl?.querySelector("[aria-selected='true']") as HTMLUListElement;
      contextualMenuEl?.scrollTo?.({
        top: (selectedItemEl?.offsetTop || 0) - (contextualMenuEl?.clientHeight || 0) / 2,
      });
      setFirstUpdate(false);
    }
  }, [firstUpdate, selectedItemId]);

  return (
    <ThemeProvider theme={colorsTheme?.contextualMenu}>
      <ContextualMenu role="menu" ref={contextualMenuRef}>
        <ContextualMenuContext.Provider value={contextValue}>
          {itemsWithId.map((item: GroupItemWithId | ItemWithId | SectionWithId, index: number) =>
            "items" in item && !("label" in item) ? (
              renderSection(item, index, itemsWithId.length)
            ) : (
              <MenuItem item={item} key={`${item.label}-${index}`} />
            )
          )}
        </ContextualMenuContext.Provider>
      </ContextualMenu>
    </ThemeProvider>
  );
};

const ContextualMenu = styled.ul`
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

const SectionList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  gap: ${CoreTokens.spacing_4};
`;

const Title = styled.h2`
  margin: 0 0 ${CoreTokens.spacing_4} 0;
  padding: ${CoreTokens.spacing_4};
  color: ${({ theme }) => theme.sectionTitleFontColor};
  font-family: ${({ theme }) => theme.fontFamily};
  font-size: ${({ theme }) => theme.sectionTitleFontSize};
  font-style: ${({ theme }) => theme.sectionTitleFontStyle};
  font-weight: ${({ theme }) => theme.sectionTitleFontWeight};
  line-height: ${({ theme }) => theme.sectionTitleLineHeight};
`;

export default DxcContextualMenu;
