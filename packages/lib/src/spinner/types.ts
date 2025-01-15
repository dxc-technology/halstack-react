import { Margin, Space } from "../common/utils";

type Props = {
  /**
   * Text to be placed inside the spinner.
   */
  label?: string;
  /**
   * The value of the progress indicator. If it's received the
   * component is determinate, otherwise is indeterminate.
   */
  value?: number;
  /**
   * If true, the value is displayed inside the spinner..
   */
  showValue?: boolean;
  /**
   * Available modes of the spinner.
   */
  mode?: "large" | "small" | "overlay";
  /**
   * Size of the margin to be applied to the component ('xxsmall' | 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' | 'xxlarge').
   * You can pass an object with 'top', 'bottom', 'left' and 'right' properties in order to specify different margin sizes.
   */
  margin?: Space | Margin;
  /**
   * Specifies a string to be used as the name for the spinner element when no `label` is provided or the `mode` is set to small.
   */
  ariaLabel?: string;
};

export default Props;
