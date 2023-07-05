type Space = "xxsmall" | "xsmall" | "small" | "medium" | "large" | "xlarge" | "xxlarge";
type Size = {
  top?: Space;
  bottom?: Space;
  left?: Space;
  right?: Space;
};
type SVG = React.ReactNode & React.SVGProps<SVGSVGElement>;

type SocialLink = {
  /**
   * URL of the page the link goes to.
   */
  href: string;
  /**
   * Element used as the icon for the link.
   */
  logo: string | SVG;
  /**
   * Value for the HTML properties title and aria-label.
   */
  title: string;
};

type BottomLink = {
  /**
   * URL of the page the link goes to.
   */
  href: string;
  /**
   * Text for the link.
   */
  text: string;
};

type FooterPropsType = {
  /**
   * An array of objects representing the links that will be rendered as
   * icons at the top-right side of the footer.
   */
  socialLinks?: SocialLink[];
  /**
   * An array of objects representing the links that will be rendered at
   * the bottom part of the footer.
   */
  bottomLinks?: BottomLink[];
  /**
   * The center section of the footer. Can be used to render custom
   * content in this area.
   */
  children?: React.ReactNode;
  /**
   * The text that will be displayed as copyright disclaimer.
   */
  copyright?: string;
  /**
   * Value of the tabindex for all interactuable elements, except those
   * inside the custom area.
   */
  tabIndex?: number;
  /**
   * Size of the top margin to be applied to the footer.
   */
  margin?: Space | Size;
};

export default FooterPropsType;
