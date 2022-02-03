type Space = "xxsmall" | "xsmall" | "small" | "medium" | "large" | "xlarge" | "xxlarge";

type Padding = {
  top?: Space;
  bottom?: Space;
  left?: Space;
  right?: Space;
};

export type SidenavLinkPropsType = {
  /**
   * Value of the tabindex.
   */
  tabIndex?: number;

  /**
   * Page to be opened when the user clicks on the link.
   */
  href: string;

  /**
   * This function will be called when the user clicks the link.
   */
  onClick: () => void

  /**
   * The area inside the sidenav link. This area can be used to render custom content.
   */
  children: React.ReactNode;
};

export type SidenavTitlePropsType = {
  /**
   * The area inside the sidenav title                                                                                              . This area can be used to render custom content.
   */
  children: React.ReactNode;
};

export type SidenavSubtitlePropsType = {
  /**
   * The area inside the sidenav subtitle. This area can be used to render custom content.
   */
  children: React.ReactNode;
};

type SidenavPropsType = {
  /**
   * Size of the padding to be applied to the custom area ('xxsmall' | 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' | 'xxlarge').
   * You can pass an object with 'top', 'bottom', 'left' and 'right' properties in order to specify different padding sizes.
   */
  padding?: Space | Padding;

  /**
   * The area inside the sidenav. This area can be used to render custom content.
   */
  children: React.ReactNode;
};

export default SidenavPropsType;
