import { createContext } from "react";
import type { AccordionGroupAccordionContextProps } from "./types";

const AccordionGroupAccordionContext = createContext<AccordionGroupAccordionContextProps | null>(null);

export default AccordionGroupAccordionContext;
