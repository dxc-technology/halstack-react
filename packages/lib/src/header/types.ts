import { ReactNode } from "react";
import { BaseCommonItemProps, BaseItem } from "../base-menu/types";
import { SearchBarProps } from "../search-bar/types";
import { PrettifyTypes } from "../common/types";

export type HeaderGroupItem = PrettifyTypes<
  BaseCommonItemProps & {
    items: BaseItem[];
  }
>;

export type HeaderMainNavPropsType = (HeaderGroupItem | PrettifyTypes<BaseItem>)[];

export type HeaderSearchBarProps = Omit<SearchBarProps, "autoFocus" | "disabled">;

export type HeaderProps = {
  appTitle?: string;
  navItems?: HeaderMainNavPropsType;
  responsiveBottomContent?: ReactNode;
  searchBar?: HeaderSearchBarProps;
  sideContent?: ReactNode | ((isResponsive: boolean) => ReactNode);
};

export type { HeaderProps as default };
