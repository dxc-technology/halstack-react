import { createContext } from "react";
import { TabsContextProps } from "./types";

export default createContext<TabsContextProps | null>(null);
