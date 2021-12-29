type Space = "xxsmall" | "xsmall" | "small" | "medium" | "large" | "xlarge" | "xxlarge";
type Margin = {
  top?: Space;
  bottom?: Space;
  left?: Space;
  right?: Space;
};

type Props = {
  inheritColor?: boolean;
  disabled?: boolean;
  iconSrc?: string;
  icon?: any;
  iconPosition?: "before" | "after";
  href?: string;
  newWindow?: boolean;
  onClick?: void;
  text?: string;
  margin?: Space | Margin;
  tabIndex?: number;
};

export default function DxcLink(props: Props): JSX.Element;
