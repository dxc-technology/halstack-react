import React from "react";
import { DxcTabsForSections, DxcHeading } from "@dxc-technology/halstack-react";

import ComponentDoc from "../../common/ComponentDoc";
import Section from "../../common/Section";

import Example from "../../common/Example";
import ComponentHeader from "../../common/ComponentHeader";
import BoxPropsTable from "./api.jsx";

import basicExample from "./examples/basicExample";

function Box() {
  return (
    <ComponentDoc>
      <ComponentHeader
        title="Box"
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
                <BoxPropsTable />
              </Section>
            )
          },
          {
            tabLabel: "Theming",
            section: () => (
              <Section>
                <DxcHeading level={3} text="Theming" margin={{ bottom: "small" }} />
                <p>Not available tokens.</p>
              </Section>
            ),
          },
          {
            tabLabel: "Examples",
            section: () => (
              <Section>
                <DxcHeading level={3} text="Examples" margin={{ bottom: "small" }} />
                <Example title="Basic Example" example={basicExample}></Example>
              </Section>
            )
          }
        ]}
      ></DxcTabsForSections>
    </ComponentDoc>
  );
}

export default Box;
