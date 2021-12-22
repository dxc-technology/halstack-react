import React from "react";
import { DxcHeading } from "@dxc-technology/halstack-react";

import ComponentDoc from "../../common/ComponentDoc";

import Section from "../../common/Section";
import Example from "../../common/Example";
import ComponentHeader from "../../common/ComponentHeader";
import ResultsetTablePropsTable from "./api.jsx";

import defaultResultsetTable from "./examples/defaultResultseltTable";

function ResultsetTable() {
  return (
    <ComponentDoc>
      <ComponentHeader title="Resultset Table" status="ready"></ComponentHeader>
      <Section>
        <DxcHeading level={3} text="Props" margin={{ bottom: "small" }} />
        <ResultsetTablePropsTable />
      </Section>
      <Section>
        <DxcHeading level={3} text="Examples" margin={{ bottom: "small" }} />
        <Example
          title="Resultset Table"
          example={defaultResultsetTable}
        ></Example>
      </Section>
    </ComponentDoc>
  );
}

export default ResultsetTable;
