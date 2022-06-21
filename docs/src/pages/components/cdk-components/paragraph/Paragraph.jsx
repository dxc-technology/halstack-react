import React from "react";
import { DxcHeading } from "@dxc-technology/halstack-react";
import ComponentDoc from "../../common/ComponentDoc";
import Section from "../../common/Section";
import ParagraphPropsTable from "./api";
import Example from "../../common/Example";
import ComponentHeader from "../../common/ComponentHeader";
import basicUsage from "./examples/basicUsage";

function Paragraph() {
  return (
    <ComponentDoc>
      <ComponentHeader
        title="Paragraph"
        status="experimental"
      ></ComponentHeader>
      <Section>
        <DxcHeading level={3} text="Props" margin={{ bottom: "small" }} />
        <ParagraphPropsTable />
      </Section>
      <Section>
        <DxcHeading level={3} text="Examples" margin={{ bottom: "small" }} />
        <Example title="Basic Usage" example={basicUsage}></Example>
      </Section>
    </ComponentDoc>
  );
}

export default Paragraph;
