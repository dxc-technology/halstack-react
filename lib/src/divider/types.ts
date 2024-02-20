export type Width = "fixed" | "30%" | "50%" | "80%" | "Full-Width";

type Props = {
  /**
   * The divider can be showed in horizontal or vertical.
   */
  orientation?: "horizontal" | "vertical";
  /**
   * Modifies the thickness of the divider.
   */
  weight?: "regular" | "strong";
  /**
   * Modifies the length of the divider.
   */
  width?: Width;
  /**
   * Modifies the color of the divider.
   */
  color?: "default" | "dark-grey";
};

export default Props;
