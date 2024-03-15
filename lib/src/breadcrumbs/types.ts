type Item = {
  href?: string;
  label: string;
};
type CommonProps = {
  ariaLabel?: string;
  itemsBeforeCollapse?: number;
  showRoot?: boolean;
};
type PropsWithItems = CommonProps & {
  ariaLabel?: string;
  children?: never;
  items: Array<Item>;
  itemsBeforeCollapse?: number;
  showRoot?: boolean;
};
type PropsWithChildren = CommonProps & {
  ariaLabel?: string;
  children: React.ReactNode;
  items?: never;
  itemsBeforeCollapse?: number;
  showRoot?: boolean;
};
type Props = PropsWithItems | PropsWithChildren;

export type ItemPropsType = Item & {
  isCurrentPage?: boolean;
};

export default Props;
