import ContextualMenuPropsType, {
  BaseGroupItem,
  BaseGroupItemProps,
  BaseGroupItemWithId,
  BaseItem,
  BaseItemWithId,
  BaseSection,
  BaseSectionWithId,
} from "./types";

export const isGroupItem = (item: BaseItem | BaseGroupItem): item is BaseGroupItem => "items" in item;

export const isSection = (item: BaseSection | BaseItem | BaseGroupItem): item is BaseSection =>
  "items" in item && !("label" in item);

export const addIdToItems = (
  items: ContextualMenuPropsType["items"]
): (BaseItemWithId | BaseGroupItemWithId | BaseSectionWithId)[] => {
  let accId = 0;
  const innerAddIdToItems = (
    items: ContextualMenuPropsType["items"]
  ): (BaseItemWithId | BaseGroupItemWithId | BaseSectionWithId)[] =>
    items.map((item: BaseItem | BaseGroupItem | BaseSection) =>
      isSection(item)
        ? ({ ...item, items: innerAddIdToItems(item.items) } as BaseSectionWithId)
        : isGroupItem(item)
          ? ({ ...item, items: innerAddIdToItems(item.items) } as BaseGroupItemWithId)
          : { ...item, id: accId++ }
    );
  return innerAddIdToItems(items);
};

export const isGroupSelected = (items: BaseGroupItemProps["items"], selectedItemId?: number): boolean =>
  items.some((item) => {
    if ("items" in item) return isGroupSelected(item.items, selectedItemId);
    else if (selectedItemId !== -1) return item.id === selectedItemId;
    else return item.selected;
  });
