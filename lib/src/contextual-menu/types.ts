import { NotificationProps, CommonProps, ContextualProps } from "../badge/types";

type SVG = React.ReactNode & React.SVGProps<SVGSVGElement>;

export type Item = {
  label: string;
  icon?: string | SVG;
  slot?: React.ReactNode;
  selected?: boolean;
  onSelect?: (selected?: boolean) => void;
};

export type Section = { title?: string; items: Item[] };

type Props = {
  items: Item[] | Section[];
};

export type BadgeProps = (ContextualProps | NotificationProps) & Omit<CommonProps, "size">;

export default Props;
