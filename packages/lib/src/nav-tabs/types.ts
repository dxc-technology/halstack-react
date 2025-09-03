import { ReactNode, SVGProps } from "react";
import { SVG } from "../common/utils";

export type NavTabsContextProps = {
  focusedLabel: string | undefined;
  iconPosition: "top" | "left";
  tabIndex: number;
};

export type TabProps = {
  /**
   * Whether the tab is active or not.
   */
  active?: boolean;
  /**
   * Tab text label.
   */
  children: string;
  /**
   * Whether the tab is disabled or not.
   */
  disabled?: boolean;
  /**
   * Page to be opened when the user clicks on the tab.
   */
  href?: string;
  /**
   * Material Symbol name or SVG element used as the icon that will be displayed in the tab.
   */
  icon?: string | SVG;
  /**
   * This function will be called when the user clicks on this tab.
   */
  onClick?: () => void;
  /**
   * If the value is 'true', an empty badge will appear.
   * If it is 'false', no badge will appear.
   * If a number is put it will be shown as the label of the notification
   * in the tab, taking into account that if that number is greater than 99,
   * it will appear as '+99' in the badge.
   */
  notificationNumber?: boolean | number;
};

type Props = {
  /**
   * Contains one or more DxcNavTabs.Tab.
   */
  children: ReactNode;
  /**
   * Whether the icon should appear above or to the left of the label.
   */
  iconPosition?: "top" | "left";
  /**
   * Value of the tabindex attribute applied to each tab.
   */
  tabIndex?: number;
};

export default Props;
