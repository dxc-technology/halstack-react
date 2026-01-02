export type SearchBarTriggerProps = {
  /**
   * Function invoked when the trigger button is clicked.
   */
  onTriggerClick?: () => void;
};
export type SearchBarProps = {
  /**
   * If true, the search bar input will be focused when rendered.
   */
  autoFocus?: boolean;
  /**
   * If true, the component will be disabled.
   */
  disabled?: boolean;
  /**
   * Function invoked when the search bar loses focus.
   */
  onBlur?: (value: string) => void;
  /**
   * Function invoked when the user cancels the search.
   */
  onCancel?: () => void;
  /**
   * Function invoked when the user changes the input value.
   */
  onChange?: (value: string) => void;
  /**
   * Function invoked when the Enter key is pressed.
   */
  onEnter?: (value: string) => void;
  /**
   * Placeholder text displayed in the search bar input field.
   */
  placeholder?: string;
};
