import React from "react";
import { DxcHeading } from "@dxc-technology/halstack-react";
import ComponentDoc from "../../common/ComponentDoc";
import Section from "../../common/Section";
import ComponentHeader from "../../common/ComponentHeader";
import QuickNavPropsTable from "./api.jsx";
import Example from "../../common/Example";
import quickNav from "./examples/quickNav";
import quickNavContent from "./examples/quickNavContent";

function QuickNav() {
  return (
    <ComponentDoc>
      <ComponentHeader title="QuickNav" status="experimental"></ComponentHeader>
      <Section>
        <DxcHeading level={3} text="Props" margin={{ bottom: "small" }} />
        <QuickNavPropsTable />
      </Section>
      <Section>
        <DxcHeading level={3} text="Examples" margin={{ bottom: "small" }} />
        <Example title="Quick nav" example={quickNav}></Example>
        <Example
          title="Quick nav with content"
          example={quickNavContent}
        ></Example>
      </Section>
    </ComponentDoc>
  );
}

export default QuickNav;
