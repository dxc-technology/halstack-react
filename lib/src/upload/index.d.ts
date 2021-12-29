type Space = "xxsmall" | "xsmall" | "small" | "medium" | "large" | "xlarge" | "xxlarge";
type Margin = {
  top?: Space;
  bottom?: Space;
  left?: Space;
  right?: Space;
};

type Props = {
  callbackUpload?: void;
  margin?: Space | Margin;
  tabIndex?: number;
};

export default function DxcUpload(props: Props): JSX.Element;
