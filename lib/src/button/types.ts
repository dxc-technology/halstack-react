type Space = "xxsmall" | "xsmall" | "small" | "medium" | "large" | "xlarge" | "xxlarge";
type Margin = {
  top?: Space;
  bottom?: Space;
  left?: Space;
  right?: Space;
};
type SVG = React.ReactNode & React.SVGProps<SVGSVGElement>;

type Props = {
  /**
   * Text to be placed in the button.
   */
  label?: string;
  /**
   * The available button modes.
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
   * Value for the HTML properties title and aria-label.
   */
  title?: string;
  /**
   * 'type' html prop of the button.
   */
  type?: "button" | "reset" | "submit";
  /**
   * Material Symbol name or SVG element as the icon that will be placed next to the label.
   */
  icon?: string | SVG;
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
