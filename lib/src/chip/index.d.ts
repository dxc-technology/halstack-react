type Space = "xxsmall" | "xsmall" | "small" | "medium" | "large" | "xlarge" | "xxlarge";
type Margin = {
  top?: Space;
  bottom?: Space;
  left?: Space;
  right?: Space;
};

type Props = {
  label?: string;
  suffixIcon?: any;
  preffixIcon?: any;
  suffixIconSrc?: string;
  onClickSuffix?: void;
  prefixIconSrc?: string;
  onClickPrefix?: void;
  disabled?: boolean;
  margin?: Space | Margin;
  tabIndex?: number;
};

export default function DxcChip(props: Props): JSX.Element;
