import React from "react";
import ComponentDoc from "../../common/ComponentDoc";
import DocTitle from "../../common/DocTitle";
import Section from "../../common/Section";
import Example from "../../common/Example";
import InputPropsTable from "./api.jsx";

import defaultSelect from "./examples/default";
import controlled from "./examples/controlledSelect";
import multipleSelect from "./examples/multipleSelect";
import withIcons from "./examples/withIcons";
import darkThemed from "./examples/darkThemed";

function Input() {
  return (
    <ComponentDoc>
      <DocTitle size={1}>Select</DocTitle>
      <Section>
        <DocTitle size={2}>Props</DocTitle>
        <InputPropsTable />
      </Section>
      <Section>
        <DocTitle size={2}>Elements</DocTitle>
        <Example title="Default Select" example={defaultSelect}></Example>
        <Example title="Controlled Select" example={controlled}></Example>
        <Example title="Multiple Select" example={multipleSelect}></Example>
        <Example title="Select with Icons" example={withIcons}></Example>
        <Example title="Dark themed Select" example={darkThemed}></Example>
      </Section>
    </ComponentDoc>
  );
}

export default Input;
