import React from "react";
import ComponentDoc from "../../common/ComponentDoc";

import Section from "../../common/Section";
import Example from "../../common/Example";
import ComponentHeader from "../../common/ComponentHeader";
import InputPropsTable from "./api.jsx";
import { DxcTabsForSections, DxcHeading } from "@dxc-technology/halstack-react";
import SelectTokensTable from "./Tokens";

import defaultSelect from "./examples/default";
import controlled from "./examples/controlledSelect";
import multipleSelect from "./examples/multipleSelect";
import withIcons from "./examples/withIcons";
import sized from "./examples/sizedSelect";

function Input() {
  return (
    <ComponentDoc>
      <ComponentHeader title="Select" status="ready"></ComponentHeader>
      <DxcTabsForSections
        stickAtPx={64}
        tabsMode="underlined"
        sections={[
          {
            tabLabel: "Props",
            section: () => (
              <Section>
                <DxcHeading level={3} text="Props" margin={{ bottom: "small" }} />
                <InputPropsTable />
              </Section>
            ),
          },
          {
            tabLabel: "Theming",
            section: () => (
              <Section>
                <DxcHeading level={3} text="Theming" margin={{ bottom: "small" }} />
                <SelectTokensTable />
              </Section>
            ),
          },
          {
            tabLabel: "Examples",
            section: () => (
              <Section>
                <DxcHeading level={3} text="Examples" margin={{ bottom: "small" }} />
                <Example
                  title="Controlled Select"
                  example={controlled}
                ></Example>
                <Example
                  title="Uncontrolled Select"
                  example={defaultSelect}
                ></Example>
                <Example
                  title="Multiple Select"
                  example={multipleSelect}
                ></Example>
                <Example
                  title="Select with Icons"
                  example={withIcons}
                ></Example>
                <Example title="Sized Select" example={sized}></Example>
              </Section>
            ),
          },
        ]}
      ></DxcTabsForSections>
    </ComponentDoc>
  );
}

export default Input;
