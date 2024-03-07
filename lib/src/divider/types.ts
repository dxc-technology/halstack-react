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
   * Indicates whether the divider is just a decorative resource or it works as a semantic separator of content.
   */
  decorative?: boolean;
};

export default Props;
