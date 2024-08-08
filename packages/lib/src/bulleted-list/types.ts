import { ReactNode, SVGProps } from "react";

type SVG = ReactNode & SVGProps<SVGSVGElement>;

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

export default Props;

export type BulletedListItemPropsType = {
  /**
   * Text to be shown in the list.
   */
  children?: ReactNode;
};
