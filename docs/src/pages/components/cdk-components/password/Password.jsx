import React from "react";
import { DxcTabsForSections, DxcHeading } from "@dxc-technology/halstack-react";
import ComponentDoc from "../../common/ComponentDoc";
import Example from "../../common/Example";
import Section from "../../common/Section";
import ComponentHeader from "../../common/ComponentHeader";
import PasswordPropsTable from "./api.jsx";
import controlled from "./examples/controlledPassword";
import uncontrolled from "./examples/uncontrolledPassword";
import pattern from "./examples/patternPassword";
import length from "./examples/lengthPassword";
import invalid from "./examples/invalidPassword";
import customErrors from "./examples/customErrorsPassword";
import fillParent from "./examples/fillParentPassword";

function Password() {
  return (
    <ComponentDoc>
      <ComponentHeader title="Password" status="ready"></ComponentHeader>
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
                <PasswordPropsTable />
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
                  title="Controlled Password"
                  example={controlled}
                ></Example>
                <Example
                  title="Uncontrolled Password"
                  example={uncontrolled}
                ></Example>
                <Example
                  title="Password with pattern constraint"
                  example={pattern}
                ></Example>
                <Example
                  title="Password with length constraint"
                  example={length}
                ></Example>
                <Example title="Invalid password" example={invalid}></Example>
                <Example
                  title="Password with custom error messages"
                  example={customErrors}
                ></Example>
                <Example
                  title="Fill parent size password"
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
export default Password;
