import React, { useEffect } from "react";
import { DxcTabsForSections } from "@diaas/dxc-react-cdk";

import ComponentDoc from "../../common/ComponentDoc";
import DocTitle from "../../../../common/DocTitle";
import Section from "../../common/Section";
import Example from "../../common/Example";
import DialogPropsTable from "./api.jsx";

import defaultDialog from "./examples/defaultDialog.js"
import modalDialog from "./examples/modalDialog.js"
import buttonCloseDialog from "./examples/closeButtonDialog.js"

function Dialog() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);
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
