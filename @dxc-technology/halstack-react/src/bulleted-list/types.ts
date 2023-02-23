type SVG = React.ReactNode & (React.SVGProps<SVGSVGElement> | React.FunctionComponent<React.SVGProps<SVGSVGElement>>);

type Props = {
  children: React.ReactNode;
  type?: "disc" | "circle" | "square" | "number" | "icon";
  icon?: string | SVG;
};
export default Props;

export type BulletedListItemPropsType = {
  children?: React.ReactNode;
};
