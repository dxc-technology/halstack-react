import { Margin, SVG, Space } from "../common/utils";

export type Semantic = "default" | "error" | "warning" | "success" | "info";
export type Mode = "primary" | "secondary" | "tertiary";
export type Size = {
  /**
   * Height of the button.
   */
  height?: "small" | "medium" | "large";
  /*
   * Width of the button.
   */
  width?: "small" | "medium" | "large" | "fillParent" | "fitContent";
};

type Props = {
  /**
   * If true, the component will be disabled.
   */
  disabled?: boolean;
  /**
   * Material Symbol name or SVG element as the icon that will be placed next to the label.
   */
  icon?: string | SVG;
  /**
   * Whether the icon should appear after or before the label.
   */
  iconPosition?: "before" | "after";
  /**
   * Text to be placed in the button.
   */
  label?: string;
  /**
   * Size of the margin to be applied to the component ('xxsmall' | 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' | 'xxlarge').
   * You can pass an object with 'top', 'bottom', 'left' and 'right' properties in order to specify different margin sizes.
   */
  margin?: Space | Margin;
  /**
   * The available button modes.
   */
  mode?: Mode;
  /**
   * This function will be called when the user clicks the button.
   */
  onClick?: () => void;
  /**
   * ref to the button element.
   */
  ref?: React.Ref<HTMLButtonElement>;
  /**
   * Specifies the semantic meaning of the buttons, which determines its color.
   */
  semantic?: Semantic;
  /**
   * Size of the component.
   */
  size?: Size;
  /**
   * Value of the tabindex attribute.
   */
  tabIndex?: number;
  /**
   * Value for the HTML properties title and aria-label.
   */
  title?: string;
  /**
   * 'type' html prop of the button.
   */
  type?: "button" | "reset" | "submit";
};

export default Props;
