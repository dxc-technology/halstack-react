import { ReactNode } from "react";
import { GroupItem, Item } from "../base-menu/types";

type Section = { items: (Item | GroupItem)[]; title?: string };

type Props = {
  /**
   * The content rendered in the bottom part of the sidenav, under the navigation menu.
   */
  bottomContent?: ReactNode;
  /**
   * Object with the properties of the branding placed at the top of the sidenav.
   */
  appTitle?: string | ReactNode;
  /**
   * Initial state of the expansion of the sidenav, only when it is uncontrolled.
   */
  defaultExpanded?: boolean;
  /**
   * If true the nav menu will have lines marking the groups.
   */
  displayGroupLines?: boolean;
  /**
   * If true, the sidenav is expanded.
   * If undefined the component will be uncontrolled and the value will be managed internally by the component.
   */
  expanded?: boolean;
  /**
   * Array of items to be displayed in the navigation menu.
   * Each item can be a single/simple item, a group item or a section.
   */
  navItems?: (Item | GroupItem)[] | Section[];
  /**
   * Function called when the expansion state of the sidenav changes.
   */
  onExpandedChange?: (value: boolean) => void;
  /**
   * The additional content rendered in the upper part of the sidenav, under the branding.
   */
  topContent?: ReactNode;
};

export default Props;
