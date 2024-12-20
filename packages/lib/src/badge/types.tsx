import { SVG } from "../common/utils";

export type ContextualProps = {
  /**
   * Text to be placed in the badge.
   */
  label: string;
  /**
   * The available badge modes.
   */
  mode?: "contextual";
  /**
   * In notification mode, if the number entered as label is greater that this notification limit, +99 will be shown. If not, the entered text will be shown as label.
   */
  notificationLimit?: never;
  /**
   * Affects the visual style of the badge. It can be used following semantic purposes or not.
   */
  color?: "grey" | "blue" | "green" | "orange" | "red" | "yellow" | "purple";
};

export type NotificationProps = {
  /**
   * Text to be placed in the badge.
   */
  label?: number;
  /**
   * The available badge modes.
   */
  mode: "notification";
  /**
   * In notification mode, if the number entered as label is greater that this notification limit, +99 will be shown. If not, the entered text will be shown as label.
   */
  notificationLimit?: number;
  /**
   * Affects the visual style of the badge. It can be used following semantic purposes or not.
   */
  color?: never;
};

export type CommonProps = {
  /**
   * Text representing advisory information related to the badge. Under the hood, this prop also serves as an accessible label for the component.
   */
  title?: string;
  /**
   *  Material Symbol name or SVG element used as the icon that will be placed next to the badge label in contextual mode.
   */
  icon?: string | SVG;
  /**
   * Size of the component.
   */
  size?: "small" | "medium" | "large";
};

type Props = (ContextualProps | NotificationProps) & CommonProps;

export default Props;
