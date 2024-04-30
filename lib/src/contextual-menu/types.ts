import React from "react";

type SVG = React.ReactNode & React.SVGProps<SVGSVGElement>;
type CommonItemProps = {
  badge?: React.ReactElement;
  icon?: string | SVG;
  label: string;
};
type Item = CommonItemProps & {
  onSelect?: () => void;
  selectedByDefault?: boolean;
};
type GroupItem = CommonItemProps & {
  items: (Item | GroupItem)[];
};
type Section = { items: (Item | GroupItem)[]; title?: string };
type Props = {
  items: (Item | GroupItem)[] | Section[];
};

/**
 * Contextual menu internal types.
 */
type ItemWithId = Item & { id: number };
type GroupItemWithId = {
  badge?: React.ReactElement;
  icon: string | SVG;
  items: (ItemWithId | GroupItemWithId)[];
  label: string;
};
type SectionWithId = { items: (ItemWithId | GroupItemWithId)[]; title?: string };
type SingleItemProps = ItemWithId & { depthLevel: number };
type GroupItemProps = GroupItemWithId & { depthLevel: number };
type MenuItemProps = { item: ItemWithId | GroupItemWithId; depthLevel?: number };
type ItemActionProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  badge?: Item["badge"];
  collapseIcon?: React.ReactNode;
  depthLevel: number;
  icon?: Item["icon"];
  label: Item["label"];
  selected: boolean;
};
type ContextualMenuContextProps = {
  selectedItemId: number;
  setSelectedItemId: React.Dispatch<React.SetStateAction<number>>;
};

export default Props;
export type {
  ContextualMenuContextProps,
  GroupItem,
  GroupItemProps,
  GroupItemWithId,
  Item,
  ItemActionProps,
  ItemWithId,
  MenuItemProps,
  Section,
  SectionWithId,
  SingleItemProps,
};
