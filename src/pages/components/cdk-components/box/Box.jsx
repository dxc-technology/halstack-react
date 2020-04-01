import React, { useEffect } from "react";
import { DxcTabsForSections } from "@diaas/dxc-react-cdk";

import ComponentDoc from "../../common/ComponentDoc";
import Section from "../../common/Section";
import DocTitle from "../../../../common/DocTitle";
import Example from "../../common/Example";
import BoxPropsTable from "./api.jsx";

import basicExample from "./examples/basicExample";

function Box() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);
  return (
    <ComponentDoc>
      <DocTitle size={1}>Box</DocTitle>
      <DxcTabsForSections
        stickAtPx={64}
        tabsMode="underlined"
        sections={[
          {
            tabLabel: "Props",
            section: () => (
              <Section>
                <DocTitle size={2}>Props</DocTitle>
                <BoxPropsTable />
              </Section>
            )
          },
          {
            tabLabel: "Examples",
            section: () => (
              <Section>
                <DocTitle size={2}>Examples</DocTitle>
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
