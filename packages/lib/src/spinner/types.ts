import { Margin, Space } from "../common/utils";

type Props = {
  /**
   * Specifies a string to be used as the name for the spinner element when no `label` is provided or the `mode` is set to small.
   */
  ariaLabel?: string;
  /**
   * If true, the color is inherited from the closest parent with a defined color. This allows users to adapt the spinner 
   * to the semantic color of the use case in which it is used.
   */
  inheritColor?: boolean;
  /**
   * Text to be placed inside the spinner.
   */
  label?: string;
  /**
   * Size of the margin to be applied to the component ('xxsmall' | 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' | 'xxlarge').
   * You can pass an object with 'top', 'bottom', 'left' and 'right' properties in order to specify different margin sizes.
   */
  margin?: Space | Margin;
  /**
   * Available modes of the spinner.
   */
  mode?: "large" | "small" | "overlay";
  /**
   * If true, the value is displayed inside the spinner..
   */
  showValue?: boolean;
  /**
   * The value of the progress indicator. If it's received the
   * component is determinate, otherwise is indeterminate.
   */
  value?: number;
};

export default Props;
