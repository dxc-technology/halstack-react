type SVG = string | (HTMLElement & SVGElement);
type Space = "xxsmall" | "xsmall" | "small" | "medium" | "large" | "xlarge" | "xxlarge";
type Margin = {
  top?: Space;
  bottom?: Space;
  left?: Space;
  right?: Space;
};

type Tab = {
  /**
   * Tab label.
   */
  label?: string;
  /**
   * Element used as the icon that will be displayed in the tab.
   */
  icon?: SVG;
  /**
   * @deprecated URL of the icon to be displayed in the tab.
   */
  iconSrc?: string;
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

type Props = {
  /**
   * An array of objects representing the tabs.
   */
  tabs: [Tab, ...Tab[]];
  /**
   * Whether the icon should appear above or to the left of the label.
   */
  iconPosition?: "top" | "left";
  /**
   * The index of the active tab. If undefined, the component will be
   * uncontrolled and the active tab will be managed internally by the component.
   */
  activeTabIndex?: number;
  /**
   * This function will be called when the user clicks on a tab. The index of the
   * clicked tab will be passed as a parameter.
   */
  onTabClick?: (tabIndex: number) => void;
  /**
   * This function will be called when the user hovers a tab.The index of the
   * hovered tab will be passed as a parameter.
   */
  onTabHover?: (tabIndex: number) => void;
  /**
   * Size of the margin to be applied to the component. You can pass an object
   * with 'top', 'bottom', 'left' and 'right' properties in order to specify
   * different margin sizes.
   */
  margin?: Space | Margin;
  /**
   * Value of the tabindex for each tab.
   */
  tabIndex?: number;
};

export default Props;
