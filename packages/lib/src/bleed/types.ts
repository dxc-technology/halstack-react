import { ReactNode } from "react";
import { CoreSpacingTokensType } from "../common/coreTokens";

type Props = {
  /**
   * Applies the spacing scale to all sides.
   */
  space?: CoreSpacingTokensType;
  /**
   * Applies the spacing scale to the left and right sides.
   */
  horizontal?: CoreSpacingTokensType;
  /**
   * Applies the spacing scale to the top and bottom sides.
   */
  vertical?: CoreSpacingTokensType;
  /**
   * Applies the spacing scale to the top side.
   */
  top?: CoreSpacingTokensType;
  /**
   * Applies the spacing scale to the right side.
   */
  right?: CoreSpacingTokensType;
  /**
   * Applies the spacing scale to the bottom side.
   */
  bottom?: CoreSpacingTokensType;
  /**
   * Applies the spacing scale to the left side.
   */
  left?: CoreSpacingTokensType;
  /**
   * Custom content inside the bleed.
   */
  children: ReactNode;
};

export default Props;
