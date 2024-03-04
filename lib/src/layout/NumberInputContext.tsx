import { createContext } from "react";
import { NumberInputContextProps } from "../number-input/types";

export const NumberInputContext = createContext<NumberInputContextProps | null>(null);
