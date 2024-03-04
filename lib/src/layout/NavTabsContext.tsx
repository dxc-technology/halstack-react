import { createContext } from "react";
import { NavTabsContextProps } from "../nav-tabs/types";

export const NavTabsContext = createContext<NavTabsContextProps | null>(null);