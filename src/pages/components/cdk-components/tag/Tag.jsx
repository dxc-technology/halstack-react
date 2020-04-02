import React from "react";
import { DxcTabsForSections } from "@diaas/dxc-react-cdk";

import ComponentDoc from "../../common/ComponentDoc";
import Section from "../../common/Section";
import DocTitle from "../../../../common/DocTitle";
import Example from "../../common/Example";
import TagPropsTable from "./api.jsx";

import basicExample from "./examples/basicExample";
import linkExample from "./examples/linkExample";
import actionExample from "./examples/actionExample";
import sized from "./examples/sized";

function Tag() {
  return (
    <ComponentDoc>
      <DocTitle size={1}>Tag</DocTitle>
      <DxcTabsForSections
        stickAtPx={64}
        tabsMode="underlined"
        sections={[
          {
            tabLabel: "Props",
            section: () => (
              <Section>
                <DocTitle size={2}>Props</DocTitle>
                <TagPropsTable />
              </Section>
            )
          },
          {
            tabLabel: "Examples",
            section: () => (
              <Section>
                <DocTitle size={2}>Examples</DocTitle>
                <Example title="Basic Tag" example={basicExample}></Example>
                <Example title="Tag with Link" example={linkExample}></Example>
                <Example
                  title="Tag with Action"
                  example={actionExample}
                ></Example>
                <Example title="Sized Tag" example={sized}></Example>
              </Section>
            )
          }
        ]}
      ></DxcTabsForSections>
    </ComponentDoc>
  );
}

export default Tag;
