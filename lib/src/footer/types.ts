type Space = "xxsmall" | "xsmall" | "small" | "medium" | "large" | "xlarge" | "xxlarge";
type SVG = React.ReactNode & React.SVGProps<SVGSVGElement>;

type SocialLink = {
  /**
   * URL of the page the link goes to.
   */
  href: string;
  /**
   * Material Symbol name or SVG element as the icon used for the link.
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
   * The text that will be displayed as copyright disclaimer.
   */
  copyright?: string;
  /**
   * The center section of the footer. Can be used to render custom
   * content in this area.
   */
  children?: React.ReactNode;
  /**
   * Size of the top margin to be applied to the footer.
   */
  margin?: Space;
  /**
   * Value of the tabindex for all interactive elements, except those
   * inside the custom area.
   */
  tabIndex?: number;
  /**
   * Determines the visual style and layout
   * - "default": The default mode with full content and styling.
   * - "reduced": A reduced mode with minimal content and styling.
   */
  mode?: "default" | "reduced";
};

export default FooterPropsType;
