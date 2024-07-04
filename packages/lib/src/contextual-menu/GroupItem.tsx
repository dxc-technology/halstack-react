import { useContext, useMemo, useState, memo } from "react";
import styled from "styled-components";
import CoreTokens from "../common/coreTokens";
import DxcIcon from "../icon/Icon";
import { ContextualMenuContext } from "./ContextualMenu";
import ItemAction from "./ItemAction";
import MenuItem from "./MenuItem";
import { GroupItemProps, ItemWithId } from "./types";

const isGroupSelected = (items: GroupItemProps["items"], selectedItemId: number): boolean =>
  items.some((item) =>
    "items" in item
      ? isGroupSelected(item.items, selectedItemId)
      : selectedItemId !== -1
        ? item.id === selectedItemId
        : (item as ItemWithId).selectedByDefault
  );

const GroupItem = ({ items, ...props }: GroupItemProps) => {
  const groupMenuId = `group-menu-${props.label}`;
  const { selectedItemId } = useContext(ContextualMenuContext);
  const groupSelected = useMemo(() => isGroupSelected(items, selectedItemId), [items, selectedItemId]);
  const [isOpen, setIsOpen] = useState(groupSelected && selectedItemId === -1);

  return (
    <>
      <ItemAction
        aria-controls={groupMenuId}
        aria-expanded={isOpen ? true : undefined}
        aria-selected={groupSelected && !isOpen}
        collapseIcon={isOpen ? <DxcIcon icon="filled_expand_less" /> : <DxcIcon icon="filled_expand_more" />}
        onClick={() => {
          setIsOpen((isCurrentlyOpen) => !isCurrentlyOpen);
        }}
        selected={groupSelected && !isOpen}
        {...props}
      />
      {isOpen && (
        <ItemsList id={groupMenuId}>
          {items.map((item, index) => (
            <MenuItem key={`${groupMenuId}-${index}`} item={item} depthLevel={props.depthLevel + 1} />
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

export default memo(GroupItem);
