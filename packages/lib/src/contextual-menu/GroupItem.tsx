import { useContext, useMemo, useState, useId } from "react";
import DxcIcon from "../icon/Icon";
import SubMenu from "./SubMenu";
import ItemAction from "./ItemAction";
import MenuItem from "./MenuItem";
import { GroupItemProps } from "./types";
import ContextualMenuContext from "./ContextualMenuContext";
import { isGroupSelected } from "./utils";
import * as Popover from "@radix-ui/react-popover";

const GroupItem = ({ items, ...props }: GroupItemProps) => {
  const groupMenuId = `group-menu-${useId()}`;
  const { selectedItemId, responsiveView } = useContext(ContextualMenuContext) ?? {};
  const groupSelected = useMemo(() => isGroupSelected(items, selectedItemId), [items, selectedItemId]);
  const [isOpen, setIsOpen] = useState(groupSelected && selectedItemId === -1);

  const contextualMenuId = `sidenav-${useId()}`;

  const contextValue = useContext(ContextualMenuContext) ?? {};

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
            onClick={() => setIsOpen((isCurrentlyOpen) => !isCurrentlyOpen)}
            selected={groupSelected && !isOpen}
            {...props}
          />
        </Popover.Trigger>
        <Popover.Portal container={document.getElementById(`${contextualMenuId}-portal`)}>
          <ContextualMenuContext.Provider value={{ ...contextValue, displayGroupsLine: false, responsiveView: false }}>
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
          </ContextualMenuContext.Provider>
        </Popover.Portal>
      </Popover.Root>
      <div id={`${contextualMenuId}-portal`} style={{ position: "absolute" }} />
    </>
  ) : (
    <>
      <ItemAction
        aria-controls={isOpen ? groupMenuId : undefined}
        aria-expanded={isOpen ? true : undefined}
        aria-pressed={groupSelected && !isOpen}
        collapseIcon={isOpen ? <DxcIcon icon="filled_expand_less" /> : <DxcIcon icon="filled_expand_more" />}
        onClick={() => setIsOpen((isCurrentlyOpen) => !isCurrentlyOpen)}
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
