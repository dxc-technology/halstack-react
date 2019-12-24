import React from "react";
import { DxcTabsForSections } from "@diaas/dxc-react-cdk";

import ComponentDoc from "../../common/ComponentDoc";
import DocTitle from "../../../../common/DocTitle";
import Example from "../../common/Example";
import Section from "../../common/Section";

import RadioPropsTable from "./api.jsx";

import controlledRadio from "./examples/controlledRadio";
import unControlledRadio from "./examples/uncontrolledRadio";

import radioLabelPosition from "./examples/radioLabelPosition";
import radioRequired from "./examples/radioRequired";
import radioDisabled from "./examples/radioDisabled";
import radioDefaultDark from "././examples/radioDefaultDarkTheme";
import radioGroup from "././examples/radioGroup";

function Radio() {
  return (
    <ComponentDoc>
      <DocTitle size={1}>Radio</DocTitle>
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
                <Example
                  title="Required Radio"
                  example={radioRequired}
                ></Example>
                <Example
                  title="Disabled Radio"
                  example={radioDisabled}
                ></Example>
                <Example
                  title="Dark theme Radio"
                  example={radioDefaultDark}
                ></Example>
                <Example title="Radio Group" example={radioGroup}></Example>
              </Section>
            )
          }
        ]}
      ></DxcTabsForSections>
    </ComponentDoc>
  );
}
export default Radio;
