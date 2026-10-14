import { PrettifyTypes } from "../common/types";

export type BreadcrumbsItem = {
  href?: string;
  label: string;
};
export type BreadcrumbsProps = {
  /**
   * Provides a label that describes the type of navigation enabled by
   * the component.
   */
  ariaLabel?: string;
  /**
   * Array of objects representing the items of the breadcrumbs.
   */
  items: BreadcrumbsItem[];
  /**
   * Number of items before showing a collapsed version of the
   * breadcrumbs. It can't be lower than two (root/collapsed action and
   * current page).
   */
  itemsBeforeCollapse?: number;
  /**
   * Callback for custom navigation with third-party libraries such as
   * Next ('useRouter') or React Router ('useNavigate').
   * This function will be called when an item is clicked,
   * receiving its 'href' as a parameter.
   * @param href
   * @returns
   */
  onItemClick?: (href: string) => void;
  /**
   * When items are collapsed, whether the root item should always be
   * displayed or not.
   */
  showRoot?: boolean;
};

export type BreadcrumbsItemProps = PrettifyTypes<
  BreadcrumbsItem & {
    isCurrentPage?: boolean;
    onClick?: (href: string) => void;
  }
>;

export type { BreadcrumbsProps as default };