import { ButtonHTMLAttributes, Dispatch, ReactElement, ReactNode, SetStateAction } from "react";
import { SVG } from "../common/utils";

type CommonItemProps = {
  badge?: ReactElement;
  icon?: string | SVG;
  label: string;
};

type RenderItemProps = {
  /** Whether the item is selected (for styling) */
  // selected: boolean;
  /** The default rendered content (label, icon, badge, etc.) */
  children: React.ReactNode;
};

type Item = CommonItemProps & {
  onSelect?: () => void;
  selected?: boolean;
  href?: string;
  renderItem?: (props: RenderItemProps) => React.ReactNode;
};
type GroupItem = CommonItemProps & {
  items: (Item | GroupItem)[];
};
type Section = { items: (Item | GroupItem)[]; title?: string };
type Props = {
  /**
   * Array of items to be displayed in the navigation tree.
   * Each item can be a single/simple item, a group item or a section.
   */
  items: (Item | GroupItem)[] | Section[];
  /**
   * If true the navigation tree will be displayed with a border.
   */
  displayBorder?: boolean;
  /**
   * If true the navigation tree will have lines marking the groups.
   */
  displayGroupLines?: boolean;
  /**
   * If true the navigation tree will have controls at the end.
   */
  displayControlsAfter?: boolean;
  /**
   * If true the navigation tree will be icons only and display a popover on click.
   */
  responsiveView?: boolean;
};

type ItemWithId = Item & { id: number };
type GroupItemWithId = {
  badge?: ReactElement;
  icon: string | SVG;
  items: (ItemWithId | GroupItemWithId)[];
  label: string;
};
type SectionWithId = { items: (ItemWithId | GroupItemWithId)[]; title?: string };

type SingleItemProps = ItemWithId & {
  depthLevel: number;
};
type GroupItemProps = GroupItemWithId & {
  depthLevel: number;
};
type MenuItemProps = {
  item: ItemWithId | GroupItemWithId;
  depthLevel?: number;
};
type ItemActionProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  badge?: Item["badge"];
  collapseIcon?: ReactNode;
  depthLevel: number;
  icon?: Item["icon"];
  label: Item["label"];
  selected: Item["selected"];
  href?: Item["href"];
  renderItem?: Item["renderItem"];
};
type SectionProps = {
  section: SectionWithId;
  index: number;
  length: number;
};
type SubMenuProps = { children: ReactNode; id?: string; depthLevel?: number };
type NavigationTreeContextProps = {
  selectedItemId?: number;
  setSelectedItemId?: Dispatch<SetStateAction<number>>;
  displayGroupLines?: boolean;
  displayControlsAfter?: boolean;
  responsiveView?: boolean;
};

export type {
  NavigationTreeContextProps,
  GroupItem,
  GroupItemProps,
  GroupItemWithId,
  Item,
  ItemActionProps,
  ItemWithId,
  SubMenuProps,
  MenuItemProps,
  Section,
  SectionWithId,
  SectionProps,
  SingleItemProps,
};

export default Props;
