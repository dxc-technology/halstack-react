import { Margin, SVG, Space } from "../common/utils";
import AvatarProps from "../avatar/types";

type Size = "small" | "medium" | "large";

type Props = {
  avatar?: AvatarProps;
  /**
   * If true, the component will be disabled.
   */
  disabled?: boolean;
  /**
   * Text to be placed on the chip.
   */
  label?: string;
  /**
   * Size of the margin to be applied to the component ('xxsmall' | 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' | 'xxlarge').
   * You can pass an object with 'top', 'bottom', 'left' and 'right' properties in order to specify different margin sizes.
   */
  margin?: Space | Margin;
  /**
   * This function will be called when the prefix is clicked.
   */
  onClickPrefix?: () => void;
  /**
   * This function will be called when the suffix is clicked.
   */
  onClickSuffix?: () => void;
  /**
   * Element or path used as icon to be placed before the chip label.
   */
  prefixIcon?: string | SVG;
  /**
   * Size of the component.
   */
  size?: Size;
  /**
   * Element or path used as icon to be placed after the chip label.
   */
  suffixIcon?: string | SVG;
  /**
   * Value of the tabindex attribute.
   */
  tabIndex?: number;
};

export default Props;
