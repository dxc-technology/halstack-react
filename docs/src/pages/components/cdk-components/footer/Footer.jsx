import React from "react";
import { DxcTabsForSections, DxcHeading } from "@dxc-technology/halstack-react";

import ComponentDoc from "../../common/ComponentDoc";

import Section from "../../common/Section";
import Example from "../../common/Example";
import ComponentHeader from "../../common/ComponentHeader";
import InputPropsTable from "./api.jsx";
import defaultFooter from "./examples/default.js";
import children from "./examples/children.js";
import FooterTokensTable from "./Tokens.jsx";

function App() {
  return (
    <ComponentDoc>
      <ComponentHeader
        title="Footer"
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
                <InputPropsTable />
              </Section>
            )
          },
          {
            tabLabel: "Theming",
            section: () => (
              <Section>
                <DxcHeading level={3} text="Theming" margin={{ bottom: "small" }} />
                <FooterTokensTable />
              </Section>
            )
          },
          {
            tabLabel: "Examples",
            section: () => (
              <Section>
                <DxcHeading level={3} text="Examples" margin={{ bottom: "small" }} />
                <Example title="Default Footer" example={defaultFooter}></Example>
                <Example title="Footer with custom content" example={children}></Example>
              </Section>
            )
          }
        ]}
      ></DxcTabsForSections>
    </ComponentDoc>
  );
}

export default App;
