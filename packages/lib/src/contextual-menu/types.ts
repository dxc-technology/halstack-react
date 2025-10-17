import { ButtonHTMLAttributes, Dispatch, ReactElement, ReactNode, SetStateAction } from "react";
import { SVG } from "../common/utils";

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
  /**
   * If true the contextual menu will be displayed with a border.
   * @private
   */
  displayBorder?: boolean;
  /**
   * If true the contextual menu will have lines marking the groups.
   * @private
   */
  displayGroupsLine?: boolean;
  /**
   * If true the contextual menu will have controls at the end.
   * @private
   */
  displayControlsAfter?: boolean;
  /**
   * If true the contextual menu will be icons only and display a popover on click.
   * @private
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
  selected: boolean;
};
type SectionProps = {
  section: SectionWithId;
  index: number;
  length: number;
};
type SubMenuProps = { children: ReactNode; id?: string; depthLevel?: number };
type ContextualMenuContextProps = {
  selectedItemId: number;
  setSelectedItemId: Dispatch<SetStateAction<number>>;
  displayGroupsLine: boolean;
  displayControlsAfter: boolean;
  responsiveView: boolean;
};

export type {
  ContextualMenuContextProps,
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
