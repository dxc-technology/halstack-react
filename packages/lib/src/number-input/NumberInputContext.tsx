import { createContext } from "react";
import { NumberInputContextProps } from "./types";

export default createContext<NumberInputContextProps | null>(null);
