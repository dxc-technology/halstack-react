import React from "react";
import { DxcTabsForSections, DxcHeading } from "@dxc-technology/halstack-react";
import ComponentDoc from "../../common/ComponentDoc";
import Example from "../../common/Example";
import ComponentHeader from "../../common/ComponentHeader";
import Section from "../../common/Section";
import FileInputPropsTable from "./api.jsx";
import defaultFileInput from "./examples/default";
import single from "./examples/single";
import disabled from "./examples/disabled";
import filedrop from "./examples/filedrop";
import dropzone from "./examples/dropzone";

function FileInput() {
  return (
    <ComponentDoc>
      <ComponentHeader title="File Input" status="ready"></ComponentHeader>
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
                <FileInputPropsTable />
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
                <Example title="Default" example={defaultFileInput}></Example>
                <Example title="Single" example={single}></Example>
                <Example title="Filedrop" example={filedrop}></Example>
                <Example title="Dropzone" example={dropzone}></Example>
                <Example title="Disabled" example={disabled}></Example>
              </Section>
            ),
          },
        ]}
      ></DxcTabsForSections>
    </ComponentDoc>
  );
}

export default FileInput;
