import React from "react";
import { DxcTabsForSections } from "@dxc-technology/halstack-react";

import ComponentDoc from "../../common/ComponentDoc";
import DocTitle from "../../../../common/DocTitle";
import Example from "../../common/Example";
import AccordionPropsTable from "./api.jsx";
import AccordionTokensTable from "./Tokens.jsx";
import Section from "../../common/Section";
import ComponentHeader from "../../common/ComponentHeader";
import defaultAccordion from "./examples/default";
import disabled from "./examples/disabled";
import assistiveText from "./examples/assistiveText";
import icon from "./examples/icon";
import controlledAccordion from "./examples/controlledAccordion";

function Accordion() {
  return (
    <ComponentDoc>
      <ComponentHeader title="Accordion" status="ready"></ComponentHeader>
      <DxcTabsForSections
        stickAtPx={64}
        tabsMode="underlined"
        sections={[
          {
            tabLabel: "Props",
            section: () => (
              <Section>
                <DocTitle size={2}>Props</DocTitle>
                <AccordionPropsTable />
              </Section>
            ),
          },
          {
            tabLabel: "Theming",
            section: () => (
              <Section>
                <DocTitle size={2}>Theming</DocTitle>
                <AccordionTokensTable />
              </Section>
            ),
          },
          {
            tabLabel: "Examples",
            section: () => (
              <Section>
                <DocTitle size={2}>Examples</DocTitle>
                <Example
                  title="Default Accordion"
                  example={defaultAccordion}
                ></Example>
                <Example
                  title="Controlled Accordion"
                  example={controlledAccordion}
                ></Example>
                <Example
                  title="Disabled Accordion"
                  example={disabled}
                ></Example>
                <Example
                  title="Accordion with assistive text"
                  example={assistiveText}
                ></Example>
                <Example title="Accordion with icon" example={icon}></Example>
              </Section>
            ),
          },
        ]}
      ></DxcTabsForSections>
    </ComponentDoc>
  );
}

export default Accordion;
