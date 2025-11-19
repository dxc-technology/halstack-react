import { createContext } from "react";
import { BaseMenuContextProps } from "./types";

export default createContext<BaseMenuContextProps | null>(null);
