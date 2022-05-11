import React from "react";
import ComponentDoc from "../../common/ComponentDoc";
import Section from "../../common/Section";
import ComponentHeader from "../../common/ComponentHeader";
import InputPropsTable from "./api.jsx";
import { DxcHeading } from "@dxc-technology/halstack-react";

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
