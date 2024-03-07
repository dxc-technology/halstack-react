type Space = "xxsmall" | "xsmall" | "small" | "medium" | "large" | "xlarge" | "xxlarge";
type Margin = {
  top?: Space;
  bottom?: Space;
  left?: Space;
  right?: Space;
};
type Size = "small" | "medium" | "large" | "fillParent" | "fitContent";
type SVG = React.ReactNode & React.SVGProps<SVGSVGElement>;

export type Option = {
  /**
   * Option display value.
   */
  label?: string;
  /**
   * Element or path used as the icon that will be placed next to the
   * option label.
   */
  icon?: string | SVG;
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
   * Element or path used as the icon that will be placed next to the
   * dropdown label.
   */
  icon?: string | SVG;
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
   * If true, the component will be disabled.
   */
  disabled?: boolean;
  /**
   * If true, the options are shown when the dropdown is hover.
   */
  expandOnHover?: boolean;
  /**
   * This function will be called every time the selection changes.
   * The value of the selected option will be passed as a parameter.
   */
  onSelectOption: (value: string) => void;
  /**
   * Size of the margin to be applied to the component.
   * You can pass an object with 'top', 'bottom', 'left' and 'right'
   * properties in order to specify different margin sizes.
   */
  margin?: Space | Margin;
  /**
   * Size of the component.
   */
  size?: Size;
  /**
   * Value of the tabindex attribute.
   */
  tabIndex?: number;
};

export type DropdownMenuProps = {
  id: string;
  dropdownTriggerId: string;
  iconsPosition: "before" | "after";
  visualFocusIndex: number;
  menuItemOnClick: (value: string) => void;
  onKeyDown: (event: React.KeyboardEvent<HTMLUListElement>) => void;
  options: Option[];
  styles: React.CSSProperties;
};

export type DropdownMenuItemProps = {
  id: string;
  visuallyFocused: boolean;
  iconPosition: "before" | "after";
  onClick: (value: string) => void;
  option: Option;
};

export default Props;
