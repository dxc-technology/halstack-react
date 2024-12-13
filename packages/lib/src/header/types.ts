import { Space } from "../common/utils";

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
  content?: React.ReactNode;
  /**
   * Content shown in responsive version. It receives the close menu handler that can
   * be used to add that functionality when a element is clicked.
   */
  responsiveContent?: (closeHandler: () => void) => React.ReactNode;
  /**
   * This function will be called when the user clicks the header logo.
   */
  onClick?: () => void;
  /**
   * Size of the bottom margin to be applied to the header.
   */
  margin?: Space;
  /**
   * Value of the tabindex for all interactive elements, except those inside the
   * custom area.
   */
  tabIndex?: number;
};

export default Props;
