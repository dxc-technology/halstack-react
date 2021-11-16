import React from "react";
import { DxcTabsForSections, DxcHeading } from "@dxc-technology/halstack-react";
import ComponentDoc from "../../common/ComponentDoc";
import Section from "../../common/Section";
import Example from "../../common/Example";
import ComponentHeader from "../../common/ComponentHeader";
import NewInputPropsTable from "./api.jsx";
import controlled from "./examples/controlledInput";
import uncontrolled from "./examples/uncontrolledInput";
import pattern from "./examples/patternInput";
import length from "./examples/lengthInput";
import invalid from "./examples/invalidInput";
import customErrors from "./examples/customErrorsInput";
import prefix from "./examples/prefixInput";
import suffix from "./examples/suffixInput";
import action from "./examples/actionInput";
import optional from "./examples/optionalInput";
import disabled from "./examples/disabledInput";
import placeholder from "./examples/placeholderInput";
import autosuggest from "./examples/autosuggest";
import autosuggestFunction from "./examples/autosuggestFunction";
import fillParent from "./examples/fillParentInput";

function NewInput() {
  return (
    <ComponentDoc>
      <ComponentHeader title="New Input Text" status="ready"></ComponentHeader>
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
                <NewInputPropsTable />
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
                <Example title="Controlled input" example={controlled} />
                <Example title="Uncontrolled input" example={uncontrolled} />
                <Example
                  title="Input with placeholder"
                  example={placeholder}
                ></Example>
                <Example title="Input with prefix" example={prefix}></Example>
                <Example title="Input with suffix" example={suffix}></Example>
                <Example title="Input with action" example={action}></Example>
                <Example title="Optional input" example={optional}></Example>
                <Example title="Disabled input" example={disabled}></Example>
                <Example
                  title="Input with pattern constraint"
                  example={pattern}
                ></Example>
                <Example
                  title="Input with length constraint"
                  example={length}
                ></Example>
                <Example title="Invalid input" example={invalid}></Example>
                <Example
                  title="Input with custom error messages"
                  example={customErrors}
                ></Example>
                <Example title="Input with suggestions" example={autosuggest}></Example>
                <Example
                  title="Input with a function as suggestions"
                  example={autosuggestFunction}
                ></Example>
                <Example
                  title="Fill parent size input"
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

export default NewInput;
