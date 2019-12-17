import React from "react";
import { DxcTabsForSections } from "@diaas/dxc-react-cdk";

import ComponentDoc from "../../common/ComponentDoc";
import DocTitle from "../../../../common/DocTitle";
import Section from "../../common/Section";
import Example from "../../common/Example";
import DialogPropsTable from "./api.jsx";

import defaultDialog from "./examples/defaultDialog.js"
import modalDialog from "./examples/modalDialog.js"
import onCloseDialog from "./examples/onCloseDialog.js"

function Dialog() {
  return (
    <ComponentDoc>
      <DocTitle size={1}>Dialog</DocTitle>
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
                  title="onClose Dialog"
                  example={onCloseDialog}
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
