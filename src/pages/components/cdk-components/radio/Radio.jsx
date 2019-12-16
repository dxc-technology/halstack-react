import React from "react";
import { DxcTabsForSections } from "@diaas/dxc-react-cdk";

import ComponentDoc from "../../common/ComponentDoc";
import DocTitle from "../../../../common/DocTitle";
import Example from "../../common/Example";
import Section from "../../common/Section";

import RadioPropsTable from "./api.jsx";

import controlledRadio from "./examples/controlledRadio";
import unControlledRadio from "./examples/uncontrolledRadio";

import radioDefault from "././examples/radioDefault";
import radioLabelBefore from "./examples/radioLabelBefore";
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
                <Example title="Default Radio" example={radioDefault}></Example>
                <Example
                  title="Label Before"
                  example={radioLabelBefore}
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
                  title="Radio with Dark Theme"
                  example={radioDefaultDark}
                ></Example>
                <Example title="RadioGroup" example={radioGroup}></Example>
              </Section>
            )
          }
        ]}
      ></DxcTabsForSections>
    </ComponentDoc>
  );
}
export default Radio;
