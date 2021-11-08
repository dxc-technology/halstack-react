import { FunctionComponent } from "react";

type Size = "small" | "medium" | "large" | "fillParent";
type Space = "xxsmall" | "xsmall" | "small" | "medium" | "large" | "xlarge" | "xxlarge";
type Margin = {
  top?: Space;
  bottom?: Space;
  left?: Space;
  right?: Space;
};
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
   * If true, the password will have an action to clear the entered value.
   */
  clearable?: boolean;
  /**
   * This function will be called when the user types within the input element of the component. The new value will be passed as a parameter.
   */
  onChange?: (value: string) => void;
  /**
   * This function will be called when the input element loses the focus. An object including the value and the error (if the value entered is not valid) will be passed to this function. 
   * If there is no error, error will be null.
   */
  onBlur?: (val: { value: string; error: string }) => void;
  /**
   * If it is defined, the component will change its appearance, showing the error below the password component. If it is not defined, the error messages will be created and managed internally.
   */
  error?: string;
  /**
   * Regular expression that defines the valid format allowed by the password. This will be checked when the input element loses the focus. 
   * If the value entered does not match the pattern, the onBlur function will be called with the value entered and the error informing that the value does not match the pattern as parameters. 
   * If the pattern is accomplished, the error parameter will be null.
   */
  pattern?: string;
  /**
   * Specifies the minimun and maximum length allowed by the password. This will be checked when the password loses the focus. If the value entered does not comply the length, 
   * the onBlur function will be called with the value entered and the error informing that the value does not comply the length as parameters. 
   * If the length is accomplished, the error parameter will be null.
   */
  length?: { min?: number; max?: number };
  /**
   * HTML autocomplete attribute. Lets the user specify if any permission the user agent has to provide automated assistance in filling out the input value. 
   * Its value must be one of all the possible values of the HTML autocomplete attribute: 'on', 'off', 'email', 'username', 'new-password', ...
   */
  autocomplete?: string;
  /**
   * Size of the margin to be applied to the component ('xxsmall' | 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' | 'xxlarge'). 
   * You can pass an object with 'top', 'bottom', 'left' and 'right' properties in order to specify different margin sizes.
   */
  margin?: string | Margin;
  /**
   * Size of the component ('small' | 'medium' | 'large' | 'fillParent').
   */
  size?: Size;
  /**
   * Value of the tabindex attribute.
   */
  tabIndex?: number;
  /**
   * Reference to the component.
   */
  ref?: React.RefObject<HTMLDivElement>;
};

declare const DxcPassword: FunctionComponent<Props>;
export default DxcPassword;
