type Space = "xxsmall" | "xsmall" | "small" | "medium" | "large" | "xlarge" | "xxlarge";
type Margin = {
  top?: Space;
  bottom?: Space;
  left?: Space;
  right?: Space;
};

type LinkCommonProps = {
  /**
   * If true, the color is inherited from parent.
   */
  inheritColor?: boolean;
  /**
   * If true, the link is disabled.
   */
  disabled?: boolean;
  /**
   * Indicates the position of the icon in the component.
   */
  iconPosition?: "before" | "after";
  /**
   * Page to be opened when the user clicks on the link.
   */
  href?: string;
  /**
   * If true, the page is opened in a new browser tab.
   */
  newWindow?: boolean;
  /**
   * Size of the margin to be applied to the component ('xxsmall' | 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' | 'xxlarge').
   * You can pass an object with 'top', 'bottom', 'left' and 'right' properties in order to specify different margin sizes.
   */
  margin?: Space | Margin;
  /**
   * Value of the tabindex.
   */
  tabIndex?: number;
  /**
   * 
   */
  as?: string | React.ReactNode;
};
export type LinkTextProps = LinkCommonProps & {
  /**
   * Link text.
   */
  text: string;
  /**
   * Element or path used as the icon that will be placed next to the link text.
   */
  icon?: string | SVG;
};
export type LinkIconProps = LinkCommonProps & {
  /**
   * Link text.
   */
  text?: string;
  /**
   * Element or path used as the icon that will be placed next to the link text.
   */
  icon: string | SVG;
};
type Overload = {
  (props: LinkTextProps): JSX.Element;
  (props: LinkIconProps): JSX.Element;
};
type SVG = React.SVGProps<SVGSVGElement>;

export default Overload;
