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
   * Element used as the icon that will be placed next to the label.
   */
  icon?: SVG;
  /**
   * @deprecated URL of the icon.
   */
  iconSrc?: string;
  /**
   * Text to be placed next inside the tag.
   */
  label?: string;
  /**
   * If defined, the tag will be displayed as an anchor, using this prop as "href".
   * Component will show some visual feedback on hover.
   */
  linkHref?: string;
  /**
   * If defined, the tag will be displayed as a button. This function will
   * be called when the user clicks the tag. Component will show some
   * visual feedback on hover.
   */
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  /**
   * Background color of the icon section of the tag.
   */
  iconBgColor?: string;
  /**
   * Whether the label should appear after or before the icon.
   */
  labelPosition?: "before" | "after";
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
   * Size of the component.
   */
  size?: "small" | "medium" | "large" | "fillParent" | "fitContent";
  /**
   * Value of the tabindex attribute.
   */
  tabIndex?: number;
};

export default Props;
