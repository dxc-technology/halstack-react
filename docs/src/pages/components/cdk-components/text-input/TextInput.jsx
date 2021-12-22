import React from "react";
import { DxcHeading } from "@dxc-technology/halstack-react";
import ComponentDoc from "../../common/ComponentDoc";
import Section from "../../common/Section";
import Example from "../../common/Example";
import ComponentHeader from "../../common/ComponentHeader";
import TextInputPropsTable from "./api.jsx";
import controlled from "./examples/controlledTextInput";
import uncontrolled from "./examples/uncontrolledTextInput";
import pattern from "./examples/patternTextInput";
import length from "./examples/lengthTextInput";
import invalid from "./examples/invalidTextInput";
import customErrors from "./examples/customErrorsTextInput";
import prefix from "./examples/prefixTextInput";
import suffix from "./examples/suffixTextInput";
import action from "./examples/actionTextInput";
import optional from "./examples/optionalTextInput";
import disabled from "./examples/disabledTextInput";
import placeholder from "./examples/placeholderTextInput";
import fillParent from "./examples/fillParentTextInput";

function TextInput() {
  return (
    <ComponentDoc>
      <ComponentHeader title="Text Input" status="ready"></ComponentHeader>
      <Section>
        <DxcHeading level={3} text="Props" margin={{ bottom: "small" }} />
        <TextInputPropsTable />
      </Section>
      <Section>
        <DxcHeading level={3} text="Examples" margin={{ bottom: "small" }} />
        <Example title="Controlled text input" example={controlled} />
        <Example title="Uncontrolled text input" example={uncontrolled} />
        <Example
          title="Text input with placeholder"
          example={placeholder}
        ></Example>
        <Example title="Text input with prefix" example={prefix}></Example>
        <Example title="Text input with suffix" example={suffix}></Example>
        <Example title="Text input with action" example={action}></Example>
        <Example title="Optional text input" example={optional}></Example>
        <Example title="Disabled text input" example={disabled}></Example>
        <Example
          title="Text input with pattern constraint"
          example={pattern}
        ></Example>
        <Example
          title="Text input with length constraint"
          example={length}
        ></Example>
        <Example title="Invalid text input" example={invalid}></Example>
        <Example
          title="Text input with custom error messages"
          example={customErrors}
        ></Example>
        <Example
          title="Fill parent size text input"
          example={fillParent}
        ></Example>
      </Section>
    </ComponentDoc>
  );
}

export default TextInput;
