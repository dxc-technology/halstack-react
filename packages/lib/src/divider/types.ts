type Props = {
  /**
   * The divider can be shown in horizontal or vertical.
   */
  orientation?: "horizontal" | "vertical";
  /**
   * Modifies the thickness of the divider.
   */
  weight?: "regular" | "strong";
  /**
   * Modifies the color of the divider.
   */
  color?: "lightGrey" | "mediumGrey" | "darkGrey";
  /**
   * Specifies whether the divider serves a purely decorative purpose
   * or functions as a semantic separator for content. Additionally, it
   * determines whether the divider is accessible to screen readers.
   */
  decorative?: boolean;
};

export default Props;
