import { Margin, Space } from "../common/utils";

type Props = {
  /**
   * Text to be placed above the number.
   */
  label?: string;
  /**
   * Name attribute of the input element.
   */
  name?: string;
  /**
   * Initial value of the input element, only when it is uncontrolled.
   */
  defaultValue?: string;
  /**
   * Value of the input element. If undefined, the component will be uncontrolled and the value will be managed internally by the component.
   */
  value?: string;
  /**
   * Helper text to be placed above the number.
   */
  helperText?: string;
  /**
   * Text to be put as placeholder of the number.
   */
  placeholder?: string;
  /**
   * If true, the component will be disabled.
   */
  disabled?: boolean;
  /**
   * If true, the number will be optional, showing the text '(Optional)'
   * next to the label. Otherwise, the field will be considered required
   * and an error will be passed as a parameter to the OnBlur and onChange
   * functions when it has not been filled.
   */
  optional?: boolean;
  /**
   * If true, the component will not be mutable, meaning the user can
   * not edit the control. The value won't change when pressing on the
   * up or down arrows and neither on the spin buttons.
   */
  readOnly?: boolean;
  /**
   * Prefix to be placed before the number value.
   */
  prefix?: string;
  /**
   * Suffix to be placed after the number value.
   */
  suffix?: string;
  /**
   * Minimum value allowed by the number input. If the typed value by the user is
   * lower than min, the onBlur and onChange functions will be called with
   * the current value and an internal error informing that the current
   * value is not correct. If a valid state is reached, the error parameter
   * will not be defined in both events.
   */
  min?: number;
  /**
   * Maximum value allowed by the number input. If the typed value by the user
   * surpasses max, the onBlur and onChange functions will be called with
   * the current value and an internal error informing that the current
   * value is not correct. If a valid state is reached, the error parameter
   * will not be defined in both events.
   */
  max?: number;
  /**
   * The step interval to use when using the up and down arrows to adjust the value.
   */
  step?: number;
  /**
   * This function will be called when the user types within the input
   * element of the component. An object including the current value and
   * the error (if the value entered is not valid) will be passed to this
   * function. If there is no error, error will not be defined.
   */
  onChange?: (val: { value: string; error?: string }) => void;
  /**
   * This function will be called when the input element loses the focus.
   * An object including the input value and the error (if the value
   * entered is not valid) will be passed to this function. If there is no error,
   * error will not be defined.
   */
  onBlur?: (val: { value: string; error?: string }) => void;
  /**
   * If it is a defined value and also a truthy string, the component will
   * change its appearance, showing the error below the input component. If
   * the defined value is an empty string, it will reserve a space below
   * the component for a future error, but it would not change its look. In
   * case of being undefined or null, both the appearance and the space for
   * the error message would not be modified.
   */
  error?: string;
  /**
   * HTML autocomplete attribute. Lets the user specify if any permission the user agent has to provide automated assistance in filling out the input value.
   * Its value must be one of all the possible values of the HTML autocomplete attribute: 'on', 'off', 'email', 'username', 'new-password', ...
   */
  autocomplete?: string;
  /**
   * Size of the margin to be applied to the component ('xxsmall' | 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' | 'xxlarge').
   * You can pass an object with 'top', 'bottom', 'left' and 'right' properties in order to specify different margin sizes.
   */
  margin?: Space | Margin;
  /**
   * Size of the component.
   */
  size?: "small" | "medium" | "large" | "fillParent";
  /**
   * Value of the tabindex attribute.
   */
  tabIndex?: number;
  /**
   * Specifies a string to be used as the name for the number input element when no `label` is provided.
   */
  ariaLabel?: string;
  /**
   * Decides whether the number input has actions to increase or decrease the value, following the defined step.
   */
  showControls?: boolean;
};

export type NumberInputContextProps = {
  maxNumber: Props["max"];
  minNumber: Props["min"];
  showControls: Props["showControls"];
  stepNumber: Props["step"];
  typeNumber?: string;
};

/**
 * Reference to the component.
 */
export type RefType = HTMLDivElement;

export default Props;
