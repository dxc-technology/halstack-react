import React from "react";
import { DxcHeading } from "@dxc-technology/halstack-react";
import ComponentDoc from "../../common/ComponentDoc";
import Section from "../../common/Section";
import Example from "../../common/Example";
import ComponentHeader from "../../common/ComponentHeader";
import BleedPropsTable from "./api.jsx";
import space from "./examples/space";
import horizontal from "./examples/horizontal";
import vertical from "./examples/vertical";
import customAllSides from "./examples/customAllSides";

function Bleed() {
  return (
    <ComponentDoc>
      <ComponentHeader title="Bleed" status="experimental"></ComponentHeader>
      <Section>
        <DxcHeading level={3} text="Props" margin={{ bottom: "small" }} />
        <BleedPropsTable />
      </Section>
      <Section>
        <DxcHeading level={3} text="Examples" margin={{ bottom: "small" }} />
        <Example title="Space" example={space}></Example>
        <Example title="Horizontal" example={horizontal}></Example>
        <Example title="Vertical" example={vertical}></Example>
        <Example title="Custom each side" example={customAllSides}></Example>
      </Section>
    </ComponentDoc>
  );
}

export default Bleed;
