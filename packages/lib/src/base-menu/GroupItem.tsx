import { useContext, useId } from "react";
import DxcIcon from "../icon/Icon";
import SubMenu from "./SubMenu";
import ItemAction from "./ItemAction";
import MenuItem from "./MenuItem";
import { GroupItemProps } from "./types";
import * as Popover from "@radix-ui/react-popover";
import { useGroupItem } from "./useGroupItem";
import BaseMenuContext from "./BaseMenuContext";

const GroupItem = ({ items, ...props }: GroupItemProps) => {
  const groupMenuId = `group-menu-${useId()}`;

  const NavigationTreeId = `sidenav-${useId()}`;
  const contextValue = useContext(BaseMenuContext) ?? {};
  const { groupSelected, isOpen, toggleOpen, responsiveView } = useGroupItem(items, contextValue);

  // TODO: SET A FIXED WIDTH TO PREVENT MOVING CONTENT WHEN EXPANDING/COLLAPSING IN RESPONSIVEVIEW
  return responsiveView ? (
    <>
      <Popover.Root open={isOpen}>
        <Popover.Trigger
          aria-controls={undefined}
          aria-expanded={undefined}
          aria-haspopup={undefined}
          asChild
          type={undefined}
        >
          <ItemAction
            aria-controls={isOpen ? groupMenuId : undefined}
            aria-expanded={isOpen ? true : undefined}
            aria-pressed={groupSelected && !isOpen}
            collapseIcon={isOpen ? <DxcIcon icon="filled_expand_less" /> : <DxcIcon icon="filled_expand_more" />}
            onClick={() => toggleOpen()}
            selected={groupSelected && !isOpen}
            {...props}
          />
        </Popover.Trigger>
        <Popover.Portal container={document.getElementById(`${NavigationTreeId}-portal`)}>
          <BaseMenuContext.Provider value={{ ...contextValue, displayGroupLines: false, responsiveView: false }}>
            <Popover.Content
              aria-label="Group details"
              onCloseAutoFocus={(event) => {
                event.preventDefault();
              }}
              onOpenAutoFocus={(event) => {
                event.preventDefault();
              }}
              align="start"
              side="right"
              style={{ zIndex: "var(--z-contextualmenu)" }}
            >
              <SubMenu id={groupMenuId} depthLevel={props.depthLevel}>
                {items.map((item, index) => (
                  <MenuItem item={item} depthLevel={props.depthLevel + 1} key={`${item.label}-${index}`} />
                ))}
              </SubMenu>
            </Popover.Content>
          </BaseMenuContext.Provider>
        </Popover.Portal>
      </Popover.Root>
      <div id={`${NavigationTreeId}-portal`} style={{ position: "absolute" }} />
    </>
  ) : (
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
