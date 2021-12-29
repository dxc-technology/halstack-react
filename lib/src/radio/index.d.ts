type Size = "small" | "medium" | "large" | "fillParent" | "fitContent";
type Space = "xxsmall" | "xsmall" | "small" | "medium" | "large" | "xlarge" | "xxlarge";
type Margin = {
  top?: Space;
  bottom?: Space;
  left?: Space;
  right?: Space;
};

type Props = {
  checked?: boolean;
  value?: any;
  label?: string;
  labelPosition?: "before" | "after";
  name?: string,
  disabled?: boolean;
  onClick?: void;
  required?: boolean;
  margin?: Space | Margin;
  size?: Size;
};

export default function DxcRadio(props: Props): JSX.Element;
