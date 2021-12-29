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
  overlay?: boolean;
  value?: number;
  showValue?: boolean,
  margin?: Space | Margin;
};

export default function DxcProgressBar(props: Props): JSX.Element;
