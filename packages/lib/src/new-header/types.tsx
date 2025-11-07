import { ReactNode } from "react";
import { GroupItem, Item } from "../base-menu/types";

type LogoPropsType = {
  src: string;
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
  sideContent?: ReactNode;
};

export default Props;
