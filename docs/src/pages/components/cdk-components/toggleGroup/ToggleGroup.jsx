import React from "react";
import { DxcTabsForSections } from "@dxc-technology/halstack-react";

import ComponentDoc from "../../common/ComponentDoc";
import Section from "../../common/Section";
import DocTitle from "../../../../common/DocTitle";
import Example from "../../common/Example";
import ComponentHeader from "../../common/ComponentHeader";
import ToggleGroupPropsTable from "./api.jsx";
import ToggleGroupTokensTable from "./Tokens.jsx";

import defaultToggleGroup from "./examples/default";
import controlled from "./examples/controlledToggleGroup";
import multiple from "./examples/multipleToggleGroup";
import withIcons from "./examples/withIcons";

function ToggleGroup() {
  return (
    <ComponentDoc>
      <ComponentHeader
        title="Toggle Group"
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
                <ToggleGroupPropsTable />
              </Section>
            )
          },
          {
            tabLabel: "Theming",
            section: () => (
              <Section>
                <DocTitle size={2}>Theming</DocTitle>
                <ToggleGroupTokensTable />
              </Section>
            )
          },
          {
            tabLabel: "Examples",
            section: () => (
              <Section>
                <DocTitle size={2}>Examples</DocTitle>
                <Example
                  title="Controlled Toggle Group"
                  example={controlled}
                ></Example>
                <Example
                  title="Uncontrolled Toggle Group"
                  example={defaultToggleGroup}
                ></Example>
                <Example
                  title="Multiple Toggle Group"
                  example={multiple}
                ></Example>
                <Example
                  title="Toggle group with Icons"
                  example={withIcons}
                ></Example>
              </Section>
            )
          }
        ]}
      ></DxcTabsForSections>
    </ComponentDoc>
  );
}

export default ToggleGroup;
