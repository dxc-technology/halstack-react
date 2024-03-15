type Item = {
  href?: string;
  label: string;
  onClick?: (href: string) => void;
};
type Props = {
  ariaLabel?: string;
  items: Array<Item>;
  itemsBeforeCollapse?: number;
  showRoot?: boolean;
};

export type ItemPropsType = Item & {
  isCurrentPage?: boolean;
};

export default Props;
