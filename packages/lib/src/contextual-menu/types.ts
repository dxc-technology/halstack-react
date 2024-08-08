import { ButtonHTMLAttributes, Dispatch, ReactElement, ReactNode, SetStateAction, SVGProps } from "react";

type SVG = ReactNode & SVGProps<SVGSVGElement>;
type CommonItemProps = {
  badge?: ReactElement;
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
  /**
   * Array of items to be displayed in the Contextual menu.
   * Each item can be a single/simple item, a group item or a section.
   */
  items: (Item | GroupItem)[] | Section[];
};

/**
 * Contextual menu internal types.
 */
type ItemWithId = Item & { id: number };
type GroupItemWithId = {
  badge?: ReactElement;
  icon: string | SVG;
  items: (ItemWithId | GroupItemWithId)[];
  label: string;
};
type SectionWithId = {
  items: (ItemWithId | GroupItemWithId)[];
  title?: string;
};
type SingleItemProps = ItemWithId & { depthLevel: number };
type GroupItemProps = GroupItemWithId & { depthLevel: number };
type MenuItemProps = { item: ItemWithId | GroupItemWithId; depthLevel?: number };
type ItemActionProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  badge?: Item["badge"];
  collapseIcon?: ReactNode;
  depthLevel: number;
  icon?: Item["icon"];
  label: Item["label"];
  selected: boolean;
};
type ContextualMenuContextProps = {
  selectedItemId: number;
  setSelectedItemId: Dispatch<SetStateAction<number>>;
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
