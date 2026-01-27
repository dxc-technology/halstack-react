import { Margin, SVG, Space } from "../common/utils";
import AvatarProps from "../avatar/types";

type Size = "small" | "medium" | "large";
export type ChipAvatarType = {
  color: AvatarProps["color"];
  profileName?: AvatarProps["label"];
  imageSrc?: AvatarProps["imageSrc"];
  icon?: AvatarProps["icon"];
};
type Action = {
  /**
   * Icon to be placed in the action.
   */
  icon: string | SVG;
  /**
   * This function will be called when the user clicks the action.
   */
  onClick: () => void;
  /**
   * Text representing advisory information related
   * to the button's action. Under the hood, this prop also serves
   * as an accessible label for the component.
   */
  title?: string;
};

type Props = {
  /**
   * Action to be displayed on the right side of the chip after the label.
   */
  action?: Action;
  /**
   * If true, the component will be disabled.
   */
  disabled?: boolean;
  /**
   * Text to be placed on the chip.
   */
  label: string;
  /**
   * Size of the margin to be applied to the component ('xxsmall' | 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' | 'xxlarge').
   * You can pass an object with 'top', 'bottom', 'left' and 'right' properties in order to specify different margin sizes.
   */
  margin?: Space | Margin;
  /**
   * Element, path or avatar used as icon to be placed before the chip label.
   */
  prefix?: string | SVG | ChipAvatarType;
  /**
   * Size of the component.
   */
  size?: Size;

  /**
   * Value of the tabindex attribute.
   */
  tabIndex?: number;
};

export default Props;
