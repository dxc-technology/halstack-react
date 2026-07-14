import { CSSProperties, ReactNode } from "react";

export type Item = {
  /**
   * Unique identifier of the chip.
   */
  id: string;
  /**
   * Text representing advisory information related
   * to the button's action. Under the hood, this prop also serves
   * as an accessible label for the component.
   */
  title?: string;
  /**
   * The chip label.
   */
  label: string;
};

type Props = {
  /**
   * Options to be shown on the dropdown under the input.
   */
  bottomOptions?: {
    label?: string;
    icon?: string | (React.ReactNode & React.SVGProps<SVGSVGElement>);
    value: string;
    onSelect: () => void;
  }[];
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
   * Text to be put as placeholder of the input.
   */
  placeholder?: string;
  /**
   * Specifies the size of the component. The size will affect the width of the input.
   */
  size?: "small" | "medium" | "large" | "fillParent";
  /**
   * Items to be shown at the top.
   */
  topItems?: Item[];
  /**
   * This function will be called when the selection of top items changes.
   */
  callbackItems?: (items: Item[]) => void;
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
   * This function will be called when the user clicks on the button or presses enter.
   */
  onSubmit?: (signal?: AbortSignal) => void | Promise<void>;
  /**
   * If true, the file upload button will be shown.
   */
  allowFileUploads?: boolean;
  /**
   * If true, the voice recording button will be shown.
   */
  allowVoiceInput?: boolean;
  /**
   * If true, it indicates that a request is being processed after the user submits a query.
   */
  isLoading?: boolean;
  /**
   * This function will be called to stop the current action.
   */
  onStop?: () => void;
  /**
   * If true, the voice recording is active. Use this prop to control the recording state externally.
   * If undefined, the component will manage the recording state internally.
   */
  isRecording?: boolean;
  /**
   * This function will be called when the recording state changes (starts or stops).
   * Only used when isRecording prop is controlled.
   */
  onRecordingChange?: (isRecording: boolean) => void;
  /**
   * This function will be called with the transcript text as the user speaks.
   * If provided, the transcript won't be automatically added to the input value.
   */
  onTranscript?: (transcript: string) => void;
};

/**
 * List of suggestions of a Text Input component.
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
 * Single suggestion of a Text Input component.
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

export type BottomSelectProps = {
  options: {
    label?: string;
    icon?: string | (React.ReactNode & React.SVGProps<SVGSVGElement>);
    value: string;
    onSelect: () => void;
  }[];
  disabled?: boolean;
};

export default Props;
