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
import controlled from "./examples/controlledInputText";
import uncontrolled from "./examples/uncontrolledInputText";
import labeled from "./examples/lebeledInputText";
import fillParent from "./examples/fillParentInputInputText";
import sized from "./examples/sizedInputText";
import maskedInput from "./examples/maskedInputText";

function InputText() {
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
                  title="Controlled input text"
                  example={controlled}
                ></Example>
                <Example
                  title="Uncontrolled input text"
                  example={uncontrolled}
                ></Example>
                <Example
                  title="Masked input text"
                  example={maskedInput}
                ></Example>
                <Example
                  title="Input text with prefix/suffix"
                  example={labeled}
                ></Example>
                <Example title="Sized input text" example={sized}></Example>
                <Example
                  title="Fill parent input text"
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

export default InputText;
