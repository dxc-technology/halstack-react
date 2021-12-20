import React from "react";
import { DxcTabsForSections, DxcHeading } from "@dxc-technology/halstack-react";
import ComponentDoc from "../../common/ComponentDoc";
import Section from "../../common/Section";
import Example from "../../common/Example";
import ComponentHeader from "../../common/ComponentHeader";
import TextareaPropsTable from "./api.jsx";
import controlled from "./examples/controlledTextarea";
import uncontrolled from "./examples/uncontrolledTextarea";
import placeholder from "./examples/placeholderTextarea";
import optional from "./examples/optionalTextarea";
import disabled from "./examples/disabledTextarea";
import pattern from "./examples/patternTextarea";
import length from "./examples/lengthTextarea";
import invalid from "./examples/invalidTextarea";
import fillParent from "./examples/fillParentTextarea";
import customErrors from "./examples/customErrorsTextarea";
import vgManual from "./examples/vgManualTextarea";
import vgNone from "./examples/vgNoneTextarea";
import rows from "./examples/rowsTextarea";

function Textarea() {
  return (
    <ComponentDoc>
      <ComponentHeader title="Textarea" status="ready"></ComponentHeader>
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
                <TextareaPropsTable />
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
                <Example title="Controlled textarea" example={controlled} />
                <Example title="Uncontrolled textarea" example={uncontrolled} />
                <Example
                  title="Textarea with placeholder"
                  example={placeholder}
                ></Example>
                <Example title="Disabled textarea" example={disabled}></Example>
                <Example title="Optional textarea" example={optional}></Example>
                <Example
                  title="Textarea with verticalGrow set to 'manual'"
                  example={vgManual}
                ></Example>
                <Example
                  title="Textarea with verticalGrow set to 'none'"
                  example={vgNone}
                ></Example>
                <Example
                  title="Textarea with default rows"
                  example={rows}
                ></Example>
                <Example title="Invalid textarea" example={invalid}></Example>
                <Example
                  title="Textarea with pattern constraint"
                  example={pattern}
                ></Example>
                <Example
                  title="Textarea with length constraint"
                  example={length}
                ></Example>
                <Example
                  title="Textarea with custom error messages"
                  example={customErrors}
                ></Example>
                <Example
                  title="Fill parent size textarea"
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

export default Textarea;
