type Space = "xxsmall" | "xsmall" | "small" | "medium" | "large" | "xlarge" | "xxlarge";
type Margin = {
  top?: Space;
  bottom?: Space;
  left?: Space;
  right?: Space;
};
type SVG = React.SVGProps<SVGSVGElement> | React.FunctionComponent<React.SVGProps<SVGSVGElement>>;

type OptionCommons = {
  /**
   * Number with the option inner value.
   */
  value: string;
  /**
   * @deprecated URL of the icon that will be placed. IconSrc and label can't be used at same time.
   */
  iconSrc?: string;
};
type OptionIcon = OptionCommons & {
  /**
   * String with the option display value.
   */
  label?: string;
  /**
   * Element used as the icon. Icon and label can't be used at same time.
   */
  icon: SVG;
};
type OptionLabel = OptionCommons & {
  /**
   * String with the option display value.
   */
  label: string;
  /**
   * Element used as the icon. Icon and label can't be used at same time.
   */
  icon?: SVG;
};
type Option = OptionIcon | OptionLabel;

type Props = {
  /**
   * Text to be placed above the component.
   */
  label?: string;
  /**
   * Helper text to be placed above the component.
   */
  helperText?: string;
  /**
   * The key(s) of the selected value(s). If the toggle group component doesn't allow multiple selection,
   * it must be one unique value. If the component allows multiple selection, value must be an array.
   * If undefined, the component will be uncontrolled and the value will be managed internally by the component.
   */
  value?: string | string[];
  /**
   * This function will be called every time the selection changes. The number with the key of the selected
   * value will be passed as a parameter to this function.
   * If multiple selection is allowed, an array of keys will be passed.
   */
  onChange?: (optionIndex: number | number[]) => void;
  /**
   * If true, the component will be disabled.
   */
  disabled?: boolean;
  /**
   * An array of objects representing the selectable options.
   */
  options: [Option, ...Option[]];
  /**
   * If true, the toggle group will support multiple selection. In that case, value must be an array of numbers with the keys of the selected values.
   */
  multiple?: boolean;
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
export default Props;
