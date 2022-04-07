import React from "react";
import { DxcHeading } from "@dxc-technology/halstack-react";
import ComponentDoc from "../../common/ComponentDoc";
import Example from "../../common/Example";
import Section from "../../common/Section";
import ComponentHeader from "../../common/ComponentHeader";
import NumberInputPropsTable from "./api.jsx";
import basic from "./examples/basicNumberInput";
import controlled from "./examples/controlledNumberInput";
import uncontrolled from "./examples/uncontrolledNumberInput";
import customErrors from "./examples/customErrorsNumberInput";
import minMaxStep from "./examples/minMaxStepNumberInput";

function NumberInput() {
  return (
    <ComponentDoc>
      <ComponentHeader title="Number Input" status="ready"></ComponentHeader>
      <Section>
        <DxcHeading level={3} text="Props" margin={{ bottom: "small" }} />
        <NumberInputPropsTable />
      </Section>
      <Section>
        <DxcHeading level={3} text="Examples" margin={{ bottom: "small" }} />
        <Example title="Basic usage" example={basic}></Example>
        <Example title="Controlled number input" example={controlled} />
        <Example title="Uncontrolled number input" example={uncontrolled} />
        <Example title="Min, max and step" example={minMaxStep}></Example>
        <Example
          title="Number input with custom error messages"
          example={customErrors}
        ></Example>
      </Section>
    </ComponentDoc>
  );
}
export default NumberInput;
