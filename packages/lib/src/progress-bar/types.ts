import { Space } from "../common/utils";

type Size = {
  top?: Space;
  bottom?: Space;
  left?: Space;
  right?: Space;
};

type Props = {
  /**
   * Text to be placed above the progress bar.
   */
  label?: string;
  /**
   * Helper text to be placed under the progress bar.
   */
  helperText?: string;
  /**
   * If true, the progress bar will be displayed as a modal.
   */
  overlay?: boolean;
  /**
   * The value of the progress indicator. If it's received the component is
   * determinate otherwise is indeterminate.
   */
  value?: number;
  /**
   * If true, the value is displayed above the progress bar.
   */
  showValue?: boolean;
  /**
   * Size of the margin to be applied to the component. You can pass
   * an object with 'top', 'bottom', 'left' and 'right' properties
   * in order to specify different margin sizes.
   */
  margin?: Space | Size;
  /**
   * Specifies a string to be used as the name for the progress bar element when no `label` is provided.
   */
  ariaLabel?: string;
};

export default Props;
