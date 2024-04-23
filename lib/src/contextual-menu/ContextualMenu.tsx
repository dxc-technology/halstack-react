import React, { Fragment, createContext, useMemo, useState } from "react";
import styled from "styled-components";
import { type V4Options, v4 as uuidv4 } from "uuid";
import CoreTokens from "../common/coreTokens";
import ContextualMenuPropsType, {
  ContextualMenuContextProps,
  GroupItem,
  GroupItemWithId,
  Item,
  ItemWithId,
  Section,
  SectionWithId,
} from "./types";
import DxcDivider from "../divider/Divider";
import DxcInset from "../inset/Inset";
import MenuItem from "./MenuItem";

export const ContextualMenuContext = createContext<ContextualMenuContextProps | null>(null);

const isGroupItem = (item: Item | GroupItem): item is GroupItem => "items" in item;
const isSection = (item: Section | Item | GroupItem): item is Section => "items" in item && !("label" in item);

const addIdToItems = (items: ContextualMenuPropsType["items"]): (ItemWithId | GroupItemWithId)[] | SectionWithId[] => {
  let accId = 0;
  const innerAddIdToItems = (innerItems: ContextualMenuPropsType["items"]) =>
    innerItems.map((item: Item | GroupItem | Section) => {
      let newItem;
      if (isSection(item) || isGroupItem(item)) {
        newItem = { ...item, items: innerAddIdToItems(item.items) };
      } else {
        newItem = { ...item, id: (accId += 1) };
      }
      return newItem;
    });
  return innerAddIdToItems(items);
};

const DxcContextualMenu = ({ items }: ContextualMenuPropsType) => {
  const [selectedItemId, setSelectedItemId] = useState(-1);
  const itemsWithId = useMemo(() => addIdToItems(items), [items]);
  const contextValue = useMemo(() => ({ selectedItemId, setSelectedItemId }), [selectedItemId, setSelectedItemId]);

  const renderSection = (section: SectionWithId, currentSectionIndex: number, length: number, sectionId: V4Options) => (
    <Fragment key={`section-${sectionId}`}>
      <li role="group">
        {section.title != null && <Title>{section.title}</Title>}
        <SectionList>
          {section.items.map((item) => {
            const itemKey = uuidv4();
            return <MenuItem item={item} key={`item-${itemKey}`} />;
          })}
        </SectionList>
      </li>
      {currentSectionIndex !== length - 1 && (
        <DxcInset top="0.25rem" bottom="0.25rem">
          <DxcDivider color="lightGrey" />
        </DxcInset>
      )}
    </Fragment>
  );

  return (
    <ContextualMenu role="menu">
      <ContextualMenuContext.Provider value={contextValue}>
        {itemsWithId.map((item: GroupItemWithId | ItemWithId | SectionWithId, index: number) => {
          const itemId = uuidv4();
          return "items" in item && !("label" in item) ? (
            renderSection(item, index, itemsWithId.length, itemId)
          ) : (
            <MenuItem item={item} key={`item-${itemId}`} />
          );
        })}
      </ContextualMenuContext.Provider>
    </ContextualMenu>
  );
};

const ContextualMenu = styled.ul`
  box-sizing: border-box;
  margin: 0;
  border: 1px solid ${CoreTokens.color_grey_200};
  border-radius: 0.25rem;
  padding: ${CoreTokens.spacing_16} ${CoreTokens.spacing_8};
  display: grid;
  gap: ${CoreTokens.spacing_4};
  min-width: 248px;
  max-height: 100%;
  background-color: ${CoreTokens.color_white};
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

const Title = styled.span`
  margin: 0 0 ${CoreTokens.spacing_4} 0;
  padding: ${CoreTokens.spacing_4};
  color: ${CoreTokens.color_grey_900};
  font-family: ${CoreTokens.type_sans};
  font-size: ${CoreTokens.type_scale_03};
  font-weight: ${CoreTokens.type_semibold};
  line-height: 24px;
`;

export default DxcContextualMenu;
