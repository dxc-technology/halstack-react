import React from "react";
import { DxcTabsForSections, DxcHeading } from "@dxc-technology/halstack-react";
import ComponentDoc from "../../common/ComponentDoc";
import Example from "../../common/Example";
import Section from "../../common/Section";
import ComponentHeader from "../../common/ComponentHeader";
import PasswordInputPropsTable from "./api.jsx";
import controlled from "./examples/controlledPasswordInput";
import uncontrolled from "./examples/uncontrolledPasswordInput";
import pattern from "./examples/patternPasswordInput";
import length from "./examples/lengthPasswordInput";
import invalid from "./examples/invalidPasswordInput";
import customErrors from "./examples/customErrorsPasswordInput";
import fillParent from "./examples/fillParentPasswordInput";

function PasswordInput() {
  return (
    <ComponentDoc>
      <ComponentHeader title="Password Input" status="ready"></ComponentHeader>
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
                <PasswordInputPropsTable />
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
                <Example
                  title="Controlled password input"
                  example={controlled}
                ></Example>
                <Example
                  title="Uncontrolled password input"
                  example={uncontrolled}
                ></Example>
                <Example
                  title="Password input with pattern constraint"
                  example={pattern}
                ></Example>
                <Example
                  title="Password input with length constraint"
                  example={length}
                ></Example>
                <Example
                  title="Invalid password input"
                  example={invalid}
                ></Example>
                <Example
                  title="Password input with custom error messages"
                  example={customErrors}
                ></Example>
                <Example
                  title="Fill parent size password input"
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
export default PasswordInput;
