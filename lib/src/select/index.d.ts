type SVG = string | (HTMLElement & SVGElement);
type Space = "xxsmall" | "xsmall" | "small" | "medium" | "large" | "xlarge" | "xxlarge";
type Margin = {
  top?: Space;
  bottom?: Space;
  left?: Space;
  right?: Space;
};

type OptionGroup = {
  label: string;
  options: Option[];
};
type Option = {
  icon?: string | SVG;
  label: string;
  value: string;
};

type Props = {
  label?: string;
  name?: string;
  value?: string | string[];
  options?: Option[] | OptionGroup[];
  helperText?: string;
  placeholder?: string;
  disabled?: boolean;
  optional?: boolean;
  searchable?: boolean;
  multiple?: boolean;
  onChange?: (value: string | string[]) => void;
  onBlur?: (val: { value: string | string[]; error: string }) => void;
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
