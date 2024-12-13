import { Margin, SVG, Space } from "../common/utils";

type Size = "small" | "medium" | "large" | "fillParent" | "fitContent";

export type Option = {
  /**
   * Option display value.
   */
  label?: string;
  /**
   * Material Symbol name or SVG element as the icon that will be placed next to the label.
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
   * Material Symbol name or SVG element as the icon that will be placed next to the label.
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
  /**
   * Text representing advisory information related to the dropdown's trigger action.
   * Under the hood, this prop also serves as an accessible label for the component.
   */
  title?: string;
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
