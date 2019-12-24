import React from "react";
import { DxcTabsForSections } from "@diaas/dxc-react-cdk";

import ComponentDoc from "../../common/ComponentDoc";
import DocTitle from "../../../../common/DocTitle";
import Example from "../../common/Example";
import AlertPropsTable from "./api.jsx";
import Section from "../../common/Section";
import defaultAccordion from "./examples/default";
import alternative from "./examples/alternative";
import disabled from "./examples/disabled";
import assistiveText from "./examples/assistiveText";
import icon from "./examples/icon";
import dark from "./examples/dark";
import controlledAccordion from "./examples/controlledAccordion";


function Accordion() {
  return (
    <ComponentDoc>
      <DocTitle size={1}>Accordion</DocTitle>
      <DxcTabsForSections
        stickAtPx={64}
        tabsMode="underlined"
        sections={[
          {
            tabLabel: "Props",
            section: () => (
              <Section>
                <DocTitle size={2}>Props</DocTitle>
                <AlertPropsTable />
              </Section>
            )
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
                  title="Alternative Accordion"
                  example={alternative}
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
                <Example title="Dark theme Accordion" example={dark}></Example>
              </Section>
            )
          }
        ]}
      ></DxcTabsForSections>
    </ComponentDoc>
  );
}

export default Accordion;
