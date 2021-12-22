import React from "react";
import { DxcTabsForSections, DxcHeading } from "@dxc-technology/halstack-react";
import ComponentDoc from "../../common/ComponentDoc";
import Section from "../../common/Section";
import Example from "../../common/Example";
import ComponentHeader from "../../common/ComponentHeader";
import DateInputPropsTable from "./api.jsx";
import uncontrolled from "./examples/uncontrolledDateInput";
import controlled from "./examples/controlledDateInput";
import formatted from "./examples/formattedDateInput";
import error from "./examples/errorDateInput";
import customError from "./examples/customErrorDateInput";
import optional from "./examples/optionalDateInput";
import disabled from "./examples/disabledDateInput";
import sized from "./examples/sizedDateInput";

function DateInput() {
  return (
    <ComponentDoc>
      <ComponentHeader title="Date Input" status="ready"></ComponentHeader>
      <DxcTabsForSections
        stickAtPx={64}
        tabsMode="underlined"
        sections={[
          {
            tabLabel: "Props",
            section: () => (
              <Section>
                <DxcHeading
                  level={3}
                  text="Props"
                  margin={{ bottom: "small" }}
                />
                <DateInputPropsTable />
              </Section>
            ),
          },
          {
            tabLabel: "Examples",
            section: () => (
              <Section>
                <DxcHeading
                  level={3}
                  text="Examples"
                  margin={{ bottom: "small" }}
                />
                <Example title="Controlled date input" example={controlled} />
                <Example
                  title="Uncontrolled date input"
                  example={uncontrolled}
                />
                <Example title="Formatted date input" example={formatted} />
                <Example title="Optional date input" example={optional} />
                <Example title="Disabled date input" example={disabled} />
                <Example title="Invalid date input" example={error} />
                <Example
                  title="Date input with custom error message"
                  example={customError}
                />
                <Example title="Fill parent size date input" example={sized} />
              </Section>
            ),
          },
        ]}
      ></DxcTabsForSections>
    </ComponentDoc>
  );
}

export default DateInput;
