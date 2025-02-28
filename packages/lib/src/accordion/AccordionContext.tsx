import { createContext } from "react";
import type { AccordionContextProps } from "./types";

export default createContext<AccordionContextProps | null>(null);
