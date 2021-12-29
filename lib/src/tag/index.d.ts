type Size = "small" | "medium" | "large" | "fillParent" | "fitContent";
type Space = "xxsmall" | "xsmall" | "small" | "medium" | "large" | "xlarge" | "xxlarge";
type Margin = {
  top?: Space;
  bottom?: Space;
  left?: Space;
  right?: Space;
};

type Props = {
  icon?: any;
  iconSrc?: string;
  label?: string;
  linkHref?: string;
  onClick?: void,
  iconBgColor?: string;
  labelPosition?: "before" | "after";
  newWindow?: boolean;
  margin?: Space | Margin;
  size?: Size;
  tabIndex?: number;
};

export default function DxcTag(props: Props): JSX.Element;
