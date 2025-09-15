import { SVG } from "../common/utils";

export type Size = "xsmall" | "small" | "medium" | "large" | "xlarge" | "xxlarge";
export type Shape = "circle" | "square";
export type Color = "grey" | "blue" | "green" | "orange" | "red" | "yellow" | "purple";
interface Status {
  mode: "default" | "info" | "success" | "warning" | "error";
  position: "top" | "bottom";
}

type Props = {
  /**
   * Affects the visual style of the avatar. It can be used following semantic purposes or not.
   */
  color?: Color;
  /**
   * Material Symbol name or SVG element as the icon that will be placed as avatar.
   */
  icon?: string | SVG;
  /**
   * URL of the image.
   */
  imageSrc?: string;
  /**
   * Full name of the user.
   * Used to generate and display initials inside the avatar.
   */
  label?: string;
  /**
   * If defined, the avatar will be displayed as an anchor, using this prop
   * as "href".
   */
  linkHref?: string;
  /**
   * This function will be called when the user clicks the avatar. This will enable all the button states, if
   * not passed it will be treated as a readonly element.
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
