import React from "react";
import { DxcHeading } from "@dxc-technology/halstack-react";
import ComponentDoc from "../../common/ComponentDoc";
import Section from "../../common/Section";
import Example from "../../common/Example";
import ComponentHeader from "../../common/ComponentHeader";
import TablePropsTable from "./api.jsx";
import defaultTable from "./examples/defaultTable";

function Tabs() {
  return (
    <ComponentDoc>
      <ComponentHeader title="Table" status="ready"></ComponentHeader>
      <Section>
        <DxcHeading level={3} text="Props" margin={{ bottom: "small" }} />
        <TablePropsTable />
      </Section>
      <Section>
        <DxcHeading level={3} text="Examples" margin={{ bottom: "small" }} />
        <Example title="Simple Table" example={defaultTable}></Example>
      </Section>
    </ComponentDoc>
  );
}

export default Tabs;
