import React from "react";
import { DxcTabsForSections, DxcHeading } from "@dxc-technology/halstack-react";

import ComponentDoc from "../../common/ComponentDoc";

import Section from "../../common/Section";
import Example from "../../common/Example";
import ComponentHeader from "../../common/ComponentHeader";
import SwitchPropsTable from "./api.jsx";
import SwitchTokensTable from "./Tokens.jsx";

import controlled from "./examples/controlledSwitch";
import uncontrolled from "./examples/uncontrolledSwitch";
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
                <DxcHeading level={3} text="Props" margin={{ bottom: "small" }} />
                <SwitchPropsTable />
              </Section>
            )
          },
          {
            tabLabel: "Theming",
            section: () => (
              <Section>
                <DxcHeading level={3} text="Theming" margin={{ bottom: "small" }} />
                <SwitchTokensTable />
              </Section>
            )
          },
          {
            tabLabel: "Examples",
            section: () => (
              <Section>
                <DxcHeading level={3} text="Examples" margin={{ bottom: "small" }} />
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
