import React from "react";
import { DxcHeading } from "@dxc-technology/halstack-react";
import ComponentDoc from "../../common/ComponentDoc";
import Section from "../../common/Section";
import Example from "../../common/Example";
import ComponentHeader from "../../common/ComponentHeader";
import BoxPropsTable from "./api.jsx";
import basicExample from "./examples/basicExample";

function Box() {
  return (
    <ComponentDoc>
      <ComponentHeader title="Box" status="ready"></ComponentHeader>
      <Section>
        <DxcHeading level={3} text="Props" margin={{ bottom: "small" }} />
        <BoxPropsTable />
      </Section>
      <Section>
        <DxcHeading level={3} text="Examples" margin={{ bottom: "small" }} />
        <Example title="Basic Example" example={basicExample}></Example>
      </Section>
    </ComponentDoc>
  );
}

export default Box;
