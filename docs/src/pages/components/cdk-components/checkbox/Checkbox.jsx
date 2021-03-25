import React from "react";
import { DxcTabsForSections, DxcHeading } from "@dxc-technology/halstack-react";
import ComponentDoc from "../../common/ComponentDoc";
import Section from "../../common/Section";
import Example from "../../common/Example";
import ComponentHeader from "../../common/ComponentHeader";
import CheckboxPropsTable from "./api.jsx";
import controlled from "./examples/controlledCheckbox";
import uncontrolled from "./examples/uncontrolledCheckbox";
import labelPosition from "./examples/labelPosition";
import sized from "./examples/sizedCheckbox";

function Checkbox() {
  return (
    <ComponentDoc>
      <ComponentHeader title="Checkbox" status="ready"></ComponentHeader>
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
                <CheckboxPropsTable />
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
                  title="Controlled Checkbox"
                  example={controlled}
                ></Example>
                <Example
                  title="Uncontrolled Checkbox"
                  example={uncontrolled}
                ></Example>
                <Example
                  title="Label position Checkbox"
                  example={labelPosition}
                ></Example>
                <Example title="Sized Checkbox" example={sized}></Example>
              </Section>
            ),
          },
        ]}
      ></DxcTabsForSections>
    </ComponentDoc>
  );
}

export default Checkbox;
