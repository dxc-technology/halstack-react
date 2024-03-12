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

const GroupItem = ({ ...props }: GroupItemProps) => {
  const menuId = `menu-${props.label}`;
  const [isOpen, setIsOpen] = useState(false);
  const { selectedItemId } = useContext(ContextualMenuContext);

  return (
    <>
      <ItemAction
        aria-controls={menuId}
        aria-expanded={isOpen ? true : undefined}
        collapseIcon={isOpen ? icons.arrowUp : icons.arrowDown}
        onClick={() => {
          setIsOpen((isOpen) => !isOpen);
        }}
        selected={!isOpen && isGroupSelected(props.items, selectedItemId)}
        {...props}
      />
      {isOpen && (
        <ItemsList id={menuId}>
          {props.items.map((item) => (
            <MenuItem item={item} level={props.level + 1} />
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
