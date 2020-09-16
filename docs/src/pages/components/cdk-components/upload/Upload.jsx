import React from "react";
import { DxcTabsForSections } from "@dxc-technology/halstack-react";

import ComponentDoc from "../../common/ComponentDoc";
import DocTitle from "../../../../common/DocTitle";
import Example from "../../common/Example";
import ComponentHeader from "../../common/ComponentHeader";
import AlertPropsTable from "./api.jsx";
import Section from "../../common/Section";
import upload from "./examples/upload";

function Upload() {
  return (
    <ComponentDoc>
      <ComponentHeader
        title="Upload"
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
                <AlertPropsTable />
              </Section>
            )
          },
          {
            tabLabel: "Theming",
            section: () => (
              <Section>
                <DocTitle size={2}>Theming</DocTitle>
                <p>Not available tokens.</p>
              </Section>
            ),
          },
          {
            tabLabel: "Examples",
            section: () => (
              <Section>
                <DocTitle size={2}>Examples</DocTitle>
                <Example title="Upload" example={upload}></Example>
              </Section>
            )
          }
        ]}
      ></DxcTabsForSections>
    </ComponentDoc>
  );
}

export default Upload;
