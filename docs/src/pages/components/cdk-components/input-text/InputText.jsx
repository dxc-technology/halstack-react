import React from "react";
import { DxcHeading, DxcAlert, DxcLink } from "@dxc-technology/halstack-react";
import ComponentDoc from "../../common/ComponentDoc";
import Section from "../../common/Section";
import Example from "../../common/Example";
import ComponentHeader from "../../common/ComponentHeader";
import InputPropsTable from "./api.jsx";
import controlled from "./examples/controlledInputText";
import uncontrolled from "./examples/uncontrolledInputText";
import labeled from "./examples/lebeledInputText";
import fillParent from "./examples/fillParentInputInputText";
import sized from "./examples/sizedInputText";
import maskedInput from "./examples/maskedInputText";
import autocomplete from "./examples/autocomplete";

function InputText() {
  return (
    <ComponentDoc>
      <ComponentHeader title="Input Text" status="deprecated"></ComponentHeader>
      <DxcAlert type="warning" margin={{ bottom: "small" }} size="fillParent">
        The component status has been changed to deprecated. Use the new{" "}
        <DxcLink
          href="#/components/textInput"
          underlined={false}
          inheritedColor={true}
          text="Text Input"
        ></DxcLink>{" "}
        component instead.
      </DxcAlert>
      <Section>
        <DxcHeading level={3} text="Props" margin={{ bottom: "small" }} />
        <InputPropsTable />
      </Section>
      <Section>
        <DxcHeading level={3} text="Examples" margin={{ bottom: "small" }} />
        <Example title="Controlled input text" example={controlled}></Example>
        <Example
          title="Uncontrolled input text"
          example={uncontrolled}
        ></Example>
        <Example title="Masked input text" example={maskedInput}></Example>
        <Example
          title="Input text with prefix/suffix"
          example={labeled}
        ></Example>
        <Example title="Sized input text" example={sized}></Example>
        <Example title="Fill parent input text" example={fillParent}></Example>
        <Example
          title="Synchronous controlled autocomplete"
          example={autocomplete}
        ></Example>
      </Section>
    </ComponentDoc>
  );
}

export default InputText;
