import React from "react";
import ComponentDoc from "../../common/ComponentDoc";
import DocTitle from "../../common/DocTitle";
import Section from "../../common/Section";
import Example from "../../common/Example";
import CheckboxPropsTable from "./api.jsx";

import controlled from "./examples/controlledCheckbox";
import uncontrolled from "./examples/uncontrolledCheckbox";
import themed from "./examples/themedCheckbox";

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
        <Example title="Themed Checkbox" example={themed}></Example>
      </Section>
    </ComponentDoc>
  );
}

export default Checkbox;
