type SVG = React.ReactNode & React.SVGProps<SVGSVGElement>;

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
  children: React.ReactNode;
};

type OtherProps = {
  /**
   * Defines the style of the bullet point in the list.
   */
  type?: "disc" | "circle" | "square" | "number";
  /**
   * Text to be shown in the list.
   */
  children: React.ReactNode;
};

type Props = IconProps | OtherProps;

export default Props;

export type BulletedListItemPropsType = {
  /**
   * Text to be shown in the list.
   */
  children?: React.ReactNode;
};
