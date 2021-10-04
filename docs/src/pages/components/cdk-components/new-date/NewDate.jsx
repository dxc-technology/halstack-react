import React from "react";
import { DxcTabsForSections, DxcHeading } from "@dxc-technology/halstack-react";
import ComponentDoc from "../../common/ComponentDoc";
import Section from "../../common/Section";
import Example from "../../common/Example";
import ComponentHeader from "../../common/ComponentHeader";
import NewDatePropsTable from "./api.jsx";
import uncontrolled from "./examples/uncontrolledDate";
import controlled from "./examples/controlledDate";
import formatted from "./examples/formattedDate";
import error from "./examples/errorDate";
import customError from "./examples/customErrorDate";
import optional from "./examples/optionalDate";
import disabled from "./examples/disabledDate";
import sized from "./examples/sizedDate";
import helperText from "./examples/helperTextDate";


function NewDate() {
  return (
    <ComponentDoc>
      <ComponentHeader title="New Date" status="ready"></ComponentHeader>
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
                <NewDatePropsTable />
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
                <Example title="Controlled Date" example={controlled} />
                <Example title="Uncontrolled Date" example={uncontrolled} />
                <Example title="Date with helper text" example={helperText} />
                <Example title="Formatted Date" example={formatted} />
                <Example title="Invalid Date" example={error} />
                <Example title="Date with custom error message" example={customError} />
                <Example title="Optional date" example={optional} />
                <Example title="Disabled date" example={disabled} />
                <Example title="Fill parent size date" example={sized} />
              </Section>
            ),
          },
        ]}
      ></DxcTabsForSections>
    </ComponentDoc>
  );
}

export default NewDate;
