import React from "react";
import { DxcTabsForSections, DxcHeading } from "@dxc-technology/halstack-react";
import ComponentDoc from "../../common/ComponentDoc";
import Section from "../../common/Section";
import Example from "../../common/Example";
import ComponentHeader from "../../common/ComponentHeader";
import DialogPropsTable from "./api.jsx";
import defaultDialog from "./examples/defaultDialog.js";
import modalDialog from "./examples/modalDialog.js";
import buttonCloseDialog from "./examples/closeButtonDialog.js";

function Dialog() {
  return (
    <ComponentDoc>
      <ComponentHeader title="Dialog" status="ready"></ComponentHeader>
      <DxcTabsForSections
        stickAtPx={64}
        tabsMode="underlined"
        sections={[
          {
            tabLabel: "Props",
            section: () => (
              <Section>
                <DxcHeading
                  level={3}
                  text="Props"
                  margin={{ bottom: "small" }}
                />
                <DialogPropsTable />
              </Section>
            ),
          },
          {
            tabLabel: "Examples",
            section: () => (
              <Section>
                <DxcHeading
                  level={3}
                  text="Examples"
                  margin={{ bottom: "small" }}
                />
                <Example
                  title="Default Dialog"
                  example={defaultDialog}
                ></Example>
                <Example title="Modal Dialog" example={modalDialog}></Example>
                <Example
                  title="Close button Dialog"
                  example={buttonCloseDialog}
                ></Example>
              </Section>
            ),
          },
        ]}
      ></DxcTabsForSections>
    </ComponentDoc>
  );
}

export default Dialog;
