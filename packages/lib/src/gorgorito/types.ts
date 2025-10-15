import { ReactNode } from "react";
import { SVG } from "../common/utils";

export type RefType = HTMLDivElement;

type Size = "xsmall" | "small" | "medium" | "large" | "xlarge" | "xxlarge";
type Shape = "circle" | "square";
type Color =
  | "primary"
  | "secondary"
  | "tertiary"
  | "success"
  | "info"
  | "neutral"
  | "warning"
  | "error"
  | "transparent";
export interface Status {
  mode: "default" | "info" | "success" | "warning" | "error";
  position: "top" | "bottom";
}

type Props = {
  /**
   * Text to be used as aria-label for the gorgorito. It is recommended to provide this prop when using the onClick or linkHref properties and no title is provided.
   */
  ariaLabel?: string;
  /**
   * Affects the visual style of the gorgorito. It can be used following semantic purposes or not.
   */
  color?: Color;
  /**
   * Content to be displayed inside the gorgorito when there is no icon provided.
   */
  content?: ReactNode;
  /**
   * If true, the component will be disabled.
   */
  disabled?: boolean;
  /**
   * Material Symbol name or SVG element as the icon that will be placed as gorgorito.
   */
  icon?: string | SVG;
  /**
   * Page to be opened when the user clicks on the link.
   */
  linkHref?: string;
  /**
   * This function will be called when the user clicks the gorgorito. Makes it behave as a button.
   */
  onClick?: () => void;
  /**
   * This will determine if the gorgorito will be rounded square or a circle.
   */
  shape?: Shape;
  /**
   * Size of the component.
   */
  size?: Size;
  /**
   * Defines the color of the status indicator displayed on the gorgorito and where it will be placed.
   * If not provided, no indicator will be rendered.
   */
  status?: Status;
  /**
   * Value of the tabindex attribute. It will only apply when the onClick property is passed.
   */
  tabIndex?: number;
  /**
   * Text to be displayed inside a tooltip when hovering the gorgorito.
   */
  title?: string;
};

export default Props;
