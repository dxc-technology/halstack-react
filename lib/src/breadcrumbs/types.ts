type SVG = React.ReactNode & React.SVGProps<SVGSVGElement>;

export type Item = {
  label: string;
  href?: string;
};

type Props = {
  ariaLabel?: string;
  collapsedIcon?: SVG;
  items: Array<Item>;
  itemsBeforeCollapse?: number;
  showRoot?: boolean;
};

export default Props;
