import React from "react";
import { DxcHeading } from "@dxc-technology/halstack-react";
import ComponentDoc from "../../common/ComponentDoc";
import Section from "../../common/Section";
import Example from "../../common/Example";
import ComponentHeader from "../../common/ComponentHeader";
import ChipPropsTable from "./api.jsx";
import coloredChips from "./examples/colored";
import suffixPrefix from "./examples/suffixPrefix";

function Chip() {
  return (
    <ComponentDoc>
      <ComponentHeader title="Chip" status="ready"></ComponentHeader>
      <Section>
        <DxcHeading level={3} text="Props" margin={{ bottom: "small" }} />
        <ChipPropsTable />
      </Section>
      <Section>
        <DxcHeading level={3} text="Examples" margin={{ bottom: "small" }} />
        <Example title="Default Chip" example={coloredChips}></Example>
        <Example title="Chips with icons" example={suffixPrefix}></Example>
      </Section>
    </ComponentDoc>
  );
}

export default Chip;
