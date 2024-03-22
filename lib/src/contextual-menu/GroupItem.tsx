import React, { useContext, useMemo, useState } from "react";
import styled from "styled-components";
import CoreTokens from "../common/coreTokens";
import { GroupItemProps } from "./types";
import MenuItem from "./MenuItem";
import ItemAction from "./ItemAction";
import { ContextualMenuContext } from "./ContextualMenu";
import DxcIcon from "../icon/Icon";

const isGroupSelected = (items: GroupItemProps["items"], selectedItemId: number): boolean =>
  items.some((item) => ("id" in item ? item.id === selectedItemId : isGroupSelected(item.items, selectedItemId)));

const GroupItem = ({ items, ...props }: GroupItemProps) => {
  const groupMenuId = `group-menu-${props.label}`;
  const [isOpen, setIsOpen] = useState(false);
  const { selectedItemId } = useContext(ContextualMenuContext);
  const selected = useMemo(() => !isOpen && isGroupSelected(items, selectedItemId), [isOpen, items, selectedItemId]);

  return (
    <>
      <ItemAction
        aria-controls={groupMenuId}
        aria-expanded={isOpen ? true : undefined}
        aria-selected={selected}
        collapseIcon={isOpen ? <DxcIcon icon="filled_expand_less" /> : <DxcIcon icon="filled_expand_more" />}
        onClick={() => {
          setIsOpen((isOpen) => !isOpen);
        }}
        selected={selected}
        {...props}
      />
      {isOpen && (
        <ItemsList id={groupMenuId}>
          {items.map((item) => (
            <MenuItem item={item} depthLevel={props.depthLevel + 1} />
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
