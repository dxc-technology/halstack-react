type SVG = React.ReactNode & React.SVGProps<SVGSVGElement>;

export type SidenavTitlePropsType = {
  /**
   * The area inside the sidenav title. This area can be used to render custom content.
   */
  children: React.ReactNode;
};

export type SidenavSectionPropsType = {
  /**
   * The area inside the sidenav section. This area can be used to render sidenav groups, links and custom content.
   */
  children: React.ReactNode;
};

export type SidenavGroupPropsType = {
  /**
   * The title of the sidenav group.
   */
  title?: string;
  /**
   * If true, the sidenav group will be a button that will allow you to collapse the links contained within it.
   * In addition, if it's collapsed and contains the currently selected link, the group title will also be marked as selected.
   */
  collapsable?: boolean;
  /**
   * The Material symbol or SVG icon to be displayed next to the title of the group.
   */
  icon?: string | SVG;
  /**
   * The area inside the sidenav group. This area can be used to render sidenav links.
   */
  children: React.ReactNode;
};

export type SidenavLinkPropsType = {
  /**
   * Page to be opened when the user clicks on the link.
   */
  href?: string;
  /**
   * If true, the page is opened in a new browser tab.
   */
  newWindow?: boolean;
  /**
   * The Material symbol or SVG element used as the icon that will be placed to the left of the link text.
   */
  icon?: string | SVG;
  /**
   * If true, the link will be marked as selected. Moreover, in that same case,
   * if it is contained within a collapsed group, and consequently, the currently selected link is not visible,
   * the group title will appear as selected too.
   */
  selected?: boolean;
  /**
   * This function will be called when the user clicks the link and the event will be passed to this function.
   */
  onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
  /**
   * The area inside the sidenav link.
   */
  children: React.ReactNode;
  /**
   * Value of the tabindex.
   */
  tabIndex?: number;
};

type Props = {
  /**
   * The area assigned to render the sidenav title. It is highly recommended to use the sidenav title.
   */
  title?: React.ReactNode;
  /**
   * The area inside the sidenav. This area can be used to render the content inside the sidenav.
   */
  children: React.ReactNode;
};

export default Props;
