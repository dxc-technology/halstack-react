import ContextualMenuPropsType, {
  GroupItem,
  GroupItemProps,
  GroupItemWithId,
  Item,
  ItemWithId,
  Section as SectionType,
  SectionWithId,
} from "./types";

export const isGroupItem = (item: Item | GroupItem): item is GroupItem => "items" in item;

export const isSection = (item: SectionType | Item | GroupItem): item is SectionType =>
  "items" in item && !("label" in item);

export const addIdToItems = (
  items: ContextualMenuPropsType["items"]
): (ItemWithId | GroupItemWithId | SectionWithId)[] => {
  let accId = 0;
  const innerAddIdToItems = (
    items: ContextualMenuPropsType["items"]
  ): (ItemWithId | GroupItemWithId | SectionWithId)[] =>
    items.map((item: Item | GroupItem | SectionType) =>
      isSection(item)
        ? ({ ...item, items: innerAddIdToItems(item.items) } as SectionWithId)
        : isGroupItem(item)
          ? ({ ...item, items: innerAddIdToItems(item.items) } as GroupItemWithId)
          : { ...item, id: accId++ }
    );
  return innerAddIdToItems(items);
};

export const isGroupSelected = (items: GroupItemProps["items"], selectedItemId?: number): boolean =>
  items.some((item) => {
    if ("items" in item) return isGroupSelected(item.items, selectedItemId);
    else if (selectedItemId !== -1) return item.id === selectedItemId;
    else return (item as ItemWithId).selectedByDefault;
  });
