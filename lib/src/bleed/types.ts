type Spacing =
  | "none"
  | "xxxsmall"
  | "xxsmall"
  | "xsmall"
  | "small"
  | "medium"
  | "large"
  | "xlarge"
  | "xxlarge"
  | "xxxlarge";

type Props = {
  space?: Spacing;
  horizontal?: Spacing;
  vertical?: Spacing;
  top?: Spacing;
  right?: Spacing;
  bottom?: Spacing;
  left?: Spacing;
  children: React.ReactNode;
};

export default Props;