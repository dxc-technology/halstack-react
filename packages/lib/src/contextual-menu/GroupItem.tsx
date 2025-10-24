import { useContext, useId } from "react";
import DxcIcon from "../icon/Icon";
import SubMenu from "./SubMenu";
import ItemAction from "./ItemAction";
import MenuItem from "./MenuItem";
import { GroupItemProps } from "./types";
import ContextualMenuContext from "./ContextualMenuContext";
import { useGroupItem } from "../utils/useGroupItem";

const GroupItem = ({ items, ...props }: GroupItemProps) => {
  const groupMenuId = `group-menu-${useId()}`;

  const contextValue = useContext(ContextualMenuContext) ?? {};
  const { groupSelected, isOpen, toggleOpen } = useGroupItem(items, contextValue);
  return (
    <>
      <ItemAction
        aria-controls={isOpen ? groupMenuId : undefined}
        aria-expanded={isOpen ? true : undefined}
        aria-pressed={groupSelected && !isOpen}
        collapseIcon={isOpen ? <DxcIcon icon="filled_expand_less" /> : <DxcIcon icon="filled_expand_more" />}
        onClick={() => toggleOpen()}
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

export default GroupItem;
