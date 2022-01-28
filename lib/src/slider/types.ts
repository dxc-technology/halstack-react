type Size = "medium" | "large" | "fillParent";
type Space = "xxsmall" | "xsmall" | "small" | "medium" | "large" | "xlarge" | "xxlarge";
type Margin = {
  top?: Space;
  bottom?: Space;
  left?: Space;
  right?: Space;
};

type Props = {
  /**
   * Text to be placed above the slider.
   */
  label?: string;
  /**
   * Name attribute of the input element.
   */
  name?: string;
  /**
   * The selected value. If undefined, the component will be uncontrolled and the value will be managed internally by the component.
   */
  value?: number;
  /**
   * Helper text to be placed above the slider.
   */
  helperText?: string;
  /**
   * The minimum value available for selection.
   */
  minValue?: number;
  /**
   * The maximum value available for selection.
   */
  maxValue?: number;
  /**
   * The step interval between values available for selection.
   */
  step?: number;
  /**
   * Whether the min/max value labels should be displayed next to the slider
   */
  showLimitsValues?: boolean;
  /**
   * Whether the input element for displaying/controlling the slider value should be displayed next to the slider.
   */
  showInput?: boolean;
  /**
   * If true, the component will be disabled.
   */
  disabled?: boolean;
  /**
   * Whether the marks between each step should be shown or not.
   */
  marks?: boolean;
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
   * This function will be used to format the labels displayed next to the slider.
   * The value will be passed as parameter and the function must return the formatted value.
   */
  labelFormatCallback?: (value: number) => void;
  /**
   * Size of the margin to be applied to the component ('xxsmall' | 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' | 'xxlarge').
   * You can pass an object with 'top', 'bottom', 'left' and 'right' properties in order to specify different margin sizes.
   */
  margin?: Space | Margin;
  /**
   * Size of the component.
   */
  size?: Size;
};

export default Props;
