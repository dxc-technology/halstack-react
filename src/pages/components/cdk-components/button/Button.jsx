import React from "react";
import { DxcTabsForSections } from "@diaas/dxc-react-cdk";

import ComponentDoc from "../../common/ComponentDoc";
import Section from "../../common/Section";
import DocTitle from "../../common/DocTitle";
import Example from "../../common/Example";
import ButtonPropsTable from "./api.jsx";

import modes from "./examples/modes";
import disabled from "./examples/disabled";

function Button() {
  return (
    <ComponentDoc>
      <DocTitle size={1}>Button</DocTitle>
      <DxcTabsForSections
        stickAtPx={64}
        tabsMode="underlined"
        sections={[
          {
            tabLabel: "Props",
            section: () => (
              <Section>
                <DocTitle size={2}>Props</DocTitle>
                <ButtonPropsTable />
              </Section>
            )
          },
          {
            tabLabel: "Examples",
            section: () => (
              <Section>
                <DocTitle size={2}>Examples</DocTitle>
                <Example title="Default Button" example={modes}></Example>
                <Example title="Disabled Button" example={disabled}></Example>
                <Example title="Default Button" example={modes}></Example>
                <Example title="Disabled Button" example={disabled}></Example>
              </Section>
            )
          }
        ]}
      ></DxcTabsForSections>
    </ComponentDoc>
  );
}

export default Button;
