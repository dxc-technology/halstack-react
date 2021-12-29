type Space = "xxsmall" | "xsmall" | "small" | "medium" | "large" | "xlarge" | "xxlarge";
type Margin = {
  top?: Space;
  bottom?: Space;
  left?: Space;
  right?: Space;
};

type Props = {
  label?: string;
  value?: number;
  showValue?: boolean;
  mode?: "large" | "small" | "overlay";
  margin?: Space | Margin;
};

export default function DxcSpinner(props: Props): JSX.Element;
