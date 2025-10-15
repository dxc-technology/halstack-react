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

export type ActionIconPropTypes =
  | (CommonProps & { content: ReactNode; icon?: string | SVG })
  | (CommonProps & { content?: string; icon: string | SVG });

type CommonProps = {
  /**
   * Text to be used as aria-label for the Action Icon. It is recommended to provide this prop when using the onClick or linkHref properties and no title is provided.
   */
  ariaLabel?: string;
  /**
   * Affects the visual style of the Action Icon. It can be used following semantic purposes or not.
   */
  color?: Color;
  /**
   * If true, the component will be disabled.
   */
  disabled?: boolean;
  /**
   * Page to be opened when the user clicks on the link.
   */
  linkHref?: string;
  /**
   * This function will be called when the user clicks the Action Icon. Makes it behave as a button.
   */
  onClick?: () => void;
  /**
   * This will determine if the Action Icon will be rounded square or a circle.
   */
  shape?: Shape;
  /**
   * Size of the component.
   */
  size?: Size;
  /**
   * Defines the color of the status indicator displayed on the Action Icon and where it will be placed.
   * If not provided, no indicator will be rendered.
   */
  status?: Status;
  /**
   * Value of the tabindex attribute. It will only apply when the onClick property is passed.
   */
  tabIndex?: number;
  /**
   * Text to be displayed inside a tooltip when hovering the Action Icon.
   */
  title?: string;
};
