import { createContext } from "react";
import { TabsContextProps } from "./types";

export const TabsContext = createContext<TabsContextProps | null>(null);
