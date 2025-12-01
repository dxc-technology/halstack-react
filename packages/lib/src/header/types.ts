import { ReactNode } from "react";
import { CommonItemProps, Item } from "../base-menu/types";

type GroupItem = CommonItemProps & {
  items: Item[];
};

type MainNavPropsType = (GroupItem | Item)[];

type Props = {
  appTitle?: string;
  navItems?: MainNavPropsType;
  responsiveBottomContent?: ReactNode;
  sideContent?: ReactNode | ((isResponsive: boolean) => ReactNode);
};

export default Props;
