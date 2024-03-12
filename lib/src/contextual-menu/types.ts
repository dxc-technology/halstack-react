import React from "react";
import { ContextualProps, NotificationProps, CommonProps } from "../badge/types";

/**
 * Contextual menu API.
 */
type BadgeProps = (ContextualProps | NotificationProps) & Omit<CommonProps, "size">;
type SVG = React.ReactNode & React.SVGProps<SVGSVGElement>;
type Item = {
  badge?: React.ReactNode;
  icon?: string | SVG;
  label: string;
  onSelect?: () => void;
};
type GroupItem = { items: (Item | GroupItem)[]; badge?: React.ReactNode; icon?: string | SVG; label: string };
type Section = { items: (Item | GroupItem)[]; title?: string };
type Props = {
  items: (Item | GroupItem)[] | Section[];
};

/**
 * Contextual menu internal types.
 */
type ItemWithId = Item & { id: number };
type GroupItemWithId = {
  items: (ItemWithId | GroupItemWithId)[];
  badge?: React.ReactNode;
  icon: string | SVG;
  label: string;
};
type SectionWithId = { items: (ItemWithId | GroupItemWithId)[]; title?: string };
type SingleItemProps = ItemWithId & { level: number };
type GroupItemProps = GroupItemWithId & { level: number };
type MenuItemProps = { item: ItemWithId | GroupItemWithId; level?: number };
type ItemActionProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  Item & {
    collapseIcon?: SVG;
    level: number;
    selected: boolean;
  };
type ContextualMenuContextProps = {
  selectedItemId: number;
  setSelectedItemId: React.Dispatch<React.SetStateAction<number>>;
};

export default Props;
export type {
  BadgeProps,
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
