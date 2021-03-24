import React from "react";
import {
  DxcTabsForSections,
  DxcHeading,
  DxcLink,
} from "@dxc-technology/halstack-react";
import ComponentDoc from "../../common/ComponentDoc";
import Example from "../../common/Example";
import AccordionGroupPropsTable from "./api.jsx";
import Section from "../../common/Section";
import ComponentHeader from "../../common/ComponentHeader";
import uncontrolledAccordionGroup from "./examples/uncontrolledAccordionGroup";
import disabled from "./examples/disabledAccordionGroup";
import controlledAccordionGroup from "./examples/controlledAccordionGroup";
import AccordionGroupSinglePropsTable from "./accordionSingleApi.jsx";

function AccordionGroup() {
  return (
    <ComponentDoc>
      <ComponentHeader title="Accordion Group" status="ready"></ComponentHeader>
      <DxcTabsForSections
        stickAtPx={64}
        tabsMode="underlined"
        sections={[
          {
            tabLabel: "Props",
            section: () => (
              <Section>
                <DxcHeading
                  level={3}
                  text="Props"
                  margin={{ bottom: "small" }}
                />
                <AccordionGroupPropsTable />
              </Section>
            ),
          },
          {
            tabLabel: "Children",
            section: () => (
              <Section>
                <DxcHeading
                  level={3}
                  text="Children"
                  margin={{ bottom: "small" }}
                />
                <p>
                  This component includes different compound components that are
                  customized following the{" "}
                  <DxcLink
                    href="https://developer.dxc.com/design/components/accordion"
                    underlined={false}
                    text="design guidelines"
                  ></DxcLink>
                  .
                </p>
                <DxcHeading
                  text="DxcAccordionGroup.Accordion"
                  level={4}
                  weight="bold"
                />
                <p>
                  Customized accordion that allows this accordion group
                  component.
                </p>
                <DxcHeading
                  text="Props"
                  level={5}
                  weight="bold"
                  margin={{ bottom: "medium" }}
                />{" "}
                <AccordionGroupSinglePropsTable />
              </Section>
            ),
          },

          {
            tabLabel: "Examples",
            section: () => (
              <Section>
                <DxcHeading
                  level={3}
                  text="Examples"
                  margin={{ bottom: "small" }}
                />
                <Example
                  title="Uncontrolled Accordion Group"
                  example={uncontrolledAccordionGroup}
                ></Example>
                <Example
                  title="Controlled Accordion Group"
                  example={controlledAccordionGroup}
                ></Example>
                <Example
                  title="Disabled Accordion Group"
                  example={disabled}
                ></Example>
              </Section>
            ),
          },
        ]}
      ></DxcTabsForSections>
    </ComponentDoc>
  );
}

export default AccordionGroup;
