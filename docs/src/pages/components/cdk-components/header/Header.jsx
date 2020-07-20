import React from "react";
import { DxcTabsForSections } from "@diaas/dxc-react-cdk";

import ComponentDoc from "../../common/ComponentDoc";
import DocTitle from "../../../../common/DocTitle";
import Section from "../../common/Section";
import Example from "../../common/Example";
import ComponentHeader from "../../common/ComponentHeader";
import InputPropsTable from "./api.jsx";

import defaultHeader from "./examples/default.js";
import dark from "./examples/dark.js";
import outlined from "./examples/outlined.js";
import children from "./examples/children.js";

function Input() {
  return (
    <ComponentDoc>
      <ComponentHeader
        title="Header"
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
                <InputPropsTable />
              </Section>
            )
          },
          {
            tabLabel: "Examples",
            section: () => (
              <Section>
                <DocTitle size={2}>Examples</DocTitle>
                <Example
                  title="Default Header"
                  example={defaultHeader}
                ></Example>
                <Example title="Dark Header" example={dark}></Example>
                <Example title="Underlined Header" example={outlined}></Example>
                <Example
                  title="Header with custom content"
                  example={children}
                ></Example>
              </Section>
            )
          }
        ]}
      ></DxcTabsForSections>
    </ComponentDoc>
  );
}

export default Input;
