import { Space } from "../common/utils";

type Size = "small" | "medium" | "large";
type Mode = "indeterminate" | "determinate";

type Props = {
  /**
   * Text to be placed next to the spinner.
   */
  label?: string;
  /**
   * If true, the progress value is displayed next to the label.
   */
  showValue?: boolean;
  /**
   * The value of the progress indicator (0-100). If provided, the component 
   * will render as determinate, otherwise as indeterminate.
   */
  value?: number;
  /**
   * Size of the spinner.
   */
  size?: Size;
  /**
   * Mode of the spinner. If value is provided, it will be determinate automatically.
   */
  mode?: Mode;
  /**
   * If true, the spinner will be displayed as an overlay modal.
   */
  overlay?: boolean;
  /**
   * Size of the margin to be applied to the component.
   */
  margin?: Space | {
    top?: Space;
    bottom?: Space;
    left?: Space;
    right?: Space;
  };
  /**
   * Specifies a string to be used as the aria-label for the spinner element.
   */
  ariaLabel?: string;
};

export default Props;
