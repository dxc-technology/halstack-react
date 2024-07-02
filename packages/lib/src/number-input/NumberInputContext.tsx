import { createContext } from "react";
import { NumberInputContextProps } from "./types";

export const NumberInputContext = createContext<NumberInputContextProps | null>(null);
