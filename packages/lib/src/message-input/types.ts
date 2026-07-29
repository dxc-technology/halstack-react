import { SVG } from "../common/utils";

export type SelectOption = {
  label?: string;
  icon?: string | SVG;
  value: string;
  onSelect: (value: string) => void;
  selected?: boolean;
};

type Props = {
  /**
   * If true, the voice recording button will be shown.
   */
  allowRecording?: boolean;
  /**
   * This function will be called when the selection of top items changes.
   * If this function is provided the message input will allow file selection.
   */
  callbackFile?: (files: File[]) => void;
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
   * Items to be shown at the top.
   */
  files?: File[];
  /**
   * If true, it indicates that a request is being processed after the user submits a query.
   */
  isGenerating?: boolean;
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
   * Options to be shown on the dropdown under the input.
   */
  selectOptions?: SelectOption[];
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
  onChange?: (val: { value: string; error?: string }) => void;
  /**
   * This function will be called when the user clicks on the button (submit or stop) or presses enter.
   * The type parameter indicates whether it's a "submit" or "stop" event. For submit events, "value", "files" and "selectedOption" are provided.
   */
  onButtonClick?: (val: {
    type: "submit" | "stop";
    value?: string;
    files?: File[];
    selectedOption?: SelectOption;
  }) => void;
  /**
   * Text to be put as placeholder of the input.
   */
  placeholder?: string;
  /**
   * Specifies the size of the component. The size will affect the width of the input.
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

export default Props;
