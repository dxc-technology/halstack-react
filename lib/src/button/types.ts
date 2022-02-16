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
   * Text to be placed next to the button.
   */
  label?: string;
  /**
   * Uses one of the available button modes.
   */
  mode?: "primary" | "secondary" | "text";
  /**
   * If true, the component will be disabled.
   */
  disabled?: boolean;
  /**
   * Whether the icon should appear after or before the label.
   */
  iconPosition?: "before" | "after";
  /**
   * This prop corresponds to the 'type' prop of the button in html.
   */
  type?: "button" | "reset" | "submit";
  /**
   * Element used as the icon that will be placed next to the button label.
   */
  icon?: SVG;
  /**
   * @deprecated URL of the icon that will be placed next to the button label.
   */
  iconSrc?: string;
  /**
   * This function will be called when the user clicks the button.
   */
  onClick?: () => void;
  /**
   * Size of the margin to be applied to the component ('xxsmall' | 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' | 'xxlarge').
   * You can pass an object with 'top', 'bottom', 'left' and 'right' properties in order to specify different margin sizes.
   */
  margin?: Space | Margin;
  /**
   * Size of the component.
   */
  size?: "small" | "medium" | "large" | "fillParent" | "fitContent";
  /**
   * Value of the tabindex attribute.
   */
  tabIndex?: number;
};

export default Props;
