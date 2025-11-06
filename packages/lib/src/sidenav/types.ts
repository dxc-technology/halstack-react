import { MouseEvent, ReactElement } from "react";
import { SVG } from "../common/utils";

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
   * If true, the sidenav is expanded.
   * If undefined the component will be uncontrolled and the value will be managed internally by the component.
   */
  expanded?: boolean;
  /**
   * Initial state of the expansion of the sidenav, only when it is uncontrolled.
   */
  defaultExpanded?: boolean;
  /**
   * Function called when the expansion state of the sidenav changes.
   */
  onExpandedChange?: (value: boolean) => void;
  /**
   * The additional content rendered in the upper part of the sidenav, under the branding.
   * It can also be a function that receives the expansion state to render different content based on it.
   */
  topContent?: ReactElement;
  /**
   * The content rendered in the bottom part of the sidenav, under the navigation menu.
   * It can also be a function that receives the expansion state to render different content based on it.
   */
  bottomContent?: ReactElement;
  /**
   * Array of items to be displayed in the navigation menu.
   * Each item can be a single/simple item, a group item or a section.
   */
  navItems?: (Item | GroupItem)[] | Section[];
  /**
   * Object with the properties of the logo placed at the top of the sidenav.
   */
  branding?: { logo?: Logo; appTitle?: string } | ReactElement;
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
