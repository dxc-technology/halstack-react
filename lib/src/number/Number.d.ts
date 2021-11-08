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
   * Text to be placed above the number.
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
   * If true, the number will be optional, showing (Optional) next to the label.
   */
  optional?: boolean;
  /**
   * Prefix to be placed before the number value.
   */
  prefix?: string;
  /**
   * Suffix to be placed after the number value.
   */
  suffix?: string;
  /**
   * Minimum value allowed by the number.
   */
  min?: number;
  /**
   * Maximum value allowed by the number.
   */
  max?: number;
  /**
   * The step interval to use when using the up and down arrows to adjust the value.
   */
  step?: number;
  /**
   * This function will be called when the user types within the input element of the component. The new value will be passed as a parameter.
   */
  onChange?: (value: string) => void;
  /**
   * This function will be called when the input element loses the focus. An object including the value and the error (if the value entered is not valid) 
   * will be passed to this function. If there is no error, error will be null.
   */
  onBlur?: (val: { value: string; error: string }) => void;
  /**
   * If it is defined, the component will change its appearance, showing the error below the number component. If it is not defined, the error messages will be created and managed internally.
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

declare const DxcNumber: FunctionComponent<Props>;
export default DxcNumber;
