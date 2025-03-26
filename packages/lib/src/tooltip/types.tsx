import { ReactNode } from "react";

type Props = {
  /**
   * Content in which the Tooltip will be displayed.
   */
  children: ReactNode;
  /**
   * Text to be displayed inside the tooltip.
   */
  label?: string;
  /**
   * Preferred position for displaying the tooltip. It may adjust automatically based on available space.
   */
  position?: "bottom" | "top" | "left" | "right";
};

export type TooltipWrapperProps = {
  children: ReactNode;
  condition?: boolean;
  label?: string;
};

export default Props;
