import { PrettifyTypes } from "../common/types";

export type CurrencyConfigType = {
  currency: string;
  currencyDisplay?: "code" | "symbol" | "narrowSymbol" | "name";
  currencySign?: "standard" | "accounting";
};

export type UnitsConfigType = {
  unit: string;
  unitDisplay?: "short" | "long" | "narrow";
};

export type ConfigType = PrettifyTypes<
  {
    thousandSeparator?: string;
    decimalSeparator?: string;
    symbolPosition?: "before" | "after";
  } & (
    | { currencyConfig?: CurrencyConfigType; unitsConfig?: never }
    | { currencyConfig?: never; unitsConfig?: UnitsConfigType }
  )
>;

export type AmountInputProps = {
  /**
   * Sets the alignment inside the input.
   */
  alignment?: "left" | "right";
  /**
   * Specifies a string to be used as the name for the textInput element when no `label` is provided.
   */
  ariaLabel?: string;
  /**
   * If true, the input will have an action to clear the entered value.
   */
  clearable?: boolean;
  /**
   * Configuration for the amount input, including currency and units.
   * This includes settings for currency, units, and formatting options like thousand and decimal separators, as well as the position of the currency symbol.
   */
  config?: ConfigType;
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
   * Specifies the maximum value allowed in the input.
   */
  maxValue?: number;
  /**
   * Specifies the minimum value allowed in the input.
   */
  minValue?: number;
  /**
   * Name attribute of the input element.
   */
  name?: string;
  /**
   * Specifies the number of decimal places allowed in the input.
   */
  numberOfDecimals?: number;
  /**
   * Specifies the number of integer places allowed in the input.
   */
  numberOfIntegers?: number;
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
   * If true, the input will be optional, showing '(Optional)'
   * next to the label. Otherwise, the field will be considered required and an error will be
   * passed as a parameter to the OnBlur and onChange functions when it has
   * not been filled.
   */
  optional?: boolean;
  /**
   * Text to be put as placeholder of the input.
   */
  placeholder?: string;
  /**
   * If true, the component will not be mutable, meaning the user can not edit the control.
   * In addition, the clear action will not be displayed even if the flag is set to true
   * and the custom action will not execute its onClick event.
   */
  readOnly?: boolean;
  /**
   * Ref to the input element.
   */
  ref?: React.Ref<HTMLInputElement>;
  /**
   * Size of the component.
   */
  size?: "small" | "medium" | "large" | "fillParent";
  /**
   * Value of the tabindex attribute.
   */
  tabIndex?: number;
  /**
   * Value of the input. If undefined, the component will be uncontrolled and the value will be managed internally by the component.
   */
  value?: string;
};

/**
 * Reference to the component.
 */
export type RefType = HTMLDivElement;

/**
 * Single suggestion of a Text Input component.
 */

export type { AmountInputProps as default };
