import React from "react";
import {
  DxcTabsForSections,
  DxcHeading,
  DxcAlert,
  DxcLink,
} from "@dxc-technology/halstack-react";
import ComponentDoc from "../../common/ComponentDoc";
import Section from "../../common/Section";
import Example from "../../common/Example";
import ComponentHeader from "../../common/ComponentHeader";
import InputPropsTable from "./api.jsx";
import controlled from "./examples/controlledInput";
import uncontrolled from "./examples/uncontrolledInput";
import labeled from "./examples/lebeledInput";
import fillParent from "./examples/fillParentInput";
import sized from "./examples/sizedInput";
import maskedInput from "./examples/maskedInput";

function Input() {
  return (
    <ComponentDoc>
      <ComponentHeader title="Input Text" status="deprecated"></ComponentHeader>
      <DxcAlert type="warning" margin={{ bottom: "small" }}>
        This component has been deprecated. Use{" "}
        <DxcLink
          href="#/components/textInput"
          underlined={false}
          inheritedColor={true}
          text="Text Input"
        ></DxcLink>{" "}
        instead.
      </DxcAlert>
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
                <InputPropsTable />
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
                  title="Controlled Input"
                  example={controlled}
                ></Example>
                <Example
                  title="Uncontrolled Input"
                  example={uncontrolled}
                ></Example>
                <Example title="Masked Input" example={maskedInput}></Example>
                <Example
                  title="Input with prefix/suffix"
                  example={labeled}
                ></Example>
                <Example title="Sized Input" example={sized}></Example>
                <Example
                  title="Fill Parent Input"
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

export default Input;
