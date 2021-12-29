type Space = "xxsmall" | "xsmall" | "small" | "medium" | "large" | "xlarge" | "xxlarge";
type Margin = {
  top?: Space;
  bottom?: Space;
  left?: Space;
  right?: Space;
};

type Props = {
  currentPage?: number;
  itemsPerPage?: number;
  itemsPerPageOptions?: number[];
  totalItems?: number
  showGoToPage?: boolean,
  onPageChange?: void;
  itemsPerPageFunction?: void;
  tabIndex?: number;
};

export default function DxcPaginator(props: Props): JSX.Element;
