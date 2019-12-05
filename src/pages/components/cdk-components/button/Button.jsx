import React from "react";

import ComponentDoc from "../../common/ComponentDoc";
import Section from "../../common/Section";
import DocTitle from "../../common/DocTitle";
import Example from "../../common/Example";
import ButtonPropsTable from "./api.jsx";

import modes from "./examples/modes";
import disabled from "./examples/disabled";

function Button() {
  return (
    <ComponentDoc>
      <DocTitle size={1}>Button</DocTitle>
      <Section>
        <DocTitle size={2}>Props</DocTitle>
        <ButtonPropsTable />
      </Section>
      <Section>
        <DocTitle size={2}>Elements</DocTitle>
        <Example title="Default Button" example={modes}></Example>
        <Example title="Disabled Button" example={disabled}></Example>
      </Section>
    </ComponentDoc>
  );
}

export default Button;
