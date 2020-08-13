import React from "react";
import { DxcTabsForSections } from "@dxc-technology/halstack-react";

import ComponentDoc from "../../common/ComponentDoc";
import DocTitle from "../../../../common/DocTitle";
import Section from "../../common/Section";
import Example from "../../common/Example";
import ComponentHeader from "../../common/ComponentHeader";
import SwitchPropsTable from "./api.jsx";

import controlled from "./examples/controlledSwitch";
import uncontrolled from "./examples/uncontrolledSwitch";
import themed from "./examples/themedSwitch";
import labelPosition from "./examples/labelPositionSwitch";

function Switch() {
  return (
    <ComponentDoc>
      <ComponentHeader
        title="Switch"
        status="ready"
      ></ComponentHeader>
      <DxcTabsForSections
        stickAtPx={64}
        tabsMode="underlined"
        sections={[
          {
            tabLabel: "Props",
            section: () => (
              <Section>
                <DocTitle size={2}>Props</DocTitle>
                <SwitchPropsTable />
              </Section>
            )
          },
          {
            tabLabel: "Examples",
            section: () => (
              <Section>
                <DocTitle size={2}>Examples</DocTitle>
                <Example
                  title="Controlled Switch"
                  example={controlled}
                ></Example>
                <Example
                  title="Uncontrolled Switch"
                  example={uncontrolled}
                ></Example>
                <Example
                  title="Label position Switch"
                  example={labelPosition}
                ></Example>
              </Section>
            )
          }
        ]}
      ></DxcTabsForSections>
    </ComponentDoc>
  );
}

export default Switch;
