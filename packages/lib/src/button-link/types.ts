import { SVG } from "../common/types";
import type { ButtonMode, ButtonSize } from "../button/types";

type CommonProps = {
  /**
   * If true, the link will be disabled.
   */
  disabled?: boolean;
  /**
   * Page to be opened when the user clicks on the link.
   */
  href: string;
  /**
   * Indicates the position of the icon in the component.
   */
  iconPosition?: "before" | "after";
  /**
   * The available button link modes.
   */
  mode?: ButtonMode;
  /**
   * If true, the page is opened in a new browser tab.
   */
  newWindow?: boolean;
  /**
   * If defined, the link will be displayed as a button. This
   * function will be called when the user clicks the link.
   */
  onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
  /**
   * Ref of the link element.
   */
  ref?: React.Ref<HTMLAnchorElement>;
  /**
   * Size of the component.
   */
  size?: ButtonSize;
  /**
   * Value of the tabindex.
   */
  tabIndex?: number;
  /**
   * Text to be displayed as a tooltip when hovering over the link.
   * If there is no aria-label or label, the title will be used as the aria-label.
   */
  title?: string;
};

type LabelProps = {
  /**
   * Material Symbol name or SVG element as the icon that will be placed next to the link text.
   */
  icon?: string | SVG;
  /**
   * Text to be placed in the button link.
   */
  label: string;
  /**
   * Text to be used as aria-label for the button link. If provided, it takes precedence over the label as the accessible name.
   */
  ariaLabel?: string;
};

type IconProps = {
  /**
   * Material Symbol name or SVG element as the icon that will be placed next to the link text.
   */
  icon: string | SVG;
  /**
   * Text to be placed in the button link.
   */
  label?: string;
} & (
  | {
      /**
       * Text to be displayed as a tooltip when hovering over the link. Required when no ariaLabel is provided.
       */
      title: string;
      ariaLabel?: string;
    }
  | {
      /**
       * Text to be used as aria-label for the button link. Required when no title is provided.
       */
      ariaLabel: string;
      title?: string;
    }
);

export type ButtonLinkProps = CommonProps & (LabelProps | IconProps);

export type { ButtonLinkProps as default };
