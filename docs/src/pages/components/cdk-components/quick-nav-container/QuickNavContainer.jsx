import React from "react";
import ComponentDoc from "../../common/ComponentDoc";
import Section from "../../common/Section";
import Example from "../../common/Example";
import ComponentHeader from "../../common/ComponentHeader";
import InputPropsTable from "./api.jsx";
import { DxcHeading } from "@dxc-technology/halstack-react";
import quickNavContainer from "./examples/quickNavContainer";

function QuickNavContainer() {
  return (
    <ComponentDoc>
      <ComponentHeader
        title="QuickNavContainer"
        status="experimental"
      ></ComponentHeader>
      <Section>
        <DxcHeading level={3} text="Props" margin={{ bottom: "small" }} />
        <InputPropsTable />
      </Section>
    </ComponentDoc>
  );
}

export default QuickNavContainer;
