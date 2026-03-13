import { SVG } from "../common/utils";
import AvatarProps from "../avatar/types";

export type ChipAvatarType = {
  color: AvatarProps["color"];
  profileName?: AvatarProps["label"];
  imageSrc?: AvatarProps["imageSrc"];
  icon?: AvatarProps["icon"];
};

type Props = {
  /**
   * If true, the component will be disabled.
   */
  disabled?: boolean;
  /**
   * Text to be placed on the chip.
   */
  label: string;
  /**
   * Determines the visual style and layout
   * - "selectable": The default mode with full content and styling.
   * - "dismissible": A reduced mode with minimal content and styling.
   */
  mode?: "selectable" | "dismissible";
  /**
   * Function to be called when the chip is clicked or the dismiss action is triggered.
   */
  onClick?: () => void;
  /**
   * Element, path or avatar used as icon to be placed before the chip label.
   */
  prefix?: string | SVG | ChipAvatarType;
  /**
   * If true, the component will be selected. This property is only applicable when the mode is "selectable".
   * If undefined, the component manages its own internal state (uncontrolled mode).
   */
  selected?: boolean;
  /**
   * Value of the tabindex attribute.
   */
  tabIndex?: number;
};

export default Props;
