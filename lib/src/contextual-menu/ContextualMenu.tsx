import React, { Fragment, createContext, useMemo, useState } from "react";
import styled from "styled-components";
import CoreTokens from "../common/coreTokens";
import ContextualMenuPropsType, {
  Item,
  Section as SectionType,
  BadgeProps,
  ContextualMenuContextProps,
  Item as ItemType,
  GroupItem as GroupItemType,
  GroupItemWithId,
  ItemWithId,
  SectionWithId,
  ItemsPropWithId,
} from "./types";
import DxcBadge from "../badge/Badge";
import DxcDivider from "../divider/Divider";
import DxcInset from "../inset/Inset";
import MenuItem from "./MenuItem";

export const ContextualMenuContext = createContext<ContextualMenuContextProps | null>(null);

const isSection = (item: SectionType | Item | GroupItemType): item is SectionType =>
  "items" in item && !("label" in item);
const isGroupItem = (item: ItemType | GroupItemType): item is GroupItemType => "items" in item;

const addIdToItems = (items: ContextualMenuPropsType["items"]): ItemsPropWithId => {
  let accId = 0;
  const innerAddIdToItems = (items: ContextualMenuPropsType["items"]) => {
    return items.map((item) =>
      isSection(item)
        ? { ...item, items: innerAddIdToItems(item.items) }
        : isGroupItem(item)
        ? { ...item, items: innerAddIdToItems(item.items) }
        : { ...item, id: accId++ }
    );
  };
  return innerAddIdToItems(items);
};

const DxcContextualMenu = ({ items }: ContextualMenuPropsType) => {
  const [selectedItemId, setSelectedItemId] = useState(-1);
  const itemsWithId = useMemo(() => addIdToItems(items), [items]);

  const renderSection = (section: SectionWithId, currentSectionIndex: number, length: number) => (
    <Fragment key={`section-${currentSectionIndex}`}>
      <li role="group">
        {section.title != null && <Title>{section.title}</Title>}
        <Section>
          {section.items.map((item) => (
            <MenuItem item={item} />
          ))}
        </Section>
      </li>
      {currentSectionIndex !== length - 1 && (
        <DxcInset top="0.25rem" bottom="0.25rem">
          <DxcDivider color="lightGrey" decorative />
        </DxcInset>
      )}
    </Fragment>
  );

  return (
    <Menu role="menu">
      <ContextualMenuContext.Provider value={{ selectedItemId, setSelectedItemId }}>
        {itemsWithId.map((item: GroupItemWithId | ItemWithId | SectionWithId, index: number) =>
          "items" in item && !("label" in item) ? (
            renderSection(item, index, itemsWithId.length)
          ) : (
            <MenuItem item={item} />
          )
        )}
      </ContextualMenuContext.Provider>
    </Menu>
  );
};

const Menu = styled.ul`
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

const Section = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  gap: ${CoreTokens.spacing_4};
`;

const Title = styled.h2`
  margin: 0 0 ${CoreTokens.spacing_4} 0;
  padding: ${CoreTokens.spacing_4};
  color: ${CoreTokens.color_grey_900};
  font-family: ${CoreTokens.type_sans};
  font-size: ${CoreTokens.type_scale_03};
  font-weight: ${CoreTokens.type_semibold};
  line-height: 24px;
`;

DxcContextualMenu.Badge = (props: BadgeProps) => <DxcBadge {...props} size="small" />;

export default DxcContextualMenu;
