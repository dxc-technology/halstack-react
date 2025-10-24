import { useId, useMemo, useState } from "react";
import { BaseMenuContextProps, GroupItemProps } from "./types";

const isGroupSelected = (items: GroupItemProps["items"], selectedItemId?: number): boolean =>
  items.some((item) => {
    if ("items" in item) return isGroupSelected(item.items, selectedItemId);
    else if (selectedItemId !== -1) return item.id === selectedItemId;
    else return !!item.selected;
  });

export const useGroupItem = (items: GroupItemProps["items"], context: BaseMenuContextProps) => {
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
    responsiveView: context.responsiveView,
  };
};
