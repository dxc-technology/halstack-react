type Space = "xxsmall" | "xsmall" | "small" | "medium" | "large" | "xlarge" | "xxlarge";
type Margin = {
  top?: Space;
  bottom?: Space;
  left?: Space;
  right?: Space;
};

type SVG = React.SVGProps<SVGSVGElement> | React.FunctionComponent<React.SVGProps<SVGSVGElement>>;

type Props = {
  /**
   * Text to be placed on the chip.
   */
  label?: string;
  /**
   * Element used as icon to be placed after the chip label.
   */
  suffixIcon?: SVG;
  /**
   * Element used as icon to be placed before the chip label.
   */
  prefixIcon?: SVG;
  /**
   * @deprecated Path of the icon to be placed after the chip label.
   */
  suffixIconSrc?: string;
  /**
   * This function will be called when the suffix is clicked.
   */
  onClickSuffix?: (label: string | undefined) => void;
  /**
   * @deprecated Path of the icon to be placed before the chip label.
   */
  prefixIconSrc?: string;
  /**
   * This function will be called when the prefix is clicked.
   */
  onClickPrefix?: (label: string | undefined) => void;
  /**
   * If true, the component will be disabled.
   */
  disabled?: boolean;
  /**
   * Size of the margin to be applied to the component ('xxsmall' | 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' | 'xxlarge'). 
   * You can pass an object with 'top', 'bottom', 'left' and 'right' properties in order to specify different margin sizes.
   */
  margin?: Space | Margin;
  /**
   * Value of the tabindex attribute.
   */
  tabIndex?: number;
};

export default Props;
