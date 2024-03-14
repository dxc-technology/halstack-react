type Item = {
  href?: string;
  label: string;
};

type Props = {
  ariaLabel?: string;
  children?: React.ReactNode;
  items: Array<Item>;
  itemsBeforeCollapse?: number;
  showRoot?: boolean;
};

export type ItemPropsType = Item & {
  isCurrentPage?: boolean;
};

export default Props;
