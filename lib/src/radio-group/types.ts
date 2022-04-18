export type Option = {
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
   * Text to be placed above the radio group.
   */
  label: string;
  /**
   * Name attribute of the input element. This attribute will allow users
   * to find the component's value during the submit event.
   */
  name?: string;
  /**
   * Helper text to be placed above the radio group.
   */
  helperText?: string;
  /**
   * An array of objects representing the selectable options.
   */
  options: Option[];
  /**
   * If true, the component will be disabled.
   */
  disabled?: boolean;
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
   * If true, the component will be marked as readonly.
   */
  readonly?: boolean;
  /**
   * Sets the orientation of the options within the radio group.
   */
  stacking?: "row" | "column";
  /**
   * Initial value of the radio group, only when it is uncontrolled.
   */
  defaultValue?: string;
  /**
   * Value of the radio group. If undefined, the component will be
   * uncontrolled and the value will be managed internally by the
   * component.
   */
  value?: string;
  /**
   * This function will be called when the user chooses an option. The new
   * value will be passed to this function.
   */
  onChange?: (value: string) => void;
  /**
   * This function will be called when the radio group loses the focus. An
   * object including the value and the error will be passed to this
   * function. If there is no error, error will not be defined.
   */
  onBlur?: (val: { value?: string; error?: string }) => void;
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
   * Value of the tabindex attribute.
   */
  tabIndex?: number;
};

/**
 * Reference to the component.
 */
export type RefType = HTMLDivElement;

/**
 * Single radio prop types.
 */
export type RadioProps = {
  option: Option;
  currentValue?: string;
  onClick: () => void;
  error?: string;
  disabled: boolean;
  focused: boolean;
  readonly: boolean;
  tabIndex: number;
};

export default RadioGroupProps;
