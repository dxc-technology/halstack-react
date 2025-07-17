import { ReactNode } from "react";

import type { Space, Margin, SVG } from "../common/utils";

export type TabsContextProps = {
  activeTabId?: string;
  focusedTabId?: string;
  iconPosition?: "top" | "left";
  isControlled: boolean;
  setActiveTabId: (_tab: string) => void;
  tabIndex: number;
};

export type TabLabelProps = {
  /**
   * Tab label.
   */
  label: string;
  /**
   * Material Symbol name or SVG element used as the icon that will be displayed in the tab.
   */
  icon?: string | SVG;
};

export type TabIconProps = {
  /**
   * Tab label.
   */
  label?: string;
  /**
   * Material Symbol name or SVG element used as the icon that will be displayed in the tab.
   */
  icon: string | SVG;
};

export type TabProps = {
  defaultActive?: boolean;
  active?: boolean;
  title?: string;
  tabId?: string;
  disabled?: boolean;
  notificationNumber?: boolean | number;
  children: ReactNode;
  onClick?: () => void;
  onHover?: () => void;
} & (TabLabelProps | TabIconProps);

type TabsProps = {
  /**
   * Whether the icon should appear above or to the left of the label.
   */
  iconPosition?: "top" | "left";
  /**
   * Size of the margin to be applied to the component ('xxsmall' | 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' | 'xxlarge').
   * You can pass an object with 'top', 'bottom', 'left' and 'right' properties in order to specify different margin sizes.
   */
  margin?: Space | Margin;
  /**
   * Value of the tabindex attribute applied to each tab.
   */
  tabIndex?: number;
  /**
   * Contains one or more DxcTabs.Tab.
   */
  children?: ReactNode;
};

type Props = TabsProps;

export default Props;
