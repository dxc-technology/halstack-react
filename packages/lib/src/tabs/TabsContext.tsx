import { createContext } from "react";
import { TabsContextProps } from "./types";

const TabsContext = createContext<TabsContextProps | null>(null);

export default TabsContext
