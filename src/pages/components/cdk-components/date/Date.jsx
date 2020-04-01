import React, { useEffect } from "react";
import { DxcTabsForSections } from "@diaas/dxc-react-cdk";

import ComponentDoc from "../../common/ComponentDoc";
import DocTitle from "../../../../common/DocTitle";
import Example from "../../common/Example";
import DatePropsTable from "./api.jsx";
import Section from "../../common/Section";
import controlled from "./examples/controlledDate";
import uncontrolled from "./examples/uncontrolledDate";
import sized from "./examples/sized";

function Accordion() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);
  return (
    <ComponentDoc>
      <DocTitle size={1}>Date</DocTitle>
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

export default Accordion;
