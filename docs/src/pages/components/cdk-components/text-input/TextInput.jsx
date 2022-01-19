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
import customErrors from "./examples/customErrorsTextInput";
import prefix from "./examples/prefixTextInput";
import suffix from "./examples/suffixTextInput";
import action from "./examples/actionTextInput";
import optional from "./examples/optionalTextInput";
import autosuggest from "./examples/autosuggest";
import autosuggestFunction from "./examples/autosuggestFunction";
import basic from "./examples/basicTextInput";

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
        <Example title="Basic usage" example={basic}></Example>
        <Example title="Controlled text input" example={controlled} />
        <Example title="Uncontrolled text input" example={uncontrolled} />
        <Example title="Text input with prefix" example={prefix}></Example>
        <Example title="Text input with suffix" example={suffix}></Example>
        <Example title="Text input with action" example={action}></Example>
        <Example title="Optional text input" example={optional}></Example>
        <Example
          title="Text input with pattern constraint"
          example={pattern}
        ></Example>
        <Example
          title="Text input with length constraint"
          example={length}
        ></Example>
        <Example
          title="Text input with custom error messages"
          example={customErrors}
        ></Example>
        <Example
          title="Text input with suggestions"
          example={autosuggest}
        ></Example>
        <Example
          title="Text input with a function as suggestions"
          example={autosuggestFunction}
        ></Example>
      </Section>
    </ComponentDoc>
  );
}

export default TextInput;
