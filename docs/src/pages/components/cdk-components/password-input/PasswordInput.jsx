import React from "react";
import { DxcHeading } from "@dxc-technology/halstack-react";
import ComponentDoc from "../../common/ComponentDoc";
import Example from "../../common/Example";
import Section from "../../common/Section";
import ComponentHeader from "../../common/ComponentHeader";
import PasswordInputPropsTable from "./api.jsx";
import basic from "./examples/basicPasswordInput";
import controlled from "./examples/controlledPasswordInput";
import uncontrolled from "./examples/uncontrolledPasswordInput";
import pattern from "./examples/patternPasswordInput";
import length from "./examples/lengthPasswordInput";
import customErrors from "./examples/customErrorsPasswordInput";

function PasswordInput() {
  return (
    <ComponentDoc>
      <ComponentHeader title="Password Input" status="ready"></ComponentHeader>
      <Section>
        <DxcHeading level={3} text="Props" margin={{ bottom: "small" }} />
        <PasswordInputPropsTable />
      </Section>
      <Section>
        <DxcHeading level={3} text="Examples" margin={{ bottom: "small" }} />
        <Example title="Basic usage" example={basic}></Example>
        <Example
          title="Controlled password input"
          example={controlled}
        ></Example>
        <Example
          title="Uncontrolled password input"
          example={uncontrolled}
        ></Example>
        <Example
          title="Password input with pattern constraint"
          example={pattern}
        ></Example>
        <Example
          title="Password input with length constraint"
          example={length}
        ></Example>
        <Example
          title="Password input with custom error messages"
          example={customErrors}
        ></Example>
      </Section>
    </ComponentDoc>
  );
}
export default PasswordInput;
