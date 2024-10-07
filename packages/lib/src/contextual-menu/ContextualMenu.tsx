import { createContext, useLayoutEffect, useMemo, useRef, useState } from "react";
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
  SubMenuProps,
  Section,
  SectionWithId,
} from "./types";

const isGroupItem = (item: Item | GroupItem): item is GroupItem => "items" in item;
const isSection = (item?: Section | Item | GroupItem): item is Section => item && "items" in item && !("label" in item);
const addIdToItems = (items: ContextualMenuPropsType["items"]): (ItemWithId | GroupItemWithId)[] | SectionWithId[] => {
  let accId = 0;
  const innerAddIdToItems = (items: ContextualMenuPropsType["items"]) => {
    return items.map((item: Item | GroupItem | Section) =>
      isSection(item)
        ? { ...item, items: innerAddIdToItems(item.items) }
        : isGroupItem(item)
          ? { ...item, items: innerAddIdToItems(item.items) }
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

export const ContextualMenuContext = createContext<ContextualMenuContextProps | null>(null);

const DxcContextualMenu = ({ items }: ContextualMenuPropsType) => {
  const [selectedItemId, setSelectedItemId] = useState(-1);
  const contextualMenuRef = useRef(null);
  const itemsWithId = useMemo(() => addIdToItems(items), [items]);
  const colorsTheme = useTheme();

  const renderSection = (section: SectionWithId, currentSectionIndex: number, length: number) => (
    <section
      aria-label={section?.title ?? `section-${currentSectionIndex}`}
      aria-labelledby={section?.title}
      key={`section-${currentSectionIndex}`}
    >
      {section.title != null && <Title id={section.title}>{section.title}</Title>}
      <SubMenu>
        {section.items.map((item, index) => (
          <MenuItem item={item} key={`${item.label}-${index}`} />
        ))}
      </SubMenu>
      {currentSectionIndex !== length - 1 && (
        <DxcInset top="0.25rem" bottom="0.25rem">
          <DxcDivider color="lightGrey" />
        </DxcInset>
      )}
    </section>
  );

  const [firstUpdate, setFirstUpdate] = useState(true);
  useLayoutEffect(() => {
    if (selectedItemId !== -1 && firstUpdate) {
      const contextualMenuEl = contextualMenuRef?.current;
      const selectedItemEl = contextualMenuEl?.querySelector("[aria-selected='true']");
      contextualMenuEl?.scrollTo?.({ top: selectedItemEl?.offsetTop - contextualMenuEl?.clientHeight / 2 });
      setFirstUpdate(false);
    }
  }, [firstUpdate, selectedItemId]);

  return (
    <ThemeProvider theme={colorsTheme.contextualMenu}>
      <ContextualMenu ref={contextualMenuRef}>
        <ContextualMenuContext.Provider value={{ selectedItemId, setSelectedItemId }}>
          {isSection(itemsWithId[0]) ? (
            (itemsWithId as SectionWithId[]).map((item, index) => renderSection(item, index, itemsWithId.length))
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
};

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
