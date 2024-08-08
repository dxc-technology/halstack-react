import { ReactNode } from "react";

export type Spacing = "0rem" | "0.125rem" | "0.25rem" | "0.5rem" | "1rem" | "1.5rem" | "2rem" | "3rem" | "4rem" | "5rem";

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
   * Custom content inside the inset.
   */
  children: ReactNode;
};

export default Props;
