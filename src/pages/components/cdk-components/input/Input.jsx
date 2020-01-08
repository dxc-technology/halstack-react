import React from "react";
import { DxcTabsForSections } from "@diaas/dxc-react-cdk";

import ComponentDoc from "../../common/ComponentDoc";
import DocTitle from "../../../../common/DocTitle";
import Section from "../../common/Section";
import Example from "../../common/Example";
import InputPropsTable from "./api.jsx";

import controlled from "./examples/controlledInput";
import uncontrolled from "./examples/uncontrolledInput";
import labeled from "./examples/lebeledInput";
import darkTheme from "./examples/darkThemed";
import multiline from "./examples/multilineInput";
import fillParent from "./examples/fillParentInput";
import sized from "./examples/sizedInput";

function Input() {
  return (
    <ComponentDoc>
      <DocTitle size={1}>Input</DocTitle>
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
                  title="Controlled Input"
                  example={controlled}
                ></Example>
                <Example
                  title="Uncontrolled Input"
                  example={uncontrolled}
                ></Example>
                <Example
                  title="Input with prefix/suffix"
                  example={labeled}
                ></Example>
                <Example
                  title="Dark theme Input"
                  example={darkTheme}
                ></Example>
                <Example title="Multilined Input" example={multiline}></Example>
                <Example title="Sized Input" example={sized}></Example>
                <Example title="Fill Parent Input" example={fillParent}></Example>
              </Section>
            )
          }
        ]}
      ></DxcTabsForSections>
    </ComponentDoc>
  );
}

export default Input;
