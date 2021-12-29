type Space = "xxsmall" | "xsmall" | "small" | "medium" | "large" | "xlarge" | "xxlarge";
type Margin = {
  top?: Space;
  bottom?: Space;
  left?: Space;
  right?: Space;
};

type Props = {
  label?: string;
  helperText?: string;
  value?: any;
  onChange?: void;
  disabled?: boolean,
  options?: any;
  multiple?: boolean;
  margin?: Space | Margin;
  tabIndex?: number;
};

export default function DxcToggle(props: Props): JSX.Element;
