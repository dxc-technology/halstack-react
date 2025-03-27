type Option = {
  /**
   * Label of the option placed next to the radio input.
   */
  value: string;
  /**
   * Value of the option. It should be unique and
   * not an empty string, which is reserved to the optional item added
   * by 'optional' prop.
   */
  label: string;
  /**
   * If true, disables the option.
   */
  disabled?: boolean;
};

type RadioGroupProps = {
  /**
   * Specifies a string to be used as the name for the radio group when no `label` is provided.
   */
  ariaLabel?: string;
  /**
   * Initial value of the radio group, only when it is uncontrolled.
   */
  defaultValue?: string;
  /**
   * If true, the component will be disabled.
   */
  disabled?: boolean;
  /**
   * If it is a defined value and also a truthy string, the component will
   * change its appearance, showing the error below the radio group. If the
   * defined value is an empty string, it will reserve a space below the
   * component for a future error, but it would not change its look. In
   * case of being undefined or null, both the appearance and the space for
   * the error message would not be modified.
   */
  error?: string;
  /**
   * Helper text to be placed above the radio group.
   */
  helperText?: string;
  /**
   * Text to be placed above the radio group.
   */
  label?: string;
  /**
   * Name attribute of the input element. This attribute will allow users
   * to find the component's value during the submit event.
   */
  name?: string;
  /**
   * If true, the radio group will be optional, showing
   * (Optional) next to the label and adding a default last
   * option with an empty string as value. Otherwise, the field will be
   * considered required and an error will be passed as a parameter to the
   * OnBlur functions if an option wasn't selected.
   */
  optional?: boolean;
  /**
   * Label of the optional radio input.
   */
  optionalItemLabel?: string;
  /**
   * An array of objects representing the selectable options.
   */
  options: Option[];
  /**
   * This function will be called when the radio group loses the focus. An
   * object including the value and the error will be passed to this
   * function. If there is no error, error will not be defined.
   */
  onBlur?: (val: { value?: string; error?: string }) => void;
  /**
   * This function will be called when the user chooses an option. The new
   * value will be passed to this function.
   */
  onChange?: (value: string) => void;
  /**
   * If true, the component will not be mutable, meaning the user can not edit the control.
   */
  readOnly?: boolean;
  /**
   * Sets the orientation of the options within the radio group.
   */
  stacking?: "row" | "column";
  /**
   * Value of the tabindex attribute.
   */
  tabIndex?: number;
  /**
   * Value of the radio group. If undefined, the component will be
   * uncontrolled and the value will be managed internally by the
   * component.
   */
  value?: string;
};

/**
 * Reference to the component.
 */
export type RefType = HTMLDivElement;

/**
 * Radio input prop types.
 */
export type RadioInputProps = {
  checked: boolean;
  disabled: boolean;
  error?: string;
  focused: boolean;
  label: string;
  onClick: () => void;
  readOnly: boolean;
  tabIndex: number;
};

export default RadioGroupProps;
