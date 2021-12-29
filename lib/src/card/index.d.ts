type Space = "xxsmall" | "xsmall" | "small" | "medium" | "large" | "xlarge" | "xxlarge";
type Margin = {
  top?: Space;
  bottom?: Space;
  left?: Space;
  right?: Space;
};

type Props = {
  imageSrc?: string;
  margin?: Space | Margin;
  contentPadding?: any;
  linkHref?: string;
  onClick?: void;
  imageBgColor?: string;
  imagePadding?: any;
  imagePosition?: "before" | "after";
  outlined?: boolean; 
  imageCover?: boolean;
};

export default function DxcCard(props: Props): JSX.Element;
