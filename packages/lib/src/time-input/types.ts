type Props = {
  /**
   * Specifies a string to be used as the name for the textInput element when no `label` is provided.
   */
  ariaLabel?: string;
  /**
   * HTML autocomplete attribute. Lets the user specify if any permission the user agent has to provide automated assistance in filling out the input value.
   * Its value must be one of all the possible values of the HTML autocomplete attribute: 'on', 'off', 'email', 'username', 'new-password', ...
   */
  autocomplete?: string;
  /**
   * If true, the input will have an action to clear the entered value.
   */
  clearable?: boolean;
  /**
   * Initial value of the input, only when it is uncontrolled.
   */
  defaultValue?: string;
  /**
   * If true, the component will be disabled.
   */
  disabled?: boolean;
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
   * Helper text to be placed above the input.
   */
  helperText?: string;
  /**
   * Text to be placed above the input. This label will be used as the aria-label attribute of the list of suggestions.
   */
  label?: string;
  /**
   * Name attribute of the input element.
   */
  name?: string;
  /**
   * This function will be called when the input element loses the focus.
   * An object including the input value and the error (if the value
   * entered is not valid) will be passed to this function. If there is no error,
   * error will not be defined.
   */
  onBlur?: (val: { value: string; error?: string }) => void;
  /**
   * This function will be called when the user types within the input
   * element of the component. An object including the current value and
   * the error (if the value entered is not valid) will be passed to this
   * function. If there is no error, error will not be defined.
   */
  onChange?: (value: string) => void;
  /**
   * If true, the input will be optional, showing '(Optional)'
   * next to the label. Otherwise, the field will be considered required and an error will be
   * passed as a parameter to the OnBlur and onChange functions when it has
   * not been filled.
   */
  optional?: boolean;
  /**
   * If true, the component will not be mutable, meaning the user can not edit the control.
   * In addition, the clear action will not be displayed even if the flag is set to true
   * and the custom action will not execute its onClick event.
   */
  readOnly?: boolean;
  /**
   * If true, the input will display seconds.
   */
  showSeconds?: boolean;
  /**
   * Size of the component.
   */
  size?: "small" | "medium" | "large" | "fillParent";
  /**
   * Value of the tabindex attribute.
   */
  tabIndex?: number;
  /**
   * Time format of the input. It can be either 12 or 24.
   */
  timeFormat?: "12" | "24";
  /**
   * Value of the input. If undefined, the component will be uncontrolled and the value will be managed internally by the component.
   */
  value?: string;
};

/**
 * Reference to the component.
 */
export type RefType = HTMLDivElement;

export type TimeSpinButtonPropsType = {
  value: number | undefined;
  minValue: number;
  maxValue: number;
  inputId: string;
  tabIndex: number;
  dataType?: "hour" | "minute" | "second" | "dayPeriod";
  interactive: boolean;
  onComplete?: () => void;
  onChange?: (value: number | undefined) => void;
  onNext?: () => void;
  onPrevious?: () => void;
};

export type TimePickerPropsType = {
  onSelecthours: (hours: number) => void;
  onSelectMinutes: (minutes: number) => void;
  onSelectSeconds: (seconds: number) => void;
  onSelectDayPeriod?: (isAM: boolean) => void;
  timeFormat: "12" | "24";
  showSeconds: boolean;
};

export default Props;
