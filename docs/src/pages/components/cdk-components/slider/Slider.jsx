import React from "react";
import { DxcHeading } from "@dxc-technology/halstack-react";
import ComponentDoc from "../../common/ComponentDoc";
import Example from "../../common/Example";
import SliderPropsTable from "./api.jsx";
import Section from "../../common/Section";
import ComponentHeader from "../../common/ComponentHeader";
import controlled from "./examples/controlled";
import uncontrolled from "./examples/uncontrolled";
import discrete from "./examples/discrete";
import continuous from "./examples/continuous";
import withoutLimits from "./examples/without-limits";
import input from "./examples/input";
import disabled from "./examples/disabled";

function Slider() {
  return (
    <ComponentDoc>
      <ComponentHeader title="Slider" status="ready"></ComponentHeader>
      <Section>
        <DxcHeading level={3} text="Props" margin={{ bottom: "small" }} />
        <SliderPropsTable />
      </Section>
      <Section>
        <DxcHeading level={3} text="Examples" margin={{ bottom: "small" }} />
        <Example title="Controlled Slider" example={controlled}></Example>
        <Example title="Uncontrolled Slider" example={uncontrolled}></Example>
        <Example title="Disabled Slider" example={disabled}></Example>
        <Example title="Discrete Slider" example={discrete}></Example>
        <Example title="Continuous Slider" example={continuous}></Example>
        <Example
          title="Slider without limit values"
          example={withoutLimits}
        ></Example>
        <Example title="Slider with input" example={input}></Example>
      </Section>
    </ComponentDoc>
  );
}

export default Slider;
