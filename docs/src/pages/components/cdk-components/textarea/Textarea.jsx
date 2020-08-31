import React from "react";
import { DxcTabsForSections } from "@dxc-technology/halstack-react";

import ComponentDoc from "../../common/ComponentDoc";
import DocTitle from "../../../../common/DocTitle";
import Section from "../../common/Section";
import Example from "../../common/Example";
import ComponentHeader from "../../common/ComponentHeader";
import InputPropsTable from "./api.jsx";

import controlled from "./examples/controlled";
import uncontrolled from "./examples/uncontrolled";
import size from "./examples/size";
import disabled from "./examples/disabled";
import required from "./examples/required";
import invalid from "./examples/invalid";

function Textarea() {
  return (
    <ComponentDoc>
      <ComponentHeader title="Textarea" status="ready"></ComponentHeader>
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
            ),
          },
          {
            tabLabel: "Examples",
            section: () => (
              <Section>
                <DocTitle size={2}>Examples</DocTitle>
                <Example
                  title="Controlled Textarea"
                  example={controlled}
                ></Example>
                <Example
                  title="Uncontrolled Textarea"
                  example={uncontrolled}
                ></Example>
                <Example title="Fill Parent  Textarea" example={size}></Example>
                <Example title="Disabled Textarea" example={disabled}></Example>
                <Example title="Invalid Textarea" example={invalid}></Example>
                <Example title="Required Textarea" example={required}></Example>
              </Section>
            ),
          },
        ]}
      ></DxcTabsForSections>
    </ComponentDoc>
  );
}

export default Textarea;
