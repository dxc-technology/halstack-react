import React from "react";
import {
  DxcTabsForSections,
  DxcHeading,
  DxcAlert,
  DxcLink,
} from "@dxc-technology/halstack-react";
import ComponentDoc from "../../common/ComponentDoc";
import Example from "../../common/Example";
import ComponentHeader from "../../common/ComponentHeader";
import AlertPropsTable from "./api.jsx";
import Section from "../../common/Section";
import upload from "./examples/upload";

function Upload() {
  return (
    <ComponentDoc>
      <ComponentHeader title="Upload" status="deprecated"></ComponentHeader>
      <DxcAlert type="warning" margin={{ bottom: "small" }} size="fillParent">
        The component status has been changed to deprecated. Use the new{" "}
        <DxcLink
          href="#/components/fileInput"
          underlined={false}
          inheritedColor={true}
          text="File Input"
        ></DxcLink>{" "}
        component instead.
      </DxcAlert>
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
                <AlertPropsTable />
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
                <Example title="Upload" example={upload}></Example>
              </Section>
            ),
          },
        ]}
      ></DxcTabsForSections>
    </ComponentDoc>
  );
}

export default Upload;
