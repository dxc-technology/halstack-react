type Space = "xxsmall" | "xsmall" | "small" | "medium" | "large" | "xlarge" | "xxlarge";
type Margin = {
  top?: Space;
  bottom?: Space;
  left?: Space;
  right?: Space;
};

type Props = {
  level?: 1 | 2 | 3 | 4 | 5;
  text?: string;
  as?: "h1" | "h2" | "h3" | "h4" | "h5";
  weight?: "light" | "normal" | "bold";
  margin?: Space | Margin;
};

export default function DxcHeading(props: Props): JSX.Element;
