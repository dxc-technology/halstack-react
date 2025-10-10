import { Margin, SVG, Space } from "../common/utils";

export type LinkProps = {
  /**
   * If true, the link will be disabled.
   */
  disabled?: boolean;
  /**
   * If true, the color is inherited from parent.
   */
  inheritColor?: boolean;
  /**
   * Material Symbol name or SVG element as the icon that will be placed next to the link text.
   */
  icon?: string | SVG;
  /**
   * Indicates the position of the icon in the component.
   */
  iconPosition?: "before" | "after";
  /**
   * Page to be opened when the user clicks on the link.
   */
  href?: string;
  /**
   * If true, the page is opened in a new browser tab.
   */
  newWindow?: boolean;
  /**
   * If defined, the link will be displayed as a button. This
   * function will be called when the user clicks the link.
   */
  onClick?: () => void;
  /**
   * Text of the link.
   */
  children: string;
  /**
   * Size of the margin to be applied to the component ('xxsmall' | 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' | 'xxlarge').
   * You can pass an object with 'top', 'bottom', 'left' and 'right' properties in order to specify different margin sizes.
   */
  margin?: Space | Margin;
  /**
   * Value of the tabindex.
   */
  tabIndex?: number;
};
