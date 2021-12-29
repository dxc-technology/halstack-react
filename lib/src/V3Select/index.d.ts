type Size = "small" | "medium" | "large" | "fillParent";
type Space = "xxsmall" | "xsmall" | "small" | "medium" | "large" | "xlarge" | "xxlarge";
type Margin = {
  top?: Space;
  bottom?: Space;
  left?: Space;
  right?: Space;
};

type Props = {
  value?: any;
  name?: string;
  onChange?: void;
  label?: string,
  assistiveText?: string;
  required?: boolean;
  disabled?: boolean;
  invalid?: boolean;
  options?: any;
  iconPosition?: "before" | "after";
  multiple?: boolean;
  margin?: Space | Margin;
  size?: Size;
  tabIndex?: number;
};

export default function V3DxcSelect(props: Props): JSX.Element;
