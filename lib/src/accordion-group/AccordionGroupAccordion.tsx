import React, { useContext } from "react";
import DxcAccordion from "../accordion/Accordion";
import { AccordionPropsType } from "./types";
import AccordionGroupAccordionContext from "./AccordionGroupContext";

const AccordionGroupAccordion = ({
  ...childProps
}: AccordionPropsType): JSX.Element => {
  const { activeIndex, handlerActiveChange, disabled, index } = useContext(
    AccordionGroupAccordionContext
  );

  return (
    <DxcAccordion
      isExpanded={activeIndex === index}
      onChange={() => {
        handlerActiveChange(index);
      }}
      disabled={disabled}
      {...childProps}
    >
      {childProps.children}
    </DxcAccordion>
  );
};

export default AccordionGroupAccordion;
