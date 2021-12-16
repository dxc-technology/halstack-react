import React from "react";
import { DxcTabsForSections, DxcHeading } from "@dxc-technology/halstack-react";
import ComponentDoc from "../../common/ComponentDoc";
import Example from "../../common/Example";
import Section from "../../common/Section";
import ComponentHeader from "../../common/ComponentHeader";
import NumberInputPropsTable from "./api.jsx";
import controlled from "./examples/controlledNumberInput";
import uncontrolled from "./examples/uncontrolledNumberInput";
import invalid from "./examples/invalidNumberInput";
import customErrors from "./examples/customErrorsNumberInput";
import prefix from "./examples/prefixNumberInput";
import suffix from "./examples/suffixNumberInput";
import optional from "./examples/optionalNumberInput";
import disabled from "./examples/disabledNumberInput";
import placeholder from "./examples/placeholderNumberInput";
import fillParent from "./examples/fillParentNumberInput";
import minMaxStep from "./examples/minMaxStepNumberInput";

function NumberInput() {
  return (
    <ComponentDoc>
      <ComponentHeader title="Number Input" status="ready"></ComponentHeader>
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
                <NumberInputPropsTable />
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
                <Example title="Controlled number input" example={controlled} />
                <Example
                  title="Uncontrolled number input"
                  example={uncontrolled}
                />
                <Example
                  title="Number input with placeholder"
                  example={placeholder}
                ></Example>
                <Example
                  title="Number input with prefix"
                  example={prefix}
                ></Example>
                <Example
                  title="Number input with suffix"
                  example={suffix}
                ></Example>
                <Example
                  title="Optional number input"
                  example={optional}
                ></Example>
                <Example
                  title="Disabled number input"
                  example={disabled}
                ></Example>
                <Example
                  title="Invalid number input"
                  example={invalid}
                ></Example>
                <Example
                  title="Min, max and step"
                  example={minMaxStep}
                ></Example>

                <Example
                  title="Number input with custom error messages"
                  example={customErrors}
                ></Example>
                <Example
                  title="Fill parent size number input"
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
export default NumberInput;
