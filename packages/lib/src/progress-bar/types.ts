type Space = "xxsmall" | "xsmall" | "small" | "medium" | "large" | "xlarge" | "xxlarge";
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
};

export default Props;
