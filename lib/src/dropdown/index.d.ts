type Size = "small" | "medium" | "large" | "fillParent" | "fitContent";
type Space = "xxsmall" | "xsmall" | "small" | "medium" | "large" | "xlarge" | "xxlarge";
type Margin = {
  top?: Space;
  bottom?: Space;
  left?: Space;
  right?: Space;
};

type Props = {
  options?: any;
  optionsIconPosition?: "before" | "after";
  icon?: any;
  iconSrc?: string;
  iconPosition?: "before" | "after";
  label?: string;
  disabled?: boolean;
  caretHidden?: boolean;
  onSelectOption?: void;
  expandOnHover?: boolean;
  margin?: Space | Margin;
  size?: Size;
  tabIndex?: number;
};

export default function DxcDropdown(props: Props): JSX.Element;
