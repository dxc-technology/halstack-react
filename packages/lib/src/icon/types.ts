import { SVG } from "../common/types";

export type IconProps = {
  /**
   * Accessible name of the icon. Set it only when the icon conveys meaning on its own; otherwise the icon is hidden from assistive technologies.
   */
  ariaLabel?: string;
  /**
   * Color of the icon. Use a design token or a CSS color.
   */
  color?: string;
  /**
   * If true, renders the filled variant of the icon.
   */
  filled?: boolean;
  /**
   * Name of the Material Symbols icon to display (for example "home"). Prefix the name with "filled_" (for example "filled_home") to render the filled variant. An SVG element can also be passed, in which case it is rendered as is.
   */
  icon: string | SVG;
  /**
   * Font size of the icon. Use a design token or a CSS value.
   */
  size?: string;
};

export type { IconProps as default };
