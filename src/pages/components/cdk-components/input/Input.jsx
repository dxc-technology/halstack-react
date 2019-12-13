import React from "react";
import ComponentDoc from "../../common/ComponentDoc";
import DocTitle from "../../common/DocTitle";
import Section from "../../common/Section";
import Example from "../../common/Example";
import InputPropsTable from "./api.jsx";

import controlled from "./examples/controlledInput";
import uncontrolled from "./examples/uncontrolledInput";
import labeled from "./examples/lebeledInput";
import darkTheme from "./examples/darkThemed";

function Input() {
  return (
    <ComponentDoc>
      <DocTitle size={1}>Input</DocTitle>
      <Section>
        <DocTitle size={2}>Props</DocTitle>
        <InputPropsTable />
      </Section>
      <Section>
        <DocTitle size={2}>Elements</DocTitle>
        <Example title="Controlled Input" example={controlled}></Example>
        <Example title="Uncontrolled Input" example={uncontrolled}></Example>
        <Example title="Labeled Input" example={labeled}></Example>
        <Example title="Dark Themed Input" example={darkTheme}></Example>
      </Section>
    </ComponentDoc>
  );
}

export default Input;
