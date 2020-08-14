import React from "react";
import ComponentDoc from "../../common/ComponentDoc";
import DocTitle from "../../../../common/DocTitle";
import Section from "../../common/Section";
import Example from "../../common/Example";
import ComponentHeader from "../../common/ComponentHeader";
import InputPropsTable from "./api.jsx";
import { DxcTabsForSections } from "@dxc-technology/halstack-react";
import SelectTokensTable from "./Tokens";

import defaultSelect from "./examples/default";
import controlled from "./examples/controlledSelect";
import multipleSelect from "./examples/multipleSelect";
import withIcons from "./examples/withIcons";
import darkThemed from "./examples/darkThemed";
import sized from "./examples/sizedSelect";

function Input() {
  return (
    <ComponentDoc>
      <ComponentHeader
        title="Select"
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
                <InputPropsTable />
              </Section>
            )
          },
          {
            tabLabel: "Theming",
            section: () => (
              <Section>
                <DocTitle size={2}>Theming</DocTitle>
                <SelectTokensTable />
              </Section>
            )
          },
          {
            tabLabel: "Examples",
            section: () => (
              <Section>
                <DocTitle size={2}>Examples</DocTitle>
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
                <Example
                  title="Dark theme Select"
                  example={darkThemed}
                ></Example>
                <Example
                  title="Sized Select"
                  example={sized}
                ></Example>
              </Section>
            )
          }
        ]}
      ></DxcTabsForSections>
    </ComponentDoc>
  );
}

export default Input;
