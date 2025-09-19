import { SVG } from "../common/utils";

type Size = "xsmall" | "small" | "medium" | "large" | "xlarge" | "xxlarge";
type Shape = "circle" | "square";
type Color = "grey" | "blue" | "green" | "orange" | "red" | "yellow" | "purple";
export interface Status {
  mode: "default" | "info" | "success" | "warning" | "error";
  position: "top" | "bottom";
}

type Props = {
  /**
   * Affects the visual style of the avatar. It can be used following semantic purposes or not.
   */
  color?: Color;
  /**
   * If true, the component will be disabled.
   */
  disabled?: boolean;
  /**
   * Material Symbol name or SVG element as the icon that will be placed as avatar.
   */
  icon?: string | SVG;
  /**
   * URL of the image.
   */
  imageSrc?: string;
  /**
   * Text label associated with the avatar.
   * Used to generate and display initials inside the avatar.
   */
  label?: string;
  /**
   * Page to be opened when the user clicks on the link.
   */
  linkHref?: string;
  /**
   * This function will be called when the user clicks the avatar. Makes it behave as a button.
   */
  onClick?: () => void;
  /**
   * This will determine if the avatar will be rounded square or a circle.
   */
  shape?: Shape;
  /**
   * Size of the component.
   */
  size?: Size;
  /**
   * Defines the color of the status indicator displayed on the avatar and where it will be placed.
   * If not provided, no indicator will be rendered.
   */
  status?: Status;
  /**
   * Value of the tabindex attribute. It will only apply when the onClick property is passed.
   */
  tabIndex?: number;
  /**
   * Text to be displayed inside a tooltip when hovering the avatar.
   */
  title?: string;
};

export default Props;
