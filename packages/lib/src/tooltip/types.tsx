type Props = {
  /**
   * Preferred position for displaying the tooltip. It may adjust automatically based on available space.
   */
  position?: "bottom" | "top" | "left" | "right";
  /**
   * Text to be displayed inside the tooltip.
   */
  label: string;
  /**
   * Content in which the Tooltip will be displayed.
   */
  children: React.ReactNode;
};

export type TooltipWrapperProps = {
  condition: boolean;
  children: React.ReactNode;
  label: string;
};

export default Props;
