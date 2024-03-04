import { createContext } from "react";
import { AccordionGroupAccordionContextProps } from "../accordion-group/types";

export const AccordionGroupAccordionContext = createContext<AccordionGroupAccordionContextProps | null>(null);
