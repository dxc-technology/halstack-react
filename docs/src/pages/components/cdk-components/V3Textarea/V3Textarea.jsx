import React from "react";
import { DxcHeading, DxcAlert, DxcLink } from "@dxc-technology/halstack-react";
import ComponentDoc from "../../common/ComponentDoc";
import Section from "../../common/Section";
import Example from "../../common/Example";
import ComponentHeader from "../../common/ComponentHeader";
import InputPropsTable from "./api.jsx";
import controlled from "./examples/controlledTextarea";
import uncontrolled from "./examples/uncontrolledTextarea";
import size from "./examples/sizeTextarea";
import disabled from "./examples/disabledTextarea";
import required from "./examples/requiredTextarea";
import invalid from "./examples/invalidTextarea";

function Textarea() {
  return (
    <ComponentDoc>
      <ComponentHeader title="Textarea" status="deprecated"></ComponentHeader>
      <DxcAlert type="warning" margin={{ bottom: "small" }} size="fillParent">
        The component status has been changed to deprecated. Use the new{" "}
        <DxcLink
          href="#/components/textarea"
          underlined={false}
          inheritedColor={true}
          text="Textarea"
        ></DxcLink>{" "}
        component instead.
      </DxcAlert>
      <Section>
        <DxcHeading level={3} text="Props" margin={{ bottom: "small" }} />
        <InputPropsTable />
      </Section>
      <Section>
        <DxcHeading level={3} text="Examples" margin={{ bottom: "small" }} />
        <Example title="Controlled Textarea" example={controlled}></Example>
        <Example title="Uncontrolled Textarea" example={uncontrolled}></Example>
        <Example title="Fill Parent  Textarea" example={size}></Example>
        <Example title="Disabled Textarea" example={disabled}></Example>
        <Example title="Invalid Textarea" example={invalid}></Example>
        <Example title="Required Textarea" example={required}></Example>
      </Section>
    </ComponentDoc>
  );
}

export default Textarea;
