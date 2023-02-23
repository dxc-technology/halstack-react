type SVG = React.ReactNode & React.SVGProps<SVGSVGElement>;

export type TabProps = {
  /**
   * Whether the tab is active or not.
   */
  active?: boolean;
  /**
   * Whether the tab is disabled or not.
   */
  disabled?: boolean;
  /**
   * Page to be opened when the user clicks on the tab.
   */
  href?: string;
  /**
   * Element or path used as the icon that will be displayed in the tab.
   */
  icon?: string | SVG;
  /**
   * If the value is 'true', an empty badge will appear.
   * If it is 'false', no badge will appear.
   * If a number is put it will be shown as the label of the notification
   * in the tab, taking into account that if that number is greater than 99,
   * it will appear as '+99' in the badge.
   */
  notificationNumber?: boolean | number;
  /**
   * Content of the tab.
   */
  children: string;
};

export type NavTabsProps = {
  /**
   * Whether the icon should appear above or to the left of the label.
   */
  iconPosition?: "top" | "left";
  /**
   * Value of the tabindex for each tab.
   */
  tabIndex?: number;
  /**
   * Content of the tabs nav.
   */
  children: React.ReactNode;
};

export type NavTabsContextProps = {
  iconPosition: "top" | "left";
  tabIndex: number;
  hasIcons: boolean;
  focusedLabel: string;
};
