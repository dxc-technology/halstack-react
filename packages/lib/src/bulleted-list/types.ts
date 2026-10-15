import { ReactNode } from "react";
import { PrettifyTypes, SVG } from "../common/types";

type BulletedListIconProps = {
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

type BulletedListWithoutIconProps = {
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

export type BulletedListProps = PrettifyTypes<BulletedListIconProps | BulletedListWithoutIconProps>;

export type BulletedListItemProps = {
  /**
   * Text to be shown in the list.
   */
  children?: ReactNode;
};

export type { BulletedListProps as default };