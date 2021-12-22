import React from "react";
import { DxcLink, DxcHeading } from "@dxc-technology/halstack-react";
import ComponentDoc from "../../common/ComponentDoc";
import Section from "../../common/Section";
import Example from "../../common/Example";
import autosuggest from "./examples/autosuggest";
import autosuggestFunction from "./examples/autosuggestFunction";
import ComponentHeader from "../../common/ComponentHeader";

function Autosuggest() {
  return (
    <ComponentDoc>
      <ComponentHeader title="Autosuggest" status="ready"></ComponentHeader>
      <Section>
        <DxcHeading level={3} text="Props" margin={{ bottom: "small" }} />
        <React.Fragment>
          The autosuggest functionality has been implemented as part of the
          <DxcLink
            text="Text Input"
            underlined={false}
            margin="xxsmall"
            href={`#/components/textInput`}
          />
          component. The whole documentation of public API for this component
          can be found in that page.
        </React.Fragment>
      </Section>
      <Section>
        <DxcHeading level={3} text="Examples" margin={{ bottom: "small" }} />
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

export default Autosuggest;
