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
  socialLinks?: any;
  bottomLinks?: any;
  copyright?: string;
  padding?: Space | Padding;
  margin?: Space | Margin;
  tabIndex?: number;
  
};

export default function DxcFooter(props: Props): JSX.Element;
