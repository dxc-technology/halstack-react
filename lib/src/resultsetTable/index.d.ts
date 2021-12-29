type Space = "xxsmall" | "xsmall" | "small" | "medium" | "large" | "xlarge" | "xxlarge";
type Margin = {
  top?: Space;
  bottom?: Space;
  left?: Space;
  right?: Space;
};

type Props = {
  columns?: any;
  rows?: any;
  itemsPerPage?: number;
  itemsPerPageOptions?: number[];
  itemsPerPageFunction?: void,
  margin?: Space | Margin;
  tabIndex?: number;
};

export default function DxcResultsetTable(props: Props): JSX.Element;
