import { ReactNode } from "react";
import { Space } from "../common/utils";

export type Logo = {
  /**
   * Source of the logo image.
   */
  src: string;

  /**
   * Alternative text for the logo image.
   */
  title?: string;

  /**
   * URL to navigate when the logo is clicked.
   * Ignored if `onClick` is provided.
   */
  href?: string;
};

type Props = {
  /**
   * Whether a contrast line should appear at the bottom of the header.
   */
  underlined?: boolean;
  /**
   * Content shown in the header. Take into account that the component applies styles
   * for the first child in the content, so we recommend the use of React.Fragment
   * to be applied correctly. Otherwise, the styles can be modified.
   */
  content?: ReactNode;
  /**
   * Content shown in responsive version. It receives the close menu handler that can
   * be used to add that functionality when a element is clicked.
   */
  responsiveContent?: (closeHandler: () => void) => ReactNode;
  /**
   * Logo configuration object. If defined, the logo will appear in the header.
   */
  logo?: Logo;
  /**
   * Size of the bottom margin to be applied to the header.
   */
  margin?: Space;
  /**
   * This function will be called when the user clicks the header logo.
   */
  onClick?: () => void;
  /**
   * Value of the tabindex for all interactive elements, except those inside the
   * custom area.
   */
  tabIndex?: number;
};

export default Props;
