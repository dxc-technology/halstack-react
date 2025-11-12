import { ReactNode } from "react";
import { GroupItem, Item } from "../base-menu/types";
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

type MainNavPropsType = (GroupItem | Item)[];

type Props = {
  branding: BrandingPropsType;
  responsiveBranding?: BrandingPropsType;
  navItems?: MainNavPropsType;
  sideContent?: ReactNode | ((isResponsive: boolean) => ReactNode);
  responsiveBottomContent?: ReactNode;
};

export default Props;
