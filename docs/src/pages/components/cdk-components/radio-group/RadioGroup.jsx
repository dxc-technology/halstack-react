import React from "react";
import ComponentDoc from "../../common/ComponentDoc";
import Section from "../../common/Section";
import Example from "../../common/Example";
import ComponentHeader from "../../common/ComponentHeader";
import RadioGroupPropsTable from "./api.jsx";
import { DxcHeading } from "@dxc-technology/halstack-react";
import basic from "./examples/basicUsage";
import optional from "./examples/optional";
import controlled from "./examples/controlled";
import stacking from "./examples/stacking";

function RadioGroup() {
  return (
    <ComponentDoc>
      <ComponentHeader title="Radio Group" status="experimental"></ComponentHeader>
      <Section>
        <DxcHeading level={3} text="Props" margin={{ bottom: "small" }} />
        <RadioGroupPropsTable />
      </Section>
      <Section>
        <DxcHeading level={3} text="Examples" margin={{ bottom: "small" }} />
        <Example title="Basic usage" example={basic}></Example>
        <Example title="Controlled Radio Group" example={controlled}></Example>
        <Example title="Optional" example={optional}></Example>
        <Example title="Stacking" example={stacking}></Example>
      </Section>
    </ComponentDoc>
  );
}

export default RadioGroup;
