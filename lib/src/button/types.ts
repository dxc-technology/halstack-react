type Size = "small" | "medium" | "large" | "fillParent" | "fitContent";
type Space = "xxsmall" | "xsmall" | "small" | "medium" | "large" | "xlarge" | "xxlarge";
type Margin = {
  top?: Space;
  bottom?: Space;
  left?: Space;
  right?: Space;
};
type SVG = string | (HTMLElement & SVGElement);


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
   * DEPRECATED. URL of the icon that will be placed next to the button label.
   */
  iconSrc?: string;
  /**
   * Element used as the icon that will be placed next to the button label.
   */
  icon?: SVG;
  /**
   * This function will be called when the user clicks the button. The event object will be passed as a parameter.
   */
  onClick?: void;
  /**
   * Size of the margin to be applied to the component ('xxsmall' | 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' | 'xxlarge'). 
   * You can pass an object with 'top', 'bottom', 'left' and 'right' properties in order to specify different margin sizes.
   */
  margin?: Space | Margin;
  /**
   * Size of the component ('small' | 'medium' | 'large' | 'fillParent' | 'fitContent').
   */
  size?: Size;
  /**
   * Value of the tabindex.
   */
  tabIndex?: number;
};

export default Props;
