import { createContext } from "react";
import { AccordionGroupAccordionContextProps } from "./types";

const AccordionGroupAccordionContext =
  createContext<AccordionGroupAccordionContextProps | null>(null);

export default AccordionGroupAccordionContext;
