type Size = "small" | "medium" | "large" | "fillParent";
type Space = "xxsmall" | "xsmall" | "small" | "medium" | "large" | "xlarge" | "xxlarge";
type Margin = {
  top?: Space;
  bottom?: Space;
  left?: Space;
  right?: Space;
};

type Props = {
  label?: string;
  name?: string;
  value?: string;
  assistiveText?: string;
  disabled?: boolean,
  onChange?: void;
  onBlur?: void;
  numRows?: number;
  required?: boolean;
  invalid?: boolean;
  placeholder?: string;
  margin?: Space | Margin;
  size?: Size;
  tabIndex?: number;
};

export default function V3DxcTextarea(props: Props): JSX.Element;
