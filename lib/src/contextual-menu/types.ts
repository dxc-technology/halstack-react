import { NotificationProps, CommonProps, ContextualProps } from "../badge/types";

/**
 * Contextual menu API.
 */
type SVG = React.ReactNode & React.SVGProps<SVGSVGElement>;
type Item = {
  icon?: string | SVG;
  label: string;
  onSelect?: () => void;
  slot?: React.ReactNode;
};
type GroupItem = { items: (Item | GroupItem)[]; label: string; slot?: React.ReactNode };
type Section = { items: (Item | GroupItem)[]; title?: string };
type Props = {
  items: (Item | GroupItem)[] | Section[];
};
type BadgeProps = (ContextualProps | NotificationProps) & Omit<CommonProps, "size">;

/**
 * Contextual menu internal types.
 */
type ItemWithId = Item & { id: number };
type GroupItemWithId = { items: (ItemWithId | GroupItemWithId)[]; label: string; slot?: React.ReactNode };
type SectionWithId = { items: (ItemWithId | GroupItemWithId)[]; title?: string };
type SingleItemProps = ItemWithId & { level: number };
type GroupItemProps = GroupItemWithId & { level: number };
type MenuItemProps = { item: ItemWithId | GroupItemWithId; level?: number };
type ItemsPropWithId = (ItemWithId | GroupItemWithId)[] | SectionWithId[];
interface ItemActionProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "slot"> {
  icon?: string | SVG;
  label: string;
  level: number;
  selected: boolean;
  slot?: React.ReactNode;
}
type ContextualMenuContextProps = {
  selectedItemId: number;
  setSelectedItemId: React.Dispatch<React.SetStateAction<number>>;
};

export default Props;
export type {
  BadgeProps,
  ContextualMenuContextProps,
  GroupItem,
  GroupItemWithId,
  GroupItemProps,
  Item,
  ItemWithId,
  ItemsPropWithId,
  ItemActionProps,
  SingleItemProps,
  MenuItemProps,
  Section,
  SectionWithId,
};
