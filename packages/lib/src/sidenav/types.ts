import { MouseEvent, ReactNode, ReactElement } from "react";
import { SVG } from "../common/utils";

export type SidenavTitlePropsType = {
  /**
   * The area inside the sidenav title. This area can be used to render custom content.
   */
  children: ReactNode;
};

export type SidenavSectionPropsType = {
  /**
   * The area inside the sidenav section. This area can be used to render sidenav groups, links and custom content.
   */
  children: ReactNode;
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
   * Material Symbol name or SVG icon to be displayed next to the title of the group.
   */
  icon?: string | SVG;
  /**
   * The area inside the sidenav group. This area can be used to render sidenav links.
   */
  children: ReactNode;
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
  onClick?: (event: MouseEvent<HTMLAnchorElement>) => void;
  /**
   * The area inside the sidenav link.
   */
  children: ReactNode;
  /**
   * Value of the tabindex.
   */
  tabIndex?: number;
};

export type Logo = {
  /**
   * URL of the image that will be placed in the logo.
   */
  src: string;
  /**
   * Alternative text for the logo image.
   */
  alt: string;
  /**
   *  URL to navigate to when the logo is clicked. If not provided, the logo will not be clickable.
   */
  onClick?: (event: MouseEvent<HTMLDivElement>) => void;
  /**
   * URL to navigate when the logo is clicked.
   */
  href?: string;
};

type Section = { items: (Item | GroupItem)[]; title?: string };

type Props = {
  /**
   * The title of the sidenav that will be placed under the logo.
   */
  title?: string;
  /**
   * The additional content rendered inside the sidenav.
   * It can also be a function that receives the expansion state to render different content based on it.
   */
  children?: React.ReactNode | ((expanded: boolean) => React.ReactNode);
  /**
   * Array of items to be displayed in the Nav menu.
   * Each item can be a single/simple item, a group item or a section.
   */
  items?: (Item | GroupItem)[] | Section[];
  /**
   * Object with the properties of the logo placed at the top of the sidenav.
   */
  logo?: Logo;
  /**
   * If true the nav menu will have lines marking the groups.
   */
  displayGroupLines?: boolean;
};

type CommonItemProps = {
  badge?: ReactElement;
  icon?: string | SVG;
  label: string;
};
type Item = CommonItemProps & {
  onSelect?: () => void;
  selected?: boolean;
};
type GroupItem = CommonItemProps & {
  items: (Item | GroupItem)[];
};

export default Props;
