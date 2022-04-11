import React from "react";
import ComponentDoc from "../../common/ComponentDoc";
import Section from "../../common/Section";
import Example from "../../common/Example";
import ComponentHeader from "../../common/ComponentHeader";
import InputPropsTable from "./api.jsx";
import { DxcHeading } from "@dxc-technology/halstack-react";
import quickNav from "./examples/quickNav";

function QuickNav() {
  return (
    <ComponentDoc>
      <ComponentHeader title="QuickNav" status="experimental"></ComponentHeader>
      <Section>
        <DxcHeading level={3} text="Props" margin={{ bottom: "small" }} />
        <InputPropsTable />
      </Section>
      <Section>
        <DxcHeading level={3} text="Examples" margin={{ bottom: "small" }} />
        <Example title="QuickNav" example={quickNav}></Example>
      </Section>
    </ComponentDoc>
  );
}

export default QuickNav;
