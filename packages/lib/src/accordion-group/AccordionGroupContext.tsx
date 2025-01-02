import { createContext } from "react";
import type { AccordionGroupAccordionContextProps } from "./types";

export default createContext<AccordionGroupAccordionContextProps | null>(null);
