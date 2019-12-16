import React from "react";
import ComponentDoc from "../../common/ComponentDoc";
import DocTitle from "../../common/DocTitle";
import Example from "../../common/Example";
import AlertPropsTable from "./api.jsx";
import Section from "../../common/Section";
import discrete from "./examples/discrete";
import continuous from "./examples/continuous";
import disabled from "./examples/disabled";
import withoutLimits from "./examples/without-limits";
import input from "./examples/input";
import dark from "./examples/dark";

function Slider() {
  return (
    <ComponentDoc>
      <DocTitle size={1}>Slider</DocTitle>
      <Section>
        <DocTitle size={2}>Props</DocTitle>
        <AlertPropsTable />
      </Section>
      <Section>
        <DocTitle size={2}>Elements</DocTitle>
        <Example title="Discrete Slider" example={discrete}></Example>
        <Example title="Continuous Slider" example={continuous}></Example>
        <Example title="Disabled Slider" example={disabled}></Example>
        <Example title="Slider without limit values" example={withoutLimits}></Example>
        <Example title="Slider with input" example={input}></Example>
        <Example title="Dark Theme Slider" example={dark}></Example>
      </Section>
    </ComponentDoc>
  );
}

export default Slider;
