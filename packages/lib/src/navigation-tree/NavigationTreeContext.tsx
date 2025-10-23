import { createContext } from "react";
import { NavigationTreeContextProps } from "./types";

export default createContext<NavigationTreeContextProps | null>(null);
