type Space = "xxsmall" | "xsmall" | "small" | "medium" | "large" | "xlarge" | "xxlarge";
type Margin = {
  top?: Space;
  bottom?: Space;
  left?: Space;
  right?: Space;
};
type RequiredMinMax = { min: number; max: number };
type RequiredMin = { min: number; max?: number };
type RequiredMax = { min?: number; max: number };

type Props = {
  /**
   * Text to be placed above the password.
   */
  label?: string;
  /**
   * Name attribute of the input element.
   */
  name?: string;
  /**
   * Value of the input element. If undefined, the component will be uncontrolled and the value will be managed internally by the component.
   */
  value?: string;
  /**
   * Helper text to be placed above the password.
   */
  helperText?: string;
  /**
   * If true, the password input will have an action to clear the entered value.
   */
  clearable?: boolean;
  /**
   * This function will be called when the user types within the input
   * element of the component. An object including the current value and
   * the error (if the value entered is not valid) will be passed to this
   * function. If there is no error, error will be null.
   * */
  onChange?: (val: { value: string; error: string | null }) => void;
  /**
   * This function will be called when the input element loses the focus.
   * An object including the input value and the error (if the value entered is
   * not valid) will be passed to this function. If there is no error, error will be null.
   */
  onBlur?: (val: { value: string; error: string | null }) => void;
  /**
   * If it is defined, the component will change its appearance, showing
   * the error below the password input component. If it is not defined, the
   * error messages will be managed internally, but never displayed on its own.
   */
  error?: string;
  /**
   * Regular expression that defines the valid format allowed by the
   * password input. This will be checked both when the input element loses the
   * focus and while typing within it. If the string entered does not match
   * the pattern, the onBlur and onChange functions will be called with the
   * current value and an internal error informing that this value does not
   * match the pattern. If the pattern is met, the error parameter of both
   * events will be null.
   */
  pattern?: string;
  /**
   * Specifies the minimun and maximum length allowed by the password input.
   * This will be checked both when the input element loses the
   * focus and while typing within it. If the string entered does not
   * comply the length, the onBlur and onChange functions will be called
   * with the current value and an internal error informing that the value
   * length does not comply the specified range. If a valid length is
   * reached, the error parameter of both events will be null.
   */
  length?: RequiredMinMax | RequiredMin | RequiredMax;
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
   * Size of the component ('small' | 'medium' | 'large' | 'fillParent').
   */
  size?: "small" | "medium" | "large" | "fillParent";
  /**
   * Value of the tabindex attribute.
   */
  tabIndex?: number;
};

/**
 * Reference to the component.
 */
export type RefType = HTMLDivElement;

export default Props;
