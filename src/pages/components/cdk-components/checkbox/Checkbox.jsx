import React from "react";
import ComponentDoc from "../../common/ComponentDoc";
import DocTitle from "../../common/DocTitle";
import Section from "../../common/Section";
import Example from "../../common/Example";
import CheckboxPropsTable from "./api.jsx";

import controlled from "./examples/controlledCheckbox";
import uncontrolled from "./examples/uncontrolledCheckbox";
import themed from "./examples/themedCheckbox";
import labelPosition from "./examples/labelPosition";
import disabled from "./examples/disabledCheckbox";
import required from "./examples/requiredCheckbox";

function Checkbox() {
  return (
    <ComponentDoc>
      <DocTitle size={1}>Checkbox</DocTitle>
      <Section>
        <DocTitle size={2}>Props</DocTitle>
        <CheckboxPropsTable />
      </Section>
      <Section>
        <DocTitle size={2}>Elements</DocTitle>
        <Example title="Controlled Checkbox" example={controlled}></Example>
        <Example title="Uncontrolled Checkbox" example={uncontrolled}></Example>
        <Example title="Label Position Checkbox" example={labelPosition}></Example>
        <Example title="Disabled Checkbox" example={disabled}></Example>
        <Example title="Required Checkbox" example={required}></Example>
        <Example title="Dark Themed Checkbox" example={themed}></Example>
      </Section>
    </ComponentDoc>
  );
}

export default Checkbox;
