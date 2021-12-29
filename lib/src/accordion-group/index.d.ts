type Space = "xxsmall" | "xsmall" | "small" | "medium" | "large" | "xlarge" | "xxlarge";
type Margin = {
  top?: Space;
  bottom?: Space;
  left?: Space;
  right?: Space;
};

type Props = {
  disabled?: boolean;
  onActiveChange?: void;
  indexActive?: number;
  margin?: Space | Margin;
};

export default function DxcAccordionGroup(props: Props): JSX.Element;
