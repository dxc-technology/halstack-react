type SVG = React.SVGProps<SVGSVGElement>;

type SidenavPropsType = {
  /**
   * The area inside the sidenav. This area can be used to render custom content.
   */
  children: React.ReactNode;
};

export type SidenavTitlePropsType = {
  /**
   * The area inside the sidenav title. This area can be used to render custom content.
   */
  children: React.ReactNode;
  /**
   * The icon to be displayed in the sidenav title.
   */
  icon?: SVG;
};

export type SidenavSectionPropsType = {
  /**
   * The area inside the sidenav section. This area can be used to render sidenav groups or links.
   */
  children: React.ReactNode;
};

export type SidenavGroupPropsType = {
  children: React.ReactNode;
  title: string;
  collapsable: boolean;
  icon?: SVG;
};

export type SidenavLinkPropsType = {
  /**
   * Value of the tabindex.
   */
  tabIndex?: number;
  /**
   * Page to be opened when the user clicks on the link.
   */
  href?: string;
  /**
   * If true, the page is opened in a new browser tab.
   */
  newWindow?: boolean;
  /**
   * Element or path used as the icon that will be placed to the left of the link text.
   */
  icon?: SVG;
  /**
   * If true, the link will be marked as selected. This can also affect the group if it is closed to indicate that one of its links is selected.
   */
  selected?: boolean;
  /**
   * The area inside the sidenav link. This area can be used to render custom content.
   */
  children: React.ReactNode;
};

export default SidenavPropsType;
