type Space = "xxsmall" | "xsmall" | "small" | "medium" | "large" | "xlarge" | "xxlarge";
type Margin = {
  top?: Space;
  bottom?: Space;
  left?: Space;
  right?: Space;
};
type Padding = {
  top?: Space;
  bottom?: Space;
  left?: Space;
  right?: Space;
};

type Props = {
  underlined?: boolean;
  onClick?: void;
  content?: any;
  responsiveContent?: any;
  margin?: Space | Margin;
  padding?: Space | Padding;
  tabIndex?: number;
};

export default function DxcHeader(props: Props): JSX.Element;
