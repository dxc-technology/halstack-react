import React from "react";
import { DxcHeading, DxcAlert, DxcLink } from "@dxc-technology/halstack-react";
import ComponentDoc from "../../common/ComponentDoc";
import Example from "../../common/Example";
import Section from "../../common/Section";
import ComponentHeader from "../../common/ComponentHeader";
import RadioPropsTable from "./api.jsx";
import controlledRadio from "./examples/controlledRadio";
import unControlledRadio from "./examples/uncontrolledRadio";
import radioLabelPosition from "./examples/radioLabelPosition";
import radioGroup from "././examples/radioGroup";
import sized from "././examples/sizedRadio";

function Radio() {
  return (
    <ComponentDoc>
      <ComponentHeader
        title="Radio Button"
        status="deprecated"
      ></ComponentHeader>
      <DxcAlert type="warning" margin={{ bottom: "small" }} size="fillParent">
        The component status has been changed to deprecated. Use the new{" "}
        <DxcLink
          href="#/components/radioGroup"
          underlined={false}
          inheritedColor={true}
          text="Radio Group"
        ></DxcLink>{" "}
        component instead.
      </DxcAlert>
      <Section>
        <DxcHeading level={3} text="Props" margin={{ bottom: "small" }} />
        <RadioPropsTable />
      </Section>
      <Section>
        <DxcHeading level={3} text="Examples" margin={{ bottom: "small" }} />
        <Example title="Controlled Radio" example={controlledRadio}></Example>
        <Example
          title="Uncontrolled Radio"
          example={unControlledRadio}
        ></Example>
        <Example title="Label Position" example={radioLabelPosition}></Example>
        <Example title="Radio Group" example={radioGroup}></Example>
        <Example title="Sized Radio" example={sized}></Example>
      </Section>
    </ComponentDoc>
  );
}
export default Radio;
