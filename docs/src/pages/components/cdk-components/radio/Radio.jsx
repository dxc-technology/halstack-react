import React from "react";
import { DxcTabsForSections, DxcHeading } from "@dxc-technology/halstack-react";

import ComponentDoc from "../../common/ComponentDoc";

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
        title="Radio Button"
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
                <DxcHeading level={3} text="Props" margin={{ bottom: "small" }} />
                <RadioPropsTable />
              </Section>
            )
          },
          {
            tabLabel: "Theming",
            section: () => (
              <Section>
                <DxcHeading level={3} text="Theming" margin={{ bottom: "small" }} />
                <RadioTokensTable />
              </Section>
            )
          },
          {
            tabLabel: "Examples",
            section: () => (
              <Section>
                <DxcHeading level={3} text="Examples" margin={{ bottom: "small" }} />
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
