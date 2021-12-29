type Space = "xxsmall" | "xsmall" | "small" | "medium" | "large" | "xlarge" | "xxlarge";
type Padding = {
  top?: Space;
  bottom?: Space;
  left?: Space;
  right?: Space;
};

type Props = {
  isCloseVisible?: boolean;
  onCloseClick?: void;
  overlay?: boolean;
  onBackgroundClick?: void;
  padding?: Padding,
  tabIndex?: number;
};

export default function DxcDialog(props: Props): JSX.Element;
