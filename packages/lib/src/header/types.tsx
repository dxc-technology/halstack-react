import { ReactNode } from "react";
import { CommonItemProps, Item } from "../base-menu/types";
import { SVG } from "../common/utils";

type LogoPropsType = {
  src: string | SVG;
  alt: string;
  href?: string;
  onClick?: () => void;
};

type BrandingPropsType = {
  logo: LogoPropsType;
  appTitle?: string;
};

type GroupItem = CommonItemProps & {
  items: Item[];
};

type MainNavPropsType = (GroupItem | Item)[];

type Props = {
  branding: BrandingPropsType;
  navItems?: MainNavPropsType;
  responsiveBottomContent?: ReactNode;
  sideContent?: ReactNode | ((isResponsive: boolean) => ReactNode);
};

export default Props;
