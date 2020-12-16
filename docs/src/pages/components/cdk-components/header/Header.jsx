import React from "react";
import { DxcTabsForSections, DxcHeading } from "@dxc-technology/halstack-react";

import ComponentDoc from "../../common/ComponentDoc";

import Section from "../../common/Section";
import Example from "../../common/Example";
import ComponentHeader from "../../common/ComponentHeader";
import HeaderPropsTable from "./api.jsx";
import HeaderTokensTable from "./Tokens.jsx";

import defaultHeader from "./examples/default.js";
import children from "./examples/children.js";

function Input() {
  return (
    <ComponentDoc>
      <ComponentHeader title="Header" status="ready"></ComponentHeader>
      <DxcTabsForSections
        stickAtPx={64}
        tabsMode="underlined"
        sections={[
          {
            tabLabel: "Props",
            section: () => (
              <Section>
                <DxcHeading level={3} text="Props" margin={{ bottom: "small" }} />
                <HeaderPropsTable />
              </Section>
            ),
          },
          {
            tabLabel: "Theming",
            section: () => (
              <Section>
                <DxcHeading level={3} text="Theming" margin={{ bottom: "small" }} />
                <HeaderTokensTable />
              </Section>
            ),
          },
          {
            tabLabel: "Examples",
            section: () => (
              <Section>
                <DxcHeading level={3} text="Examples" margin={{ bottom: "small" }} />
                <Example
                  title="Default Header"
                  example={defaultHeader}
                ></Example>
                <Example
                  title="Header with custom content"
                  example={children}
                ></Example>
              </Section>
            ),
          },
        ]}
      ></DxcTabsForSections>
    </ComponentDoc>
  );
}

export default Input;
