import { CSSProperties } from "react";
import { Margin, SVG, Space } from "../common/utils";

export type ListOptionGroupType = {
  /**
   * Label of the group to be shown in the select's listbox.
   */
  label: string;
  /**
   * List of the grouped options.
   */
  options: ListOptionType[];
};
export type ListOptionType = {
  /**
   * Element used as the icon that will be placed before the option label.
   * It can be an inline SVG or Material Symbol name. If the url option
   * is the chosen one, take into account that the component's
   * color styling tokens will not be applied to the image.
   */
  icon?: string | SVG;
  /**
   * Label of the option to be shown in the select's listbox.
   */
  label: string;
  /**
   * Value of the option. It should be unique and
   * not an empty string, which is reserved to the empty option added
   * by optional prop.
   */
  value: string;
};

type CommonProps = {
  /**
   * Text to be placed above the select.
   */
  label?: string;
  /**
   * Name attribute of the input element. This attribute will allow users
   * to find the component's value during the submit event. In this event,
   * the component's value will always be a regular string, for both single
   * and multiple selection modes, being a single option value in the first case
   * and more than one value when multiple selection is available, separated by commas.
   */
  name?: string;
  /**
   * An array of objects representing the selectable options.
   */
  options: ListOptionType[] | ListOptionGroupType[];
  /**
   * Helper text to be placed above the select.
   */
  helperText?: string;
  /**
   * Text to be put as placeholder of the select.
   */
  placeholder?: string;
  /**
   * If true, the component will be disabled.
   */
  disabled?: boolean;
  /**
   * If true, the select will be optional, showing '(Optional)'
   * next to the label and adding a default first option with an empty string as value,
   * been the placeholder (if defined) its label. Otherwise, the field will be
   * considered required and an error will be passed as a parameter to the
   * OnBlur and onChange functions if an option wasn't selected.
   */
  optional?: boolean;
  /**
   * If true, enables search functionality.
   */
  searchable?: boolean;
  /**
   * Defines the search mode when searchable is true.
   * If true, matches options that start with the search text.
   * If false, matches options that contain the search text anywhere in their label.
   */
  searchByStartsWith?: boolean;
  /**
   * If it is a defined value and also a truthy string, the component will
   * change its appearance, showing the error below the select component.
   * If the defined value is an empty string, it will reserve a space below
   * the component for a future error, but it would not change its look. In
   * case of being undefined or null, both the appearance and the space for
   * the error message would not be modified.
   */
  error?: string;
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
   * Specifies a string to be used as the name for the select element when no `label` is provided.
   */
  ariaLabel?: string;
};

type SingleSelect = CommonProps & {
  /**
   * If true, the select component will support multiple selected options.
   * In that case, value will be an array of strings with each selected
   * option value.
   */
  multiple?: false;
  /**
   * Initial value of the select, only when it is uncontrolled.
   */
  defaultValue?: string;
  /**
   * Value of the select. If undefined, the component will be uncontrolled
   * and the value will be managed internally by the component.
   */
  value?: string;
  /**
   * This function will be called when the user selects an option.
   * An object including the current value and the error (if the value entered is not valid)
   * will be passed to this function. If there is no error, error will not be defined.
   */
  onChange?: (val: { value: string; error?: string }) => void;
  /**
   * This function will be called when the select loses the focus. An
   * object including the value and the error (if the value
   * selected is not valid) will be passed to this function. If there is no error,
   * error will not be defined.
   */
  onBlur?: (val: { value: string; error?: string }) => void;
};
type MultipleSelect = CommonProps & {
  /**
   * If true, the select component will support multiple selected options.
   * In that case, value will be an array of strings with each selected
   * option value.
   */
  multiple: true;
  /**
   * Initial value of the select, only when it is uncontrolled.
   */
  defaultValue?: string[];
  /**
   * Value of the select. If undefined, the component will be uncontrolled
   * and the value will be managed internally by the component.
   */
  value?: string[];
  /**
   * This function will be called when the user selects an option.
   * An object including the current selected values and the error (if the value entered is not valid)
   * will be passed to this function. If there is no error, error will be null.
   */
  onChange?: (val: { value: string[]; error?: string }) => void;
  /**
   * This function will be called when the select loses the focus. An
   * object including the selected values and the error (if the value
   * selected is not valid) will be passed to this function. If there is no error,
   * error will be null.
   */
  onBlur?: (val: { value: string[]; error?: string }) => void;
};

type Props = SingleSelect | MultipleSelect;

/**
 * Single option of the select component.
 */
export type OptionProps = {
  id: string;
  option: ListOptionType;
  onClick: (option: ListOptionType) => void;
  multiple: boolean;
  visualFocused: boolean;
  isGroupedOption?: boolean;
  isLastOption: boolean;
  isSelected: boolean;
};

/**
 * Listbox from the select component.
 */
export type ListboxProps = {
  id: string;
  currentValue: string | string[];
  options: ListOptionType[] | ListOptionGroupType[];
  visualFocusIndex: number;
  lastOptionIndex: number;
  multiple: boolean;
  optional: boolean;
  optionalItem: ListOptionType;
  searchable: boolean;
  handleOptionOnClick: (option: ListOptionType) => void;
  styles: CSSProperties;
};

/**
 * Reference to the select component.
 */
export type RefType = HTMLDivElement;

export default Props;
