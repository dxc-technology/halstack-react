type Space = "xxsmall" | "xsmall" | "small" | "medium" | "large" | "xlarge" | "xxlarge";
type Margin = {
  top?: Space;
  bottom?: Space;
  left?: Space;
  right?: Space;
};
type Padding = {
  top?: Space;
  bottom?: Space;
  left?: Space;
  right?: Space;
};

type Props = {
  label?: string;
  iconSrc?: string;
  icon?: any;
  assistiveText?: string;
  disabled?: boolean;
  onChange?: void;
  isExpanded?: boolean;
  margin?: Space | Margin;
  padding?: Space | Padding;
  tabIndex?: number;
};

export default function DxcAccordion(props: Props): JSX.Element;
