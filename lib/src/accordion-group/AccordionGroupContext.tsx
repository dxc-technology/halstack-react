import { createContext } from "react";
import { AccordionGroupAccordionContextProps } from "./types";

export const AccordionGroupAccordionContext = createContext<AccordionGroupAccordionContextProps | null>(null);
