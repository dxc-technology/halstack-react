import React from "react";
import { DxcTabsForSections } from "@diaas/dxc-react-cdk";

import ComponentDoc from "../../common/ComponentDoc";
import DocTitle from "../../../../common/DocTitle";
import Section from "../../common/Section";
import Example from "../../common/Example";
import CheckboxPropsTable from "./api.jsx";

import controlled from "./examples/controlledCheckbox";
import uncontrolled from "./examples/uncontrolledCheckbox";
import themed from "./examples/themedCheckbox";
import labelPosition from "./examples/labelPosition";
import disabled from "./examples/disabledCheckbox";
import required from "./examples/requiredCheckbox";

function Checkbox() {
  return (
    <ComponentDoc>
      <DocTitle size={1}>Checkbox</DocTitle>
      <DxcTabsForSections
        stickAtPx={64}
        tabsMode="underlined"
        sections={[
          {
            tabLabel: "Props",
            section: () => (
              <Section>
                <DocTitle size={2}>Props</DocTitle>
                <CheckboxPropsTable />
              </Section>
            )
          },
          {
            tabLabel: "Examples",
            section: () => (
              <Section>
                <DocTitle size={2}>Examples</DocTitle>
                <Example
                  title="Controlled Checkbox"
                  example={controlled}
                ></Example>
                <Example
                  title="Uncontrolled Checkbox"
                  example={uncontrolled}
                ></Example>
                <Example
                  title="Label Position Checkbox"
                  example={labelPosition}
                ></Example>
                <Example title="Disabled Checkbox" example={disabled}></Example>
                <Example title="Required Checkbox" example={required}></Example>
                <Example
                  title="Dark Themed Checkbox"
                  example={themed}
                ></Example>
              </Section>
            )
          }
        ]}
      ></DxcTabsForSections>
    </ComponentDoc>
  );
}

export default Checkbox;
