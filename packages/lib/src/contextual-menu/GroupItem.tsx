import { useContext, useMemo, useState, memo } from "react";
import DxcIcon from "../icon/Icon";
import { ContextualMenuContext, List } from "./ContextualMenu";
import ItemAction from "./ItemAction";
import MenuItem from "./MenuItem";
import { GroupItemProps, ItemWithId } from "./types";

const isGroupSelected = (items: GroupItemProps["items"], selectedItemId: number): boolean =>
  items.some((item) => {
    if ("items" in item) return isGroupSelected(item.items, selectedItemId);
    else if (selectedItemId !== -1) return item.id === selectedItemId;
    else return (item as ItemWithId).selectedByDefault;
  });

const GroupItem = ({ items, ...props }: GroupItemProps) => {
  const groupMenuId = `group-menu-${props.label}`;
  const { selectedItemId } = useContext(ContextualMenuContext);
  const groupSelected = useMemo(() => isGroupSelected(items, selectedItemId), [items, selectedItemId]);
  const [isOpen, setIsOpen] = useState(groupSelected && selectedItemId === -1 ? true : false);

  return (
    <>
      <ItemAction
        aria-controls={groupMenuId}
        aria-expanded={isOpen ? true : undefined}
        aria-selected={groupSelected && !isOpen}
        collapseIcon={isOpen ? <DxcIcon icon="filled_expand_less" /> : <DxcIcon icon="filled_expand_more" />}
        onClick={() => {
          setIsOpen((isOpen) => !isOpen);
        }}
        selected={groupSelected && !isOpen}
        {...props}
      />
      {isOpen && (
        <List id={groupMenuId}>
          {items.map((item, index) => (
            <MenuItem item={item} depthLevel={props.depthLevel + 1} key={`${item.label}-${index}`} />
          ))}
        </List>
      )}
    </>
  );
};

export default memo(GroupItem);
