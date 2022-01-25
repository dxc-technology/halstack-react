type SVG = string | (HTMLElement & SVGElement);
type Space = "xxsmall" | "xsmall" | "small" | "medium" | "large" | "xlarge" | "xxlarge";
type Margin = {
  top?: Space;
  bottom?: Space;
  left?: Space;
  right?: Space;
};

type Option = {
  /**
   * Option display value.
   */
  label: string;
  /**
   * Element used as the icon that will be placed next to the
   * option label.
   */
  icon?: SVG;
  /**
   * @deprecated URL of the icon that will be placed next to the option label.
   */
  iconSrc?: string;
  /**
   * Option inner value.
   */
  value: string;
};

type Props = {
  /**
   * An array of objects representing the options.
   */
  options: Option[];
  /**
   * In case options include icons, whether the icon should appear
   * after or before the label.
   */
  optionsIconPosition?: "before" | "after";
  /**
   * Element used as the icon that will be placed next to the
   * dropdown label.
   */
  icon?: SVG;
  /**
   * @deprecated URL of the icon that will be placed next to the
   * dropdown label.
   */
  iconSrc?: string;
  /**
   * Whether the icon should appear after or before the label.
   */
  iconPosition?: "before" | "after";
  /**
   * Text to be placed within the dropdown.
   */
  label?: string;
  /**
   * Whether the arrow next to the label must be displayed or not.
   */
  caretHidden?: boolean;
  /**
   * This function will be called every time the selection changes.
   * The value of the selected option will be passed as a parameter.
   */
  onSelectOption: (value: string) => void;
  /**
   * If true, the options are showed when the dropdown is hover.
   */
  expandOnHover?: boolean;
  /**
   * Size of the margin to be applied to the component.
   * You can pass an object with 'top', 'bottom', 'left' and 'right'
   * properties in order to specify different margin sizes.
   */
  margin?: Space | Margin;
  /**
   * Size of the component.
   */
  size?: "small" | "medium" | "large" | "fillParent" | "fitContent";
  /**
   * Value of the tabindex.
   */
  tabIndex?: number;
  /**
   * If true, the component will be disabled.
   */
  disabled?: boolean;
};

export default Props;
