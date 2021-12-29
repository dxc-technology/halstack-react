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
  helperText?: string;
  minValue?: number;
  maxValue?: number;
  step?: number;
  value?: number;
  showLimitsValues?: boolean;
  showInput?: boolean;
  name?: string;
  onChange?: void;
  onDragEnd?: void;
  disabled?: boolean;
  marks?: boolean;
  labelFormatCallback?: void;
  margin?: Space | Margin;
  size?: Size;
};

export default function DxcSlider(props: Props): JSX.Element;
