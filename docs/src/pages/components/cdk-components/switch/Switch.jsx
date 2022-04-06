import React from "react";
import { DxcHeading } from "@dxc-technology/halstack-react";
import ComponentDoc from "../../common/ComponentDoc";
import Section from "../../common/Section";
import Example from "../../common/Example";
import ComponentHeader from "../../common/ComponentHeader";
import SwitchPropsTable from "./api.jsx";
import basic from "./examples/basicSwitch"; 
import controlled from "./examples/controlledSwitch";
import uncontrolled from "./examples/uncontrolledSwitch";
import labelPosition from "./examples/labelPositionSwitch";

function Switch() {
  return (
    <ComponentDoc>
      <ComponentHeader title="Switch" status="ready"></ComponentHeader>
      <Section>
        <DxcHeading level={3} text="Props" margin={{ bottom: "small" }} />
        <SwitchPropsTable />
      </Section>
      <Section>
        <DxcHeading level={3} text="Examples" margin={{ bottom: "small" }} />
        <Example title="Basic Usage" example={basic}></Example>
        <Example title="Controlled Switch" example={controlled}></Example>
        <Example title="Uncontrolled Switch" example={uncontrolled}></Example>
        <Example
          title="Label position Switch"
          example={labelPosition}
        ></Example>
      </Section>
    </ComponentDoc>
  );
}

export default Switch;
