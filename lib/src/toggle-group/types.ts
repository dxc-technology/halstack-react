type Space = "xxsmall" | "xsmall" | "small" | "medium" | "large" | "xlarge" | "xxlarge";
type Margin = {
  top?: Space;
  bottom?: Space;
  left?: Space;
  right?: Space;
};
type SVG = React.SVGProps<SVGSVGElement>;

type OptionCommons = {
  /**
   * Number with the option inner value.
   */
  value: number;
};
type OptionIcon = OptionCommons & {
  /**
   * String with the option display value.
   */
  label?: string;
  /**
   * Element used as the icon. Icon and label can't be used at same time.
   */
  icon: string | SVG;
};
type OptionLabel = OptionCommons & {
  /**
   * String with the option display value.
   */
  label: string;
  /**
   * Element used as the icon. Icon and label can't be used at same time.
   */
  icon?: string | SVG;
};
type Option = OptionIcon | OptionLabel;

type CommonProps = {
  /**
   * Text to be placed above the component.
   */
  label?: string;
  /**
   * Helper text to be placed above the component.
   */
  helperText?: string;
  /**
   * If true, the component will be disabled.
   */
  disabled?: boolean;
  /**
   * An array of objects representing the selectable options.
   */
  options: Option[];
  /**
   * Size of the margin to be applied to the component ('xxsmall' | 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' | 'xxlarge').
   * You can pass an object with 'top', 'bottom', 'left' and 'right' properties in order to specify different margin sizes.
   */
  margin?: Space | Margin;
  /**
   * Value of the tabindex.
   */
  tabIndex?: number;
};

type SingleSelectionToggle = CommonProps & {
  /**
   * If true, the toggle group will support multiple selection. In that case, value must be an array of numbers with the keys of the selected values.
   */
  multiple?: false;
  /**
   * The key of the selected value. If the component allows multiple selection, value must be an array.
   * If undefined, the component will be uncontrolled and the value will be managed internally by the component.
   */
  value?: number;
  /**
   * This function will be called every time the selection changes. The number with the key of the selected
   * value will be passed as a parameter to this function.
   */
  onChange?: (optionIndex: number) => void;
};
type MultipleSelectionToggle = CommonProps & {
  /**
   * If true, the toggle group will support multiple selection. In that case, value must be an array of numbers with the keys of the selected values.
   */
  multiple: true;
  /**
   * An array with the keys of the selected values.
   * If undefined, the component will be uncontrolled and the value will be managed internally by the component.
   */
  value?: number[];
  /**
   * This function will be called every time the selection changes. An array with the key of
   * the selected values will be passed as a parameter to this function.
   */
  onChange?: (optionIndex: number[]) => void;
};
type Props = SingleSelectionToggle | MultipleSelectionToggle;

export default Props;
