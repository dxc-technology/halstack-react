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
   * If true, the component will be disabled.
   */
  disabled?: boolean;
  /**
   * Value for the HTML properties title and aria-label.
   */
  title: string;
  /**
   * Element or path used as the icon that will be placed next to the label.
   */
  icon: string | SVG;
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
   * Value of the tabindex attribute.
   */
  tabIndex?: number;
};

export type RefType = HTMLButtonElement;

export default Props;
