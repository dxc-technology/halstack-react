import React from "react";
import { DxcTabsForSections } from "@dxc-technology/halstack-react";

import ComponentDoc from "../../common/ComponentDoc";
import DocTitle from "../../../../common/DocTitle";
import Section from "../../common/Section";
import Example from "../../common/Example";
import ComponentHeader from "../../common/ComponentHeader";
import DialogPropsTable from "./api.jsx";

import defaultDialog from "./examples/defaultDialog.js"
import modalDialog from "./examples/modalDialog.js"
import buttonCloseDialog from "./examples/closeButtonDialog.js"

function Dialog() {
  return (
    <ComponentDoc>
      <ComponentHeader
        title="Dialog"
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
                <DialogPropsTable />
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
                <Example
                  title="Default Dialog"
                  example={defaultDialog}
                ></Example>
                <Example
                  title="Modal Dialog"
                  example={modalDialog}
                ></Example>
                <Example
                  title="Close button Dialog"
                  example={buttonCloseDialog}
                ></Example>
              </Section>
            )
          }
        ]}
      ></DxcTabsForSections>
    </ComponentDoc>
  );
}

export default Dialog;
