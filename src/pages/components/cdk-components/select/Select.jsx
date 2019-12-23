import React from "react";
import ComponentDoc from "../../common/ComponentDoc";
import DocTitle from "../../../../common/DocTitle";
import Section from "../../common/Section";
import Example from "../../common/Example";
import InputPropsTable from "./api.jsx";
import { DxcTabsForSections } from "@diaas/dxc-react-cdk";

import defaultSelect from "./examples/default";
import controlled from "./examples/controlledSelect";
import multipleSelect from "./examples/multipleSelect";
import withIcons from "./examples/withIcons";
import darkThemed from "./examples/darkThemed";

function Input() {
  return (
    <ComponentDoc>
      <DocTitle size={1}>Select</DocTitle>
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
              </Section>
            )
          }
        ]}
      ></DxcTabsForSections>
    </ComponentDoc>
  );
}

export default Input;
