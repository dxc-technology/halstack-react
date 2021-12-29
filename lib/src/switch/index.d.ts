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
  onChange?: void;
  required?: boolean;
  margin?: Space | Margin;
  size?: Size;
  tabIndex?: number;
};

export default function DxcSwitch(props: Props): JSX.Element;
