import { ReactNode } from "react";
import { SVG } from "../common/utils";

type IconProps = {
  /**
   * Defines the style of the bullet point in the list.
   */
  type: "icon";
  /**
   * Icon to display as bullet.
   */
  icon: string | SVG;
  /**
   * Text to be shown in the list.
   */
  children: ReactNode;
};

type OtherProps = {
  /**
   * Defines the style of the bullet point in the list.
   */
  type?: "disc" | "circle" | "square" | "number";
  /**
   * Icon to display as bullet.
   */
  icon?: never;
  /**
   * Text to be shown in the list.
   */
  children: ReactNode;
};

type Props = IconProps | OtherProps;

export type BulletedListItemPropsType = {
  /**
   * Text to be shown in the list.
   */
  children?: ReactNode;
};

export default Props;
