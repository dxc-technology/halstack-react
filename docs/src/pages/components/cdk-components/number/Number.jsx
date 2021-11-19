import React from "react";
import { DxcTabsForSections, DxcHeading } from "@dxc-technology/halstack-react";
import ComponentDoc from "../../common/ComponentDoc";
import Example from "../../common/Example";
import Section from "../../common/Section";
import ComponentHeader from "../../common/ComponentHeader";
import NumberPropsTable from "./api.jsx";
import controlled from "./examples/controlledNumber";
import uncontrolled from "./examples/uncontrolledNumber";
import invalid from "./examples/invalidNumber";
import customErrors from "./examples/customErrorsNumber";
import prefix from "./examples/prefixNumber";
import suffix from "./examples/suffixNumber";
import optional from "./examples/optionalNumber";
import disabled from "./examples/disabledNumber";
import placeholder from "./examples/placeholderNumber";
import fillParent from "./examples/fillParentNumber";
import minMaxStep from "./examples/minMaxStepNumber";

function Number() {
  return (
    <ComponentDoc>
      <ComponentHeader title="Number" status="ready"></ComponentHeader>
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
                <NumberPropsTable />
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
                <Example title="Controlled number" example={controlled} />
                <Example title="Uncontrolled number" example={uncontrolled} />
                <Example
                  title="Number with placeholder"
                  example={placeholder}
                ></Example>
                <Example title="Number with prefix" example={prefix}></Example>
                <Example title="Number with suffix" example={suffix}></Example>
                <Example title="Optional number" example={optional}></Example>
                <Example title="Disabled number" example={disabled}></Example>
                <Example title="Invalid number" example={invalid}></Example>
                <Example
                  title="Min, max and step"
                  example={minMaxStep}
                ></Example>

                <Example
                  title="Number with custom error messages"
                  example={customErrors}
                ></Example>
                <Example
                  title="Fill parent size number"
                  example={fillParent}
                ></Example>
              </Section>
            ),
          },
        ]}
      ></DxcTabsForSections>
    </ComponentDoc>
  );
}
export default Number;
