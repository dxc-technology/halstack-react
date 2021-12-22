import React from "react";
import { DxcHeading, DxcAlert, DxcLink } from "@dxc-technology/halstack-react";
import ComponentDoc from "../../common/ComponentDoc";
import Example from "../../common/Example";
import DatePropsTable from "./api.jsx";
import Section from "../../common/Section";
import ComponentHeader from "../../common/ComponentHeader";
import controlled from "./examples/controlledDate";
import uncontrolled from "./examples/uncontrolledDate";
import sized from "./examples/sized";

function Date() {
  return (
    <ComponentDoc>
      <ComponentHeader title="Date" status="deprecated" />
      <DxcAlert type="warning" margin={{ bottom: "small" }} size="fillParent">
        The component status has been changed to deprecated. Use the new{" "}
        <DxcLink
          href="#/components/dateInput"
          underlined={false}
          inheritedColor={true}
          text="Date Input"
        ></DxcLink>{" "}
        component instead.
      </DxcAlert>
      <Section>
        <DxcHeading level={3} text="Props" margin={{ bottom: "small" }} />
        <DatePropsTable />
      </Section>
      <Section>
        <DxcHeading level={3} text="Examples" margin={{ bottom: "small" }} />
        <Example title="Controlled Date" example={controlled}></Example>
        <Example title="Uncontrolled Date" example={uncontrolled}></Example>
        <Example title="Sized Date" example={sized}></Example>
      </Section>
    </ComponentDoc>
  );
}

export default Date;
