import { NotificationProps, CommonProps, ContextualProps } from "../badge/types";

type SVG = React.ReactNode & React.SVGProps<SVGSVGElement>;

export type Item = {
  label: string;
  icon?: string | SVG;
  slot?: React.ReactNode;
  onSelect?: () => void;
};
export type Section = { title?: string; items: Item[] };

type Props = {
  defaultSelectedItemIndex?: number;
  items: Item[] | Section[];
};

export type MenuItemProps = Item & {
  selected: boolean;
};
export type BadgeProps = (ContextualProps | NotificationProps) & Omit<CommonProps, "size">;
export default Props;
