import React from "react";
import { DxcTabsForSections } from "@dxc-technology/halstack-react";

import ComponentDoc from "../../common/ComponentDoc";
import DocTitle from "../../../../common/DocTitle";
import Section from "../../common/Section";
import Example from "../../common/Example";
import ComponentHeader from "../../common/ComponentHeader";

import TabsPropsTable from "./api.jsx";
import TabsTokensTable from "./Tokens.jsx";

import controlledTabs from "./examples/controlledTabs";
import uncontrolledTabs from "./examples/uncontrolledTabs";
import underlinedTabs from "./examples/underlinedTabs";
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
                <DocTitle size={2}>Props</DocTitle>
                <TabsPropsTable />
              </Section>
            ),
          },
          {
            tabLabel: "Theming",
            section: () => (
              <Section>
                <DocTitle size={2}>Theming</DocTitle>
                <TabsTokensTable />
              </Section>
            ),
          },
          {
            tabLabel: "Examples",
            section: () => (
              <Section>
                <DocTitle size={2}>Examples</DocTitle>
                <Example
                  title="Controlled Tabs"
                  example={controlledTabs}
                ></Example>
                <Example
                  title="Uncontrolled Tabs"
                  example={uncontrolledTabs}
                ></Example>
                <Example
                  title="Underlined Tabs"
                  example={underlinedTabs}
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
