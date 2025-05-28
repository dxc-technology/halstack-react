import { ReactNode } from "react";

import type { Space, Margin, SVG } from "../common/utils";

type TabCommonProps = {
  /**
   * Whether the tab is disabled or not.
   */
  isDisabled?: boolean;
  /**
   * If the value is 'true', an empty badge will appear.
   * If it is 'false', no badge will appear.
   * If a number is put it will be shown as the label of the notification
   * in the tab, taking into account that if that number is greater than 99,
   * it will appear as '+99' in the badge.
   */
  notificationNumber?: boolean | number;
};

export type TabsContextProps = {
  activeTab?: string;
  focusedTab?: string;
  iconPosition: "top" | "left";
  tabIndex: number;
  isControlled: boolean;
  hasLabelAndIcon: boolean;
  setActiveTab: (_tab: string) => void;
  setActiveIndicatorWidth: (_width: number) => void;
  setActiveIndicatorLeft: (_left: number) => void;
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

export type TabPropsLegacy = {
  tab: TabCommonProps & (TabLabelProps | TabIconProps);
  active: boolean;
  tabIndex: number;
  hasLabelAndIcon: boolean;
  iconPosition: "top" | "left";
  onClick: () => void;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
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

type LegacyProps = {
  /**
   * Initially active tab, only when it is uncontrolled.
   */
  defaultActiveTabIndex?: number;
  /**
   * The index of the active tab. If undefined, the component will be
   * uncontrolled and the active tab will be managed internally by the component.
   */
  activeTabIndex?: number;
  /**
   * An array of objects representing the tabs.
   */
  tabs?: (TabCommonProps & (TabLabelProps | TabIconProps))[];
  /**
   * Whether the icon should appear above or to the left of the label.
   */
  iconPosition?: "top" | "left";
  /**
   * This function will be called when the user clicks on a tab. The index of the
   * clicked tab will be passed as a parameter.
   */
  onTabClick?: (index: number) => void;
  /**
   * This function will be called when the user hovers a tab.The index of the
   * hovered tab will be passed as a parameter.
   */
  onTabHover?: (index: number | null) => void;
  /**
   * Size of the margin to be applied to the component ('xxsmall' | 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' | 'xxlarge').
   * You can pass an object with 'top', 'bottom', 'left' and 'right' properties in order to specify different margin sizes.
   */
  margin?: Space | Margin;
  /**
   * Value of the tabindex attribute applied to each tab.
   */
  tabIndex?: number;
};

type NewProps = {
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
  // children?: React.ReactElement<TabProps>[];
  children?: ReactNode;
};

type Props = LegacyProps & NewProps;

export default Props;
