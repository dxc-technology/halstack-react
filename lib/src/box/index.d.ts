type Size = "small" | "medium" | "large" | "fillParent" | "fitContent";
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
  shadowDepth?: 0 | 1 | 2;
  margin?: Space | Margin;
  padging?: Space | Padding;
  display: string;
  size: Size;
};

export default function DxcBox(props: Props): JSX.Element;
