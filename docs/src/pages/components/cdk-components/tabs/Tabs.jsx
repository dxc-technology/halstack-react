import React from "react";
import { DxcTabsForSections, DxcHeading } from "@dxc-technology/halstack-react";

import ComponentDoc from "../../common/ComponentDoc";

import Section from "../../common/Section";
import Example from "../../common/Example";
import ComponentHeader from "../../common/ComponentHeader";

import TabsPropsTable from "./api.jsx";
import TabsTokensTable from "./Tokens.jsx";

import controlledTabs from "./examples/controlledTabs";
import uncontrolledTabs from "./examples/uncontrolledTabs";
import iconsTabs from "./examples/iconsTabs";
import withContentTabs from "./examples/withContentTabs";

function Tabs() {
  return (
    <ComponentDoc>
      <ComponentHeader title="Tabs" status="ready"></ComponentHeader>
      <DxcTabsForSections
        stickAtPx={64}
        tabsMode="underlined"
        sections={[
          {
            tabLabel: "Props",
            section: () => (
              <Section>
                <DxcHeading level={3} text="Props" margin={{ bottom: "small" }} />
                <TabsPropsTable />
              </Section>
            ),
          },
          {
            tabLabel: "Theming",
            section: () => (
              <Section>
                <DxcHeading level={3} text="Theming" margin={{ bottom: "small" }} />
                <TabsTokensTable />
              </Section>
            ),
          },
          {
            tabLabel: "Examples",
            section: () => (
              <Section>
                <DxcHeading level={3} text="Examples" margin={{ bottom: "small" }} />
                <Example
                  title="Controlled Tabs"
                  example={controlledTabs}
                ></Example>
                <Example
                  title="Uncontrolled Tabs"
                  example={uncontrolledTabs}
                ></Example>
                <Example
                  title="Tabs with icons"
                  example={iconsTabs}
                ></Example>
                <Example
                  title="Tabs with content"
                  example={withContentTabs}
                ></Example>
              </Section>
            ),
          },
        ]}
      ></DxcTabsForSections>
    </ComponentDoc>
  );
}

export default Tabs;
