import { ReactNode } from "react";

import { Space, Margin } from "../common/utils";

type Props = {
  /**
   * The size of the shadow to be displayed around the box.
   */
  shadowDepth?: 0 | 1 | 2;
  /**
   * Changes the display CSS property of the box div.
   */
  display?: string;
  /**
   * Custom content that will be placed in the box component.
   */
  children: ReactNode;
  /**
   * Size of the margin to be applied to the component ('xxsmall' | 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' | 'xxlarge').
   * You can pass an object with 'top', 'bottom', 'left' and 'right' properties in order to specify different margin sizes.
   */
  margin?: Space | Margin;
  /**
   * Size of the component.
   */
  size?: "small" | "medium" | "large" | "fillParent" | "fitContent";
};

export default Props;
