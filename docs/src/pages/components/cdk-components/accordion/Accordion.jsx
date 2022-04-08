import React from "react";
import { DxcHeading } from "@dxc-technology/halstack-react";
import ComponentDoc from "../../common/ComponentDoc";
import Example from "../../common/Example";
import AccordionPropsTable from "./api.jsx";
import Section from "../../common/Section";
import ComponentHeader from "../../common/ComponentHeader";
import uncontrolledAccordion from "./examples/uncontrolledAccordion";
import disabled from "./examples/disabled";
import icon from "./examples/icon";
import controlledAccordion from "./examples/controlledAccordion";

function Accordion() {
  return (
    <ComponentDoc>
      <ComponentHeader title="Accordion" status="ready"></ComponentHeader>
      <Section>
        <DxcHeading level={3} text="Props" margin={{ bottom: "small" }} />
        <AccordionPropsTable />
      </Section>
      <Section>
        <DxcHeading level={3} text="Examples" margin={{ bottom: "small" }} />
        <Example
          title="Controlled Accordion"
          example={controlledAccordion}
        ></Example>
        <Example
          title="Uncontrolled Accordion"
          example={uncontrolledAccordion}
        ></Example>
        <Example title="Disabled Accordion" example={disabled}></Example>
        <Example title="Accordion with icon" example={icon}></Example>
      </Section>
    </ComponentDoc>
  );
}

export default Accordion;
