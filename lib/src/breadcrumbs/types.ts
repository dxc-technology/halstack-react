type Item = {
  href?: string;
  label: string;
};
type Props = {
  ariaLabel?: string;
  items: Array<Item>;
  itemsBeforeCollapse?: number;
  onItemClick?: (href: string) => void;
  showRoot?: boolean;
};

export type ItemPropsType = Item & {
  isCurrentPage?: boolean;
  onClick?: (href: string) => void;
};

export default Props;
