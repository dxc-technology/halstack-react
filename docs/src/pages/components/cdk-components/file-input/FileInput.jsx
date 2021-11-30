import React from "react";
import { DxcTabsForSections, DxcHeading } from "@dxc-technology/halstack-react";
import ComponentDoc from "../../common/ComponentDoc";
import Example from "../../common/Example";
import ComponentHeader from "../../common/ComponentHeader";
import Section from "../../common/Section";
import FileInputPropsTable from "./api.jsx";
import defaultFileInput from "./examples/default";
import single from "./examples/single";
import preview from "./examples/preview";
import accept from "./examples/accept";
import size from "./examples/size";
import filedrop from "./examples/filedrop";
import dropzone from "./examples/dropzone";
import disabled from "./examples/disabled";

function FileInput() {
  return (
    <ComponentDoc>
      <ComponentHeader
        title="File Input"
        status="experimental"
      ></ComponentHeader>
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
                <Example title="With preview" example={preview}></Example>
                <Example title="Accept file formats" example={accept}></Example>
                <Example
                  title="Min file size, max file size"
                  example={size}
                ></Example>
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
