import React from "react";
import { DxcTabsForSections } from "@dxc-technology/halstack-react";

import ComponentDoc from "../../common/ComponentDoc";
import DocTitle from "../../../../common/DocTitle";
import Example from "../../common/Example";
import Section from "../../common/Section";
import ComponentHeader from "../../common/ComponentHeader";

import RadioPropsTable from "./api.jsx";
import RadioTokensTable from "./Tokens.jsx"

import controlledRadio from "./examples/controlledRadio";
import unControlledRadio from "./examples/uncontrolledRadio";

import radioLabelPosition from "./examples/radioLabelPosition";
import radioGroup from "././examples/radioGroup";
import sized from "././examples/sizedRadio"

function Radio() {
  return (
    <ComponentDoc>
      <ComponentHeader
        title="Radio"
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
                <RadioPropsTable />
              </Section>
            )
          },
          {
            tabLabel: "Theming",
            section: () => (
              <Section>
                <DocTitle size={2}>Theming</DocTitle>
                <RadioTokensTable />
              </Section>
            )
          },
          {
            tabLabel: "Examples",
            section: () => (
              <Section>
                <DocTitle size={2}>Examples</DocTitle>
                <Example
                  title="Controlled Radio"
                  example={controlledRadio}
                ></Example>
                <Example
                  title="Uncontrolled Radio"
                  example={unControlledRadio}
                ></Example>
                <Example
                  title="Label Position"
                  example={radioLabelPosition}
                ></Example>
                <Example title="Radio Group" example={radioGroup}></Example>
                <Example title="Sized Radio" example={sized}></Example>
              </Section>
            )
          }
        ]}
      ></DxcTabsForSections>
    </ComponentDoc>
  );
}
export default Radio;
