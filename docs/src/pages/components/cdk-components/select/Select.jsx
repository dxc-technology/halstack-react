import React from "react";
import ComponentDoc from "../../common/ComponentDoc";
import Section from "../../common/Section";
import Example from "../../common/Example";
import ComponentHeader from "../../common/ComponentHeader";
import InputPropsTable from "./api.jsx";
import { DxcHeading } from "@dxc-technology/halstack-react";
import basic from "./examples/basicSelect";
import controlled from "./examples/controlledSelect";
import uncontrolled from "./examples/uncontrolledSelect";
import multiple from "./examples/multipleSelect";
import searchable from "./examples/searchableSelect";
import groups from "./examples/groupedSelect";
import icons from "./examples/iconsSelect";
import optional from "./examples/optionalSelect";

function Select() {
  return (
    <ComponentDoc>
      <ComponentHeader title="Select" status="ready"></ComponentHeader>
      <Section>
        <DxcHeading level={3} text="Props" margin={{ bottom: "small" }} />
        <InputPropsTable />
      </Section>
      <Section>
        <DxcHeading level={3} text="Examples" margin={{ bottom: "small" }} />
        <Example title="Basic usage" example={basic}></Example>
        <Example title="Controlled Select" example={controlled}></Example>
        <Example title="Uncontrolled Select" example={uncontrolled}></Example>
        <Example title="Searchable" example={searchable}></Example>
        <Example title="Multiple selection" example={multiple}></Example>
        <Example title="Optional" example={optional}></Example>
        <Example title="Grouped options" example={groups}></Example>
        <Example title="Options with icon" example={icons}></Example>
      </Section>
    </ComponentDoc>
  );
}

export default Select;
