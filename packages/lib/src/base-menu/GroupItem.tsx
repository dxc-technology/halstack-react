import { useContext, useId, useState } from "react";
import DxcIcon from "../icon/Icon";
import SubMenu from "./SubMenu";
import ItemAction from "./ItemAction";
import MenuItem from "./MenuItem";
import { GroupItemProps } from "./types";
import { useGroupItem } from "./useGroupItem";
import BaseMenuContext from "./BaseMenuContext";
import DxcPopover from "../popover/Popover";

const GroupItem = ({ items, ...props }: GroupItemProps) => {
  const groupMenuId = `group-menu-${useId()}`;
  const contextValue = useContext(BaseMenuContext) ?? {};
  const { groupSelected, isOpen, toggleOpen, hasPopOver, isHorizontal } = useGroupItem(
    items,
    contextValue,
    props.defaultOpen
  );
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(true);

  const toggleSubMenu = () => {
    setIsSubMenuOpen((prev) => !prev);
  };

  return hasPopOver ? (
    <>
      <DxcPopover
        offset={isHorizontal ? 16 : 0}
        align={isHorizontal ? "start" : "end"}
        side={isHorizontal ? "bottom" : "right"}
        onClose={() => {
          if (isOpen) {
            toggleOpen();
          }
        }}
        asChild
        popoverContent={
          <>
            <BaseMenuContext.Provider
              value={{ ...contextValue, displayGroupLines: false, hasPopOver: false, closePopOver: toggleOpen }}
            >
              {!isHorizontal && props.depthLevel === 0 && (
                <ItemAction
                  aria-controls={isSubMenuOpen ? groupMenuId : undefined}
                  aria-expanded={isSubMenuOpen ? true : undefined}
                  aria-pressed={groupSelected && !isSubMenuOpen}
                  collapseIcon={
                    isSubMenuOpen ? <DxcIcon icon="filled_expand_less" /> : <DxcIcon icon="filled_expand_more" />
                  }
                  onClick={() => {
                    toggleSubMenu();
                  }}
                  selected={groupSelected && !isSubMenuOpen}
                  {...props}
                  icon={undefined}
                />
              )}
              {isSubMenuOpen && (
                <SubMenu id={groupMenuId} depthLevel={props.depthLevel} isPopOver={true}>
                  {items.map((item, index) => (
                    <MenuItem
                      item={item}
                      depthLevel={isHorizontal ? props.depthLevel : props.depthLevel + 1}
                      key={`${item.label}-${index}`}
                    />
                  ))}
                </SubMenu>
              )}
            </BaseMenuContext.Provider>
          </>
        }
        isOpen={isOpen}
      >
        <ItemAction
          aria-controls={isOpen ? groupMenuId : undefined}
          aria-expanded={isOpen ? true : undefined}
          collapseIcon={isOpen ? <DxcIcon icon="filled_expand_less" /> : <DxcIcon icon="filled_expand_more" />}
          onClick={() => {
            toggleOpen();
          }}
          selected={groupSelected && !isOpen}
          {...props}
        />
      </DxcPopover>
    </>
  ) : (
    <>
      <ItemAction
        aria-controls={isOpen ? groupMenuId : undefined}
        aria-expanded={isOpen ? true : undefined}
        aria-pressed={groupSelected && !isOpen}
        collapseIcon={isOpen ? <DxcIcon icon="filled_expand_less" /> : <DxcIcon icon="filled_expand_more" />}
        onClick={() => {
          toggleOpen();
        }}
        selected={groupSelected && !isOpen}
        {...props}
      />
      {isOpen && (
        <SubMenu id={groupMenuId} depthLevel={props.depthLevel}>
          {items.map((item, index) => (
            <MenuItem item={item} depthLevel={props.depthLevel + 1} key={`${item.label}-${index}`} />
          ))}
        </SubMenu>
      )}
    </>
  );
};

export default GroupItem;
