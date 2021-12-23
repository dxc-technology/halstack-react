import React from "react";
import ComponentDoc from "../../common/ComponentDoc";
import Section from "../../common/Section";
import Example from "../../common/Example";
import ComponentHeader from "../../common/ComponentHeader";
import InputPropsTable from "./api.jsx";
import { DxcHeading } from "@dxc-technology/halstack-react";
import controlled from "./examples/controlledSelect";
import uncontrolled from "./examples/uncontrolledSelect";
import multiple from "./examples/multipleSelect";

function Select() {
  return (
    <ComponentDoc>
      <ComponentHeader title="Select" status="ready"></ComponentHeader>
      <Section>
        <DxcHeading level={3} text="Props" margin={{ bottom: "small" }} />
        <InputPropsTable />
      </Section>
      <Section>
        <DxcHeading level={3} text="Examples" margin={{ bottom: "small" }} />
        <Example title="Controlled Select" example={controlled}></Example>
        <Example title="Uncontrolled Select" example={uncontrolled}></Example>
        <Example title="Multiple Select" example={multiple}></Example>
      </Section>
    </ComponentDoc>
  );
}

export default Select;
