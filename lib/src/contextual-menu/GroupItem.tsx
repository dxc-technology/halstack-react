import React, { useContext, useState } from "react";
import styled from "styled-components";
import CoreTokens from "../common/coreTokens";
import { GroupItemProps } from "./types";
import icons from "./Icons";
import MenuItem from "./MenuItem";
import ItemAction from "./ItemAction";
import { ContextualMenuContext } from "./ContextualMenu";

const isGroupSelected = (items: GroupItemProps["items"], selectedItemId: number) =>
  items.some((item) => ("id" in item ? item.id === selectedItemId : isGroupSelected(item.items, selectedItemId)));

const GroupItem = ({ items, label, slot, level }: GroupItemProps) => {
  const menuId = `menu-${label}`;
  const [isOpen, setIsOpen] = useState(false);
  const { selectedItemId } = useContext(ContextualMenuContext);

  return (
    <>
      <ItemAction
        aria-controls={menuId}
        aria-expanded={isOpen ? true : undefined}
        icon={isOpen ? icons.arrowUp : icons.arrowDown}
        label={label}
        level={level}
        onClick={() => {
          setIsOpen((isOpen) => !isOpen);
        }}
        selected={!isOpen && isGroupSelected(items, selectedItemId)}
        slot={slot}
      />
      {isOpen && (
        <ItemsList id={menuId}>
          {items.map((item) => (
            <MenuItem item={item} level={level + 1} />
          ))}
        </ItemsList>
      )}
    </>
  );
};

const ItemsList = styled.ul`
  padding: 0;
  display: grid;
  gap: ${CoreTokens.spacing_4};
  list-style: none;
`;

export default React.memo(GroupItem);
