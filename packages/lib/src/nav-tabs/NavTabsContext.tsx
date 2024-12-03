import { createContext } from "react";
import { NavTabsContextProps } from "./types";

const NavTabsContext = createContext<NavTabsContextProps | null>(null);

export default NavTabsContext;
