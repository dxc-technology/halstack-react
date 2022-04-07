import React from "react";
import { DxcHeading } from "@dxc-technology/halstack-react";
import ComponentDoc from "../../common/ComponentDoc";
import Section from "../../common/Section";
import Example from "../../common/Example";
import ComponentHeader from "../../common/ComponentHeader";
import TextareaPropsTable from "./api.jsx";
import basic from "./examples/basicUsageTextarea";
import controlled from "./examples/controlledTextarea";
import uncontrolled from "./examples/uncontrolledTextarea";
import optional from "./examples/optionalTextarea";
import verticalGrow from "./examples/verticalGrowTextarea";
import rows from "./examples/rowsTextarea";
import pattern from "./examples/patternTextarea";
import length from "./examples/lengthTextarea";
import customErrors from "./examples/customErrorsTextarea";

function Textarea() {
  return (
    <ComponentDoc>
      <ComponentHeader title="Textarea" status="ready"></ComponentHeader>
      <Section>
        <DxcHeading level={3} text="Props" margin={{ bottom: "small" }} />
        <TextareaPropsTable />
      </Section>
      <Section>
        <DxcHeading level={3} text="Examples" margin={{ bottom: "small" }} />
        <Example title="Basic usage" example={basic}></Example>
        <Example title="Controlled textarea" example={controlled} />
        <Example title="Uncontrolled textarea" example={uncontrolled} />
        <Example title="Optional textarea" example={optional}></Example>
        <Example
          title="Textarea vertical grow"
          example={verticalGrow}
        ></Example>
        <Example title="Textarea with default rows" example={rows}></Example>
        <Example
          title="Textarea with pattern constraint"
          example={pattern}
        ></Example>
        <Example
          title="Textarea with length constraint"
          example={length}
        ></Example>
        <Example
          title="Textarea with custom error messages"
          example={customErrors}
        ></Example>
      </Section>
    </ComponentDoc>
  );
}

export default Textarea;
