import React from "react";
import { DxcTabsForSections } from "@dxc-technology/halstack-react";

import ComponentDoc from "../../common/ComponentDoc";
import DocTitle from "../../../../common/DocTitle";
import Example from "../../common/Example";
import ComponentHeader from "../../common/ComponentHeader";
import Section from "../../common/Section";
import WizardPropsTable from "./api.jsx";
import WizardTokensTable from "./Tokens.jsx";

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
                <DocTitle size={2}>Props</DocTitle>
                <WizardPropsTable />
              </Section>
            ),
          },
          {
            tabLabel: "Theming",
            section: () => (
              <Section>
                <DocTitle size={2}>Theming</DocTitle>
                <WizardTokensTable />
              </Section>
            ),
          },
          {
            tabLabel: "Examples",
            section: () => (
              <Section>
                <DocTitle size={2}>Examples</DocTitle>
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
