import React from "react";
import { DxcTabsForSections } from "@diaas/dxc-react-cdk";

import ComponentDoc from "../../common/ComponentDoc";
import DocTitle from "../../common/DocTitle";
import Section from "../../common/Section";
import Example from "../../common/Example";
import SwitchPropsTable from "./api.jsx";

import controlled from "./examples/controlledSwitch";
import uncontrolled from "./examples/uncontrolledSwitch";
import themed from "./examples/themedSwitch";
import labelPosition from "./examples/labelPositionSwitch";
import disabled from "./examples/disabledSwitch";
import required from "./examples/requiredSwitch";

function Switch() {
  return (
    <ComponentDoc>
      <DocTitle size={1}>Switch</DocTitle>
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
                  title="Label Position Switch"
                  example={labelPosition}
                ></Example>
                <Example title="Disabled Switch" example={disabled}></Example>
                <Example title="Required Switch" example={required}></Example>
                <Example title="Dark Themed Switch" example={themed}></Example>
              </Section>
            )
          }
        ]}
      ></DxcTabsForSections>
    </ComponentDoc>
  );
}

export default Switch;
