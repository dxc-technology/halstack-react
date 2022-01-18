type Size = "small" | "medium" | "large" | "fillParent" | "fitContent";
type Space = "xxsmall" | "xsmall" | "small" | "medium" | "large" | "xlarge" | "xxlarge";
type Margin = {
  top?: Space;
  bottom?: Space;
  left?: Space;
  right?: Space;
};

type Props = {
  label?: string;
  mode?: "primary" | "secondary" | "text";
  disabled?: boolean;
  iconPosition?: "before" | "after";
  type?: "button" | "reset" | "submit";
  iconSrc?: string;
  icon?: any;
  onClick?: any;
  margin?: Space | Margin;
  size?: Size;
  tabIndex?: number;
};

export default Props;
