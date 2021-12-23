import React from "react";
import ComponentDoc from "../../common/ComponentDoc";
import Section from "../../common/Section";
import Example from "../../common/Example";
import ComponentHeader from "../../common/ComponentHeader";
import SelectPropsTable from "./api.jsx";
import { DxcHeading, DxcAlert, DxcLink } from "@dxc-technology/halstack-react";
import defaultSelect from "./examples/default";
import controlled from "./examples/controlledSelect";
import multipleSelect from "./examples/multipleSelect";
import withIcons from "./examples/withIcons";
import sized from "./examples/sizedSelect";

function Select() {
  return (
    <ComponentDoc>
      <ComponentHeader title="Select" status="deprecated"></ComponentHeader>
      <DxcAlert type="warning" margin={{ bottom: "small" }} size="fillParent">
        The component status has been changed to deprecated. Use the new{" "}
        <DxcLink
          href="#/components/select"
          underlined={false}
          inheritedColor={true}
          text="Select"
        ></DxcLink>{" "}
        component instead.
      </DxcAlert>
      <Section>
        <DxcHeading level={3} text="Props" margin={{ bottom: "small" }} />
        <SelectPropsTable />
      </Section>
      <Section>
        <DxcHeading level={3} text="Examples" margin={{ bottom: "small" }} />
        <Example title="Controlled Select" example={controlled}></Example>
        <Example title="Uncontrolled Select" example={defaultSelect}></Example>
        <Example title="Multiple Select" example={multipleSelect}></Example>
        <Example title="Select with Icons" example={withIcons}></Example>
        <Example title="Sized Select" example={sized}></Example>
      </Section>
    </ComponentDoc>
  );
}

export default Select;
