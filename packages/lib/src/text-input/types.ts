import { CSSProperties, ReactNode } from "react";
import { Margin, SVG, Space } from "../common/utils";

type Action = {
  /**
   * This function will be called when the user clicks the action.
   */
  onClick: () => void;
  /**
   * Icon to be placed in the action..
   */
  icon: string | SVG;
  /**
   * Text representing advisory information related
   * to the button's action. Under the hood, this prop also serves
   * as an accessible label for the component.
   */
  title?: string;
};

type Props = {
  /**
   * Sets the alignment inside the input.
   */
  alignment?: "left" | "right" | "center";
  /**
   * Text to be placed above the input. This label will be used as the aria-label attribute of the list of suggestions.
   */
  label?: string;
  /**
   * Name attribute of the input element.
   */
  name?: string;
  /**
   * Initial value of the input, only when it is uncontrolled.
   */
  defaultValue?: string;
  /**
   * Value of the input. If undefined, the component will be uncontrolled and the value will be managed internally by the component.
   */
  value?: string;
  /**
   * Helper text to be placed above the input.
   */
  helperText?: string;
  /**
   * Text to be put as placeholder of the input.
   */
  placeholder?: string;
  /**
   * Action to be shown in the input.
   */
  action?: Action;
  /**
   * If true, the input will have an action to clear the entered value.
   */
  clearable?: boolean;
  /**
   * If true, the component will be disabled.
   */
  disabled?: boolean;
  /**
   * If true, the component will not be mutable, meaning the user can not edit the control.
   * In addition, the clear action will not be displayed even if the flag is set to true
   * and the custom action will not execute its onClick event.
   */
  readOnly?: boolean;
  /**
   * If true, the input will be optional, showing '(Optional)'
   * next to the label. Otherwise, the field will be considered required and an error will be
   * passed as a parameter to the OnBlur and onChange functions when it has
   * not been filled.
   */
  optional?: boolean;
  /**
   * Prefix to be placed before the input value.
   */
  prefix?: string;
  /**
   * Suffix to be placed after the input value.
   */
  suffix?: string;
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
   * These are the options to be displayed as suggestions. It can be either an array or a function:
   *    - Array:    Array of options that will be filtered by the component.
   *    - Function: This function will be called when the user changes the value.
   *                It will receive the new value as a parameter and should return a promise
   *                that resolves to an array with the filtered options.
   */
  suggestions?: string[] | ((value: string) => Promise<string[]>);
  /**
   * Regular expression that defines the valid format allowed by the input.
   * This will be checked both when the input element loses the focus and
   * while typing within it. If the string entered does not match the
   * pattern, the onBlur and onChange functions will be called with the
   * current value and an internal error informing that this value does not
   * match the pattern. If the pattern is met, the error parameter of both
   * events will not be defined.
   */
  pattern?: string;
  /**
   * Specifies the minimum length allowed by the input.
   * This will be checked both when the input element loses the
   * focus and while typing within it. If the string entered does not
   * comply the minimum length, the onBlur and onChange functions will be called
   * with the current value and an internal error informing that the value
   * length does not comply the specified range. If a valid length is
   * reached, the error parameter of both events will not be defined.
   */
  minLength?: number;
  /**
   * Specifies the maximum length allowed by the input.
   * This will be checked both when the input element loses the
   * focus and while typing within it. If the string entered does not
   * comply the maximum length, the onBlur and onChange functions will be called
   * with the current value and an internal error informing that the value
   * length does not comply the specified range. If a valid length is
   * reached, the error parameter of both events will not be defined.
   */
  maxLength?: number;
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
   * Specifies a string to be used as the name for the textInput element when no `label` is provided.
   */
  ariaLabel?: string;
};

/**
 * List of suggestions of an Text Input component.
 */
export type SuggestionsProps = {
  id: string;
  value: string;
  suggestions: string[];
  visualFocusIndex: number;
  highlightedSuggestions: boolean;
  searchHasErrors: boolean;
  isSearching: boolean;
  suggestionOnClick: (suggestion: string) => void;
  styles: CSSProperties;
};

/**
 * Reference to the component.
 */
export type RefType = HTMLDivElement;

/**
 * Single suggestion of an Text Input component.
 */
export type SuggestionProps = {
  id: string;
  value: string;
  onClick: (suggestion: string) => void;
  suggestion: string;
  isLast: boolean;
  visuallyFocused: boolean;
  highlighted: boolean;
};

export type AutosuggestWrapperProps = {
  condition: boolean;
  wrapper: (children: ReactNode) => JSX.Element;
  children: ReactNode;
};

export default Props;
