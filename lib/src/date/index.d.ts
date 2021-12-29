type Size = "small" | "medium" | "large" | "fillParent";
type Space = "xxsmall" | "xsmall" | "small" | "medium" | "large" | "xlarge" | "xxlarge";
type Margin = {
  top?: Space;
  bottom?: Space;
  left?: Space;
  right?: Space;
};

type Props = {
  value?: string;
  format?: string;
  label?: string;
  name?: string,
  disabled?: boolean;
  required?: boolean;
  assistiveText?: string;
  invalid?: boolean;
  onChange?: void;
  placeholder?: string;
  onBlur?: void;
  margin?: Space | Margin;
  size?: Size;
  tabIndex?: number;
};

export default function DxcDate(props: Props): JSX.Element;
