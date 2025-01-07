import { createContext } from "react";
import { NavTabsContextProps } from "./types";

export default createContext<NavTabsContextProps | null>(null);
