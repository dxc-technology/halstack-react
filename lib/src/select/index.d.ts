type SVG = string | (HTMLElement & SVGElement);
type Space = "xxsmall" | "xsmall" | "small" | "medium" | "large" | "xlarge" | "xxlarge";
type Margin = {
  top?: Space;
  bottom?: Space;
  left?: Space;
  right?: Space;
};

type OptionGroup = {
  /**
   * Label of the group to be shown in the select's listbox.
   */
  label: string;
  /**
   * List of the grouped options.
   */
  options: Option[];
};
type Option = {
  /**
   * Element used as the icon that will be placed before the option label. 
   * It can be a url of an image or an inline SVG. If the url option 
   * is the chosen one, take into account that the component's 
   * color styling tokens will not be applied to the image.
   */
  icon?: SVG;
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

type Props = {
  /**
   * Text to be placed above the select.
   */
  label?: string;
  /**
   * Name attribute of the input element. This attribute will allow users
   * to find the component's value during the submit event. In this event,
   * the component's value will always be a regular string, for both single
   * and multiple selection modes, been in the first one a single option
   * value and in the multiple variant more than one option value,
   * separated by commas.
   */
  name?: string;
  /**
   * Value of the select. If undefined, the component will be uncontrolled
   * and the value will be managed internally by the component.
   */
  value?: string | string[];
  /**
   * An array of objects representing the selectable options.
   */
  options?: Option[] | OptionGroup[];
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
   * next to the label and adding a default first option with empty value, been
   * the placeholder (if defined) its label. Otherwise, the field will be
   * considered required and an error will be passed as a parameter to the
   * OnBlur and onChange functions if an option wasn't selected.
   */
  optional?: boolean;
  /**
   * If true, enables search functionality.
   */
  searchable?: boolean;
  /**
   * If true, the select component will support multiple selected options.
   * In that case, value will be an array of strings with each selected
   * option value.
   */
  multiple?: boolean;
  /**
   * This function will be called when the user selects an option.
   * An object including the current value and the error (if the value entered is not valid) 
   * will be passed to this function. If there is no error, error will be null.
   */
  onChange?: (value: string | string[]) => void;
  /**
   * This function will be called when the select loses the focus. An
   * object including the value (or values) and the error (if the value
   * selected is not valid) will be passed to this function. If there is no error,
   * error will be null.
   */
  onBlur?: (val: { value: string | string[]; error: string }) => void;
  /**
   * If it is defined, the component will change its appearance, showing
   * the error below the select component. If it is not defined, the error
   * messages will be managed internally, but never displayed on its own.
   */
  error?: string;
  /**
   * Size of the margin to be applied to the component ('xxsmall' | 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' | 'xxlarge').
   * You can pass an object with 'top', 'bottom', 'left' and 'right' properties in order to specify different margin sizes.
   */
  margin?: Space | Margin;
  /**
   * Size of the component ('small' | 'medium' | 'large' | 'fillParent').
   */
  size?: "small" | "medium" | "large" | "fillParent";
  /**
   * Value of the tabindex attribute.
   */
  tabIndex?: number;
  /**
   * Reference to the component.
   */
  ref?: React.RefObject<HTMLDivElement>;
};

export default function DxcSelect(props: Props): JSX.Element;
