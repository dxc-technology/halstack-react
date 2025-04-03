import { ReactNode } from "react";

type Props = {
  /**
   * Applies the spacing scale to the bottom side.
   */
  bottom?: string;
  /**
   * Custom content inside the inset.
   */
  children: ReactNode;
  /**
   * Applies the spacing scale to the left and right sides.
   */
  horizontal?: string;
  /**
   * Applies the spacing scale to the left side.
   */
  left?: string;
  /**
   * Applies the spacing scale to the right side.
   */
  right?: string;
  /**
   * Applies the spacing scale to all sides.
   */
  space?: string;
  /**
   * Applies the spacing scale to the top side.
   */
  top?: string;
  /**
   * Applies the spacing scale to the top and bottom sides.
   */
  vertical?: string;
};

export default Props;
