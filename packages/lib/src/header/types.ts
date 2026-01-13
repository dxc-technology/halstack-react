import { ReactNode } from "react";
import { CommonItemProps, Item } from "../base-menu/types";
import { SearchBarProps } from "../search-bar/types";

type GroupItem = CommonItemProps & {
  items: Item[];
};

type MainNavPropsType = (GroupItem | Item)[];

type SearchBarHeaderProps = Omit<SearchBarProps, "autoFocus" | "disabled">;

type Props = {
  appTitle?: string;
  navItems?: MainNavPropsType;
  responsiveBottomContent?: ReactNode;
  searchBar?: SearchBarHeaderProps;
  sideContent?: ReactNode | ((isResponsive: boolean) => ReactNode);
};

export default Props;
