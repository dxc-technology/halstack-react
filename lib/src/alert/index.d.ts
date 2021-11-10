type Type = "info" | "confirm" | "warning" | "error" | "hola";
type Mode = "inline" | "modal";
type Size = "small" | "medium" | "large" | "fillParent" | "fitContent";
type Space = "xxsmall" | "xsmall" | "small" | "medium" | "large" | "xlarge" | "xxlarge";
type Margin = {
  top?: Space;
  bottom?: Space;
  left?: Space;
  right?: Space;
};

type Props = {
  /**
   * Hola que tal
   */
  type?: Type;
  mode?: Mode;
  inlineText?: string;
  onClose?: () => void;
  children?: React.ReactNode;
  margin?: Space | Margin;
  size?: Size;
  tabIndex?: number;
};

export default function Alert(props: Props): JSX.Element;
