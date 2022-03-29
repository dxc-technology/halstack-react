import React from "react";
import ComponentDoc from "../../common/ComponentDoc";
import Section from "../../common/Section";
import Example from "../../common/Example";
import Code from "../../common/Code";
import ComponentHeader from "../../common/ComponentHeader";
import RadioGroupPropsTable from "./api";
import { DxcHeading } from "@dxc-technology/halstack-react";
import basic from "./examples/basicUsage";
import controlled from "./examples/controlled";
import handlingErrors from "./examples/handlingErrors";
import optional from "./examples/optional";
import stacking from "./examples/stacking";

function RadioGroup() {
  return (
    <ComponentDoc>
      <ComponentHeader
        title="Radio Group"
        status="experimental"
      ></ComponentHeader>
      <Section>
        <DxcHeading level={3} text="Props" margin={{ bottom: "small" }} />
        <RadioGroupPropsTable />
      </Section>
      <Section>
        <DxcHeading level={3} text="Examples" margin={{ bottom: "small" }} />
        <Example title="Basic usage" example={basic}></Example>
        <Example title="Controlled Radio Group" example={controlled}></Example>
        <Example title="Handling errors" example={handlingErrors}>
          For handling errors, we suggest initializing the <Code>error</Code>{" "}
          prop with an empty string. This will reserve space for a possible
          future error message and prevent unintended layout changes. Also, the{" "}
          <Code>onBlur</Code> event will send <Code>undefined</Code> when there
          is no error, so you may also need to control this too to avoid the
          same problem.
        </Example>
        <Example title="Optional" example={optional}></Example>
        <Example title="Stacking" example={stacking}></Example>
      </Section>
    </ComponentDoc>
  );
}

export default RadioGroup;
