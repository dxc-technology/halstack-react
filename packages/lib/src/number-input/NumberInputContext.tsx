import { createContext } from "react";
import { NumberInputContextProps } from "./types";

const NumberInputContext = createContext<NumberInputContextProps | null>(null);

export default NumberInputContext;
