import { Margin, Space } from "../common/utils";

type Props = {
  /**
   * Specifies a string to be used as the name for the slider element when no `label` is provided.
   */
  ariaLabel?: string;
  /**
   * Initial value of the slider, only when it is uncontrolled.
   */
  defaultValue?: number;
  /**
   * If true, the component will be disabled.
   */
  disabled?: boolean;
  /**
   * Helper text to be placed above the slider.
   */
  helperText?: string;
  /**
   * Text to be placed above the slider.
   */
  label?: string;
  /**
   * This function will be used to format the labels displayed next to the slider.
   * The value will be passed as parameter and the function must return the formatted value.
   */
  labelFormatCallback?: (value: number) => string;
  /**
   * Size of the margin to be applied to the component ('xxsmall' | 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' | 'xxlarge').
   * You can pass an object with 'top', 'bottom', 'left' and 'right' properties in order to specify different margin sizes.
   */
  margin?: Space | Margin;
  /**
   * Whether the marks between each step should be shown or not.
   */
  marks?: boolean;
  /**
   * The maximum value available for selection.
   */
  maxValue?: number;
  /**
   * The minimum value available for selection.
   */
  minValue?: number;
  /**
   * Name attribute of the input element.
   */
  name?: string;
  /**
   * This function will be called when the slider changes its value, as it's being dragged.
   * The new value will be passed as a parameter when this function is executed.
   */
  onChange?: (value: number) => void;
  /**
   * This function will be called when the slider changes its value, but only when the thumb is released.
   * The new value will be passed as a parameter when this function is executed.
   */
  onDragEnd?: (value: number) => void;
  /**
   * Whether the input element for displaying/controlling the slider value should be displayed next to the slider.
   */
  showInput?: boolean;
  /**
   * Whether the min/max value labels should be displayed next to the slider
   */
  showLimitsValues?: boolean;
  /**
   * Size of the component.
   */
  size?: "medium" | "large" | "fillParent";
  /**
   * The step interval between values available for selection.
   */
  step?: number;
  /**
   * The selected value. If undefined, the component will be uncontrolled and the value will be managed internally by the component.
   */
  value?: number;
};

/**
 * Reference to the component.
 */
export type RefType = HTMLDivElement;

export default Props;
