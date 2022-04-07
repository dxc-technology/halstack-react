import React from "react";
import { DxcHeading } from "@dxc-technology/halstack-react";
import ComponentDoc from "../../common/ComponentDoc";
import Section from "../../common/Section";
import Example from "../../common/Example";
import ComponentHeader from "../../common/ComponentHeader";
import DateInputPropsTable from "./api.jsx";
import basic from "./examples/basicDateInput";
import uncontrolled from "./examples/uncontrolledDateInput";
import controlled from "./examples/controlledDateInput";
import formatted from "./examples/formattedDateInput";
import customError from "./examples/customErrorDateInput";

function DateInput() {
  return (
    <ComponentDoc>
      <ComponentHeader title="Date Input" status="ready"></ComponentHeader>
      <Section>
        <DxcHeading level={3} text="Props" margin={{ bottom: "small" }} />
        <DateInputPropsTable />
      </Section>
      <Section>
        <DxcHeading level={3} text="Examples" margin={{ bottom: "small" }} />
        <Example title="Basic usage" example={basic} />
        <Example title="Controlled date input" example={controlled} />
        <Example title="Uncontrolled date input" example={uncontrolled} />
        <Example title="Formatted date input" example={formatted} />
        <Example
          title="Date input with custom error message"
          example={customError}
        />
      </Section>
    </ComponentDoc>
  );
}

export default DateInput;
