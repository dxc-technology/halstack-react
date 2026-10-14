import { ButtonHTMLAttributes, Dispatch, ReactElement, ReactNode, SetStateAction } from "react";
import { SVG } from "../common/types";

type BaseCommonItemProps = {
  badge?: ReactElement;
  icon?: string | SVG;
  label: string;
};

type BaseItem = BaseCommonItemProps & {
  onSelect?: () => void;
  selected?: boolean;
  href?: string;
  renderItem?: (props: { children: ReactNode }) => ReactNode;
};

type BaseGroupItem = BaseCommonItemProps & {
  items: (BaseItem | BaseGroupItem)[];
  defaultOpen?: boolean;
};
type BaseSection = { items: (BaseItem | BaseGroupItem)[]; title?: string };
type BaseMenuProps = {
  /**
   * Array of items to be displayed in the menu.
   * Each item can be a single/simple item, a group item or a section.
   */
  items: (BaseItem | BaseGroupItem)[] | BaseSection[];
  /**
   * If true the menu will be displayed with a border.
   */
  displayBorder?: boolean;
  /**
   * If true the menu will have lines marking the groups.
   */
  displayGroupLines?: boolean;
  /**
   * If true the menu will have controls at the end.
   */
  displayControlsAfter?: boolean;
  /**
   * If true the menu will be icons only and display a popover on click.
   */
  hasPopOver?: boolean;
  /**
   * If true the menu will be displayed horizontally.
   */
  isHorizontal?: boolean;
  /**
   * Function that will be called when an option is clicked.
   * This is used to notify that an item has been selected to close any visible menu that is not managed by the navigation tree.
   */
  onSelectItem?: () => void;
};

type BaseItemWithId = BaseItem & { id: number };

type BaseGroupItemWithId = Omit<BaseGroupItem, "items"> & {
  items: (BaseItemWithId | BaseGroupItemWithId)[];
};

type BaseSectionWithId = { items: (BaseItemWithId | BaseGroupItemWithId)[]; title?: string };

type BaseSingleItemProps = BaseItemWithId & {
  depthLevel: number;
};
type BaseGroupItemProps = BaseGroupItemWithId & {
  depthLevel: number;
};
type BaseMenuItemProps = {
  item: BaseItemWithId | BaseGroupItemWithId;
  depthLevel?: number;
};
type BaseItemActionProps = ButtonHTMLAttributes<HTMLAnchorElement> & {
  badge?: BaseItem["badge"];
  collapseIcon?: ReactNode;
  depthLevel: number;
  icon?: BaseItem["icon"];
  label: BaseItem["label"];
  ref?: React.Ref<HTMLAnchorElement> | undefined;
  selected: BaseItem["selected"];
  href?: BaseItem["href"];
  renderItem?: BaseItem["renderItem"];
};
type BaseSectionProps = {
  section: BaseSectionWithId;
  index: number;
  length: number;
};
type BaseSubMenuProps = {
  children: ReactNode;
  id?: string;
  depthLevel?: number;
  isHorizontal?: boolean;
  isPopOver?: boolean;
};
type BaseMenuContextProps = {
  selectedItemId?: number;
  setSelectedItemId?: Dispatch<SetStateAction<number>>;
  displayGroupLines?: boolean;
  displayControlsAfter?: boolean;
  hasPopOver?: boolean;
  isHorizontal?: boolean;
  onSelectItem?: () => void;
  closePopOver?: () => void;
};

export type {
  BaseCommonItemProps,
  BaseMenuContextProps,
  BaseGroupItem,
  BaseGroupItemProps,
  BaseGroupItemWithId,
  BaseItem,
  BaseItemActionProps,
  BaseItemWithId,
  BaseSubMenuProps,
  BaseMenuItemProps,
  BaseSection,
  BaseSectionWithId,
  BaseSectionProps,
  BaseSingleItemProps,
  BaseMenuProps as default,
};
