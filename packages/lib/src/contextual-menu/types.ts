import BaseProps, {
  BaseMenuContextProps,
  GroupItem,
  GroupItemProps,
  GroupItemWithId,
  Item as BaseItem,
  ItemActionProps as BaseItemActionProps,
  ItemWithId,
  SubMenuProps,
  MenuItemProps,
  Section,
  SectionWithId,
  SectionProps,
  SingleItemProps,
} from "../base-menu/types";

type Item = Omit<BaseItem, "href" | "renderItem" | "selected">;
type Props = Omit<BaseProps, "displayBorder" | "displayGroupLines" | "displayControlsAfter" | "responsiveView">;
type ItemActionProps = Omit<BaseItemActionProps, "href" | "renderItem">;
type ContextualMenuContextProps = Omit<BaseMenuContextProps, "responsiveView">;

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
  Props as default,
};
