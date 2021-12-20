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
   * Text to be placed above the textarea.
   */
  label?: string;
  /**
   * Name attribute of the textarea element.
   */
  name?: string;
  /**
   * Value of the textarea. If undefined, the component will be uncontrolled and the value will be managed internally.
   */
  value?: string;
  /**
   * Helper text to be placed above the textarea.
   */
  helperText?: string;
  /**
   * Text to be put as placeholder of the textarea.
   */
  placeholder?: string;
  /**
   * If true, the component will be disabled.
   */
  disabled?: boolean;
  /**
   * If true, the textarea will be optional, showing '(Optional)' 
   * next to the label. Otherwise, the field will be considered required 
   * and an error will be passed as a parameter to the OnBlur and onChange functions 
   * when it has not been filled.
   */
  optional?: boolean;
  /**
   * Defines the textarea's ability to resize vertically. It can be:
   *    - 'auto': The textarea grows or shrinks automatically in order to fit the content.
   *    - 'manual': The height of the textarea is enabled to be manually modified.
   *    - 'none': The textarea has a fixed height and can't be modified.
   */
  verticalGrow?: "auto" | "manual" | "none";
  /**
   * Number of rows of the textarea.
   */
  rows?: number;
  /**
   * This function will be called when the user types within the textarea.
   * An object including the current value and the error (if the value
   * entered is not valid) will be passed to this function. 
   * If there is no error, error will be null.
   */
  onChange?: (val: { value: string; error: string }) => void;
  /**
   * This function will be called when the textarea loses the focus. An
   * object including the textarea value and the error (if the value entered
   * is not valid) will be passed to this function. If there is no error, 
   * error will be null.
   */
  onBlur?: (val: { value: string; error: string }) => void;
  /**
   * If it is defined, the component will change its appearance, showing
   * the error below the textarea. If it is not defined, the error
   * messages will be managed internally, but never displayed on its own.
   */
  error?: string;
  /**
   * Regular expression that defines the valid format allowed by the
   * textarea. This will be checked both when the textarea loses the focus
   * and while typing within it. If the string entered does not match the
   * pattern, the onBlur and onChange functions will be called with the
   * current value and an internal error informing that this value does not
   * match the pattern. If the pattern is met, the error parameter of both
   * events will be null.
   */
  pattern?: string;
  /**
   * Specifies the minimun and maximum length allowed by the textarea.
   * This will be checked both when the textarea loses the
   * focus and while typing within it. If the string entered does not
   * comply the length, the onBlur and onChange functions will be called
   * with the current value and an internal error informing that the value
   * length does not comply the specified range. If a valid length is
   * reached, the error parameter of both events will be null.
   */
  length?: { min: number; max: number };
  /**
   * HTML autocomplete attribute. Lets the user specify if any permission the user agent has to provide automated assistance in filling out the textarea value.
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

export default function DxcTextarea(props: Props): JSX.Element;
