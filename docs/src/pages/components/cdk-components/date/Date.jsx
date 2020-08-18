import React from "react";
import { DxcTabsForSections } from "@dxc-technology/halstack-react";

import ComponentDoc from "../../common/ComponentDoc";
import DocTitle from "../../../../common/DocTitle";
import Example from "../../common/Example";
import DatePropsTable from "./api.jsx";
import Section from "../../common/Section";
import ComponentHeader from "../../common/ComponentHeader";
import controlled from "./examples/controlledDate";
import uncontrolled from "./examples/uncontrolledDate";
import sized from "./examples/sized";
import DateTokensTable from "./Tokens.jsx";

function Date() {
  return (
    <ComponentDoc>
      <ComponentHeader
        title="Date"
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
                <DatePropsTable />
              </Section>
            )
          },
          {
            tabLabel: "Theming",
            section: () => (
              <Section>
                <DocTitle size={2}>Theming</DocTitle>
                <DateTokensTable />
              </Section>
            )
          },
          {
            tabLabel: "Examples",
            section: () => (
              <Section>
                <DocTitle size={2}>Examples</DocTitle>
                <Example title="Controlled Date" example={controlled}></Example>
                <Example
                  title="Uncontrolled Date"
                  example={uncontrolled}
                ></Example>
                <Example title="Sized Date" example={sized}></Example>
              </Section>
            )
          }
        ]}
      ></DxcTabsForSections>
    </ComponentDoc>
  );
}

export default Date;
