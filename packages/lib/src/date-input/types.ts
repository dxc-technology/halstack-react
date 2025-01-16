import { Dayjs } from "dayjs";
import { Margin, Space } from "../common/utils";

type Props = {
  /**
   * Initial value of the input element, only when it is uncontrolled.
   */
  defaultValue?: string;
  /**
   * Value of the input element. If undefined, the component will be uncontrolled and the value will be managed internally by the component.
   */
  value?: string;
  /**
   * Text to be placed above the date input.
   */
  label?: string;
  /**
   * Name attribute of the input element.
   */
  name?: string;
  /**
   * Helper text to be placed above the date.
   */
  helperText?: string;
  /**
   * If true, the date format will appear as placeholder in the field.
   */
  placeholder?: boolean;
  /**
   * The format in which the date value will be displayed. User must use this format when editing the value or it will be considered as an invalid date.
   */
  format?: string;
  /**
   * If true, the date input will have an action to clear the entered value.
   */
  clearable?: boolean;
  /**
   * If true, the component will be disabled.
   */
  disabled?: boolean;
  /**
   * If true, the date will be optional, showing the text '(Optional)'
   * next to the label. Otherwise, the field will be considered required and an error will be
   * passed as a parameter to the OnBlur and onChange functions when it has
   * not been filled.
   */
  optional?: boolean;
  /**
   * If true, the component will not be mutable, meaning the user can not edit the control.
   * The date picker cannot be opened either. In addition, the clear action will not be displayed
   * even if the flag is set to true.
   */
  readOnly?: boolean;
  /**
   * This function will be called when the user types within the input
   * element of the component. An object including the string value, the
   * error and the date value will be passed to this function.
   * If the string value is a valid date, error will
   * be undefined. Also, if the string value is not a valid date, date will be undefined.
   */
  onChange?: (val: { value: string; error?: string; date?: Date }) => void;
  /**
   * This function will be called when the input element loses the focus.
   * An object including the string value, the error and the date value
   * will be passed to this function. If the string value is a valid date, error will
   * be undefined. Also, if the string value is not a valid date, date will be undefined.
   */
  onBlur?: (val: { value: string; error?: string; date?: Date }) => void;
  /**
   * If it is a defined value and also a truthy string, the component will
   * change its appearance, showing the error below the date input
   * component. If the defined value is an empty string, it will reserve a
   * space below the component for a future error, but it would not change
   * its look. In case of being undefined or null, both the appearance and
   * the space for the error message would not be modified.
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
   * Specifies a string to be used as the name for the date input element when no `label` is provided.
   */
  ariaLabel?: string;
};

export type DateType = { day: number; month: number; year: number };

export type DatePickerPropsType = {
  /**
   * Initial selected date value. If invalid the actual date will be used instead.
   */
  date: Dayjs;
  /**
   * Function called when a date is selected.
   */
  onDateSelect: (date: Dayjs) => void;
  /**
   * Id assigned to the date picker.
   */
  id: string;
};

export type CalendarPropsType = {
  /**
   * Initial selected date value. If invalid the actual date will be used instead.
   */
  selectedDate: Dayjs;
  /**
   * Date shown by the calendar.
   */
  innerDate: Dayjs;
  /**
   * Function called when the shown date needs to be updated.
   */
  onInnerDateChange: (date: Dayjs) => void;
  /**
   * Function called when a date is selected.
   */
  onDaySelect: (date: Dayjs) => void;
  /**
   * Current date.
   */
  today: Dayjs;
};

export type YearPickerPropsType = {
  /**
   * Initial selected date value. If invalid the actual date will be used instead.
   */
  selectedDate: Dayjs;
  /**
   * Function called when a year is selected.
   */
  onYearSelect: (year: number) => void;
  /**
   * Current date.
   */
  today: Dayjs;
};
/**
 * Reference to the component.
 */
export type RefType = HTMLDivElement;

export default Props;
