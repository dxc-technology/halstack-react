type Position = "bottom" | "top" | "left" | "right";

type Props = {
  /**
   * Preferred position for displaying the tooltip. It may adjust automatically based on available space.
   */
  position?: Position;
  /**
   * Text to be displayed inside the tooltip.
   */
  title: string;
  /**
   * Content in which the Tooltip will be displayed.
   */
  children: React.ReactNode;
};

export default Props;
