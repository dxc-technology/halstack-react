import { useId, useMemo, useState } from "react";
import { ContextualMenuContextProps, GroupItemProps as ContextItemProps } from "../contextual-menu/types";
import { NavigationTreeContextProps, GroupItemProps as NavGroupItemProps } from "../navigation-tree/types";

const isGroupSelected = (
  items: ContextItemProps["items"] | NavGroupItemProps["items"],
  selectedItemId?: number
): boolean =>
  items.some((item) => {
    if ("items" in item) return isGroupSelected(item.items, selectedItemId);
    else if (selectedItemId !== -1) return item.id === selectedItemId;
    else return !!item.selected;
  });

const hasResponsiveView = (
  ctx: ContextualMenuContextProps | NavigationTreeContextProps
): ctx is NavigationTreeContextProps => "responsiveView" in ctx;

export const useGroupItem = (
  items: ContextItemProps["items"] | NavGroupItemProps["items"],
  context: ContextualMenuContextProps | NavigationTreeContextProps
) => {
  const groupMenuId = `group-menu-${useId()}`;
  const { selectedItemId } = context ?? {};
  const groupSelected = useMemo(() => isGroupSelected(items, selectedItemId), [items, selectedItemId]);
  const [isOpen, setIsOpen] = useState(groupSelected && selectedItemId === -1);

  const toggleOpen = () => setIsOpen((prev) => !prev);

  return {
    groupMenuId,
    groupSelected,
    isOpen,
    toggleOpen,
    responsiveView: hasResponsiveView(context) ? context.responsiveView : undefined,
  };
};
