import { createContext } from "react";
import { NavTabsContextProps } from "./types";

export const NavTabsContext = createContext<NavTabsContextProps | null>(null);
