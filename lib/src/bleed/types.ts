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
  /**
   * Applies the spacing scale to all sides.
   */
  space?: Spacing;
  /**
   * Applies the spacing scale to the left and right sides.
   */
  horizontal?: Spacing;
  /**
   * Applies the spacing scale to the top and bottom sides.
   */
  vertical?: Spacing;
  /**
   * Applies the spacing scale to the top side.
   */
  top?: Spacing;
  /**
   * Applies the spacing scale to the right side.
   */
  right?: Spacing;
  /**
   * Applies the spacing scale to the bottom side.
   */
  bottom?: Spacing;
  /**
   * Applies the spacing scale to the left side.
   */
  left?: Spacing;
  /**
   * Custom content inside the bleed.
   */
  children: React.ReactNode;
};

export default Props;
