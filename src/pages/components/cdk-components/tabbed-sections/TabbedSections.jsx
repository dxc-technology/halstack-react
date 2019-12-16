import React from "react";
import { DxcTabsForSections } from "@diaas/dxc-react-cdk";

import ComponentDoc from "../../common/ComponentDoc";
import Section from "../../common/Section";
import DocTitle from "../../../../common/DocTitle";
import Example from "../../common/Example";
import TabbedSectionsPropsTable from "./api.jsx";

import tabbedSectionsExample from "./examples/tabbedSections";

function Button() {
  return (
    <ComponentDoc>
      <DocTitle size={1}>Tabbed Sections</DocTitle>
      <DxcTabsForSections
        stickAtPx={64}
        tabsMode="underlined"
        sections={[
          {
            tabLabel: "Props",
            section: () => (
              <Section>
                <DocTitle size={2}>Props</DocTitle>
                <TabbedSectionsPropsTable />
              </Section>
            )
          },
          {
            tabLabel: "Examples",
            section: () => (
              <Section>
                <DocTitle size={2}>Examples</DocTitle>
                <Example title="Tabbed Sections" example={tabbedSectionsExample}></Example>
              </Section>
            )
          }
        ]}
      ></DxcTabsForSections>
    </ComponentDoc>
  );
}

export default Button;
