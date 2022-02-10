type Space = "xxsmall" | "xsmall" | "small" | "medium" | "large" | "xlarge" | "xxlarge";
type Size = {
  top?: Space;
  bottom?: Space;
  left?: Space;
  right?: Space;
};
type SocialLink = {
  logo?: ImgElement;
  logoSrc?: string;
  href?: string;
};
type BottomLink = {
  text?: string;
  href?: string;
};
type ImgElement = HTMLElement & (SVGElement | HTMLImageElement);

type FooterPropsType = {
  /**
   * An array of objects representing the links that will be rendered as
   * icons at the top-right side of the footer. Each object has the
   * following properties:
   * - logo: Element used as the icon for the link.
   * - logoSrc: The path of an icon for the link. @deprecated
   * - href: URL of the page the link goes to.
   */
  socialLinks?: [SocialLink, ...SocialLink[]];
  /**
   * An array of objects representing the links that will be rendered at
   * the bottom part of the footer. Each object has the following
   * properties:
   * - text: Text for the link.
   * - href: URL of the page the link goes to.
   */
  bottomLinks?: [BottomLink, ...BottomLink[]];
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
  /**
   * Size of the padding to be applied to the custom area of the component.
   * You can pass an object with properties in order to specify different padding sizes.
   */
  padding?: Space | Size;
};

export default FooterPropsType;
