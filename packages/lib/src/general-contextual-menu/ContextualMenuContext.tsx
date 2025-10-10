import { createContext } from "react";
import { ContextualMenuContextProps } from "./types";

export default createContext<ContextualMenuContextProps | null>(null);
