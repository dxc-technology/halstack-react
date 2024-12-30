import { useContext, useMemo, useState, memo, useId } from "react";
import DxcIcon from "../icon/Icon";
import { SubMenu } from "./ContextualMenu";
import ItemAction from "./ItemAction";
import MenuItem from "./MenuItem";
import { GroupItemProps } from "./types";
import ContextualMenuContext from "./ContextualMenuContext";

const isGroupSelected = (items: GroupItemProps["items"], selectedItemId?: number): boolean =>
  items.some((item) => {
    if ("items" in item) {
      return isGroupSelected(item.items, selectedItemId);
    } else if (selectedItemId !== -1) {
      return item.id === selectedItemId;
    } else {
      return item.selectedByDefault;
    }
  });

const GroupItem = ({ items, ...props }: GroupItemProps) => {
  const groupMenuId = `group-menu-${useId()}`;
  const { selectedItemId } = useContext(ContextualMenuContext) ?? {};
  const groupSelected = useMemo(() => isGroupSelected(items, selectedItemId), [items, selectedItemId]);
  const [isOpen, setIsOpen] = useState(groupSelected && selectedItemId === -1);

  return (
    <>
      <ItemAction
        aria-controls={isOpen ? groupMenuId : undefined}
        aria-expanded={isOpen ? true : undefined}
        aria-pressed={groupSelected && !isOpen}
        collapseIcon={isOpen ? <DxcIcon icon="filled_expand_less" /> : <DxcIcon icon="filled_expand_more" />}
        onClick={() => {
          setIsOpen((isCurrentlyOpen) => !isCurrentlyOpen);
        }}
        selected={groupSelected && !isOpen}
        {...props}
      />
      {isOpen && (
        <SubMenu id={groupMenuId}>
          {items.map((item, index) => (
            <MenuItem item={item} depthLevel={props.depthLevel + 1} key={`${item.label}-${index}`} />
          ))}
        </SubMenu>
      )}
    </>
  );
};

export default memo(GroupItem);
