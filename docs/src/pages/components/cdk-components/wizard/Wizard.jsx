import React from "react";
import { DxcTabsForSections, DxcHeading } from "@dxc-technology/halstack-react";
import ComponentDoc from "../../common/ComponentDoc";
import Example from "../../common/Example";
import ComponentHeader from "../../common/ComponentHeader";
import Section from "../../common/Section";
import WizardPropsTable from "./api.jsx";
import controlledWizard from "./examples/controlledWizard";
import uncontrolledWizard from "./examples/uncontrolledWizard";
import verticalWizard from "./examples/verticalWizard";

function Wizard() {
  return (
    <ComponentDoc>
      <ComponentHeader title="Wizard" status="ready"></ComponentHeader>
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
                <WizardPropsTable />
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
                  title="Controlled Wizard"
                  example={controlledWizard}
                ></Example>
                <Example
                  title="Uncontrolled Wizard"
                  example={uncontrolledWizard}
                ></Example>
                <Example
                  title="Vertical Wizard"
                  example={verticalWizard}
                ></Example>
              </Section>
            ),
          },
        ]}
      ></DxcTabsForSections>
    </ComponentDoc>
  );
}

export default Wizard;
