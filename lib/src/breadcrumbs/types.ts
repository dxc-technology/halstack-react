export type ItemType = {
  label: string;
  href?: string;
};

type Props = {
  ariaLabel?: string;
  items: Array<ItemType>;
  itemsBeforeCollapse?: number;
  showRoot?: boolean;
};

export default Props;
