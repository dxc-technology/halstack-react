import React from "react";
import {
  DxcTabsForSections,
  DxcHeading,
  DxcAlert,
  DxcLink,
} from "@dxc-technology/halstack-react";
import ComponentDoc from "../../common/ComponentDoc";
import Example from "../../common/Example";
import DatePropsTable from "./api.jsx";
import Section from "../../common/Section";
import ComponentHeader from "../../common/ComponentHeader";
import controlled from "./examples/controlledDate";
import uncontrolled from "./examples/uncontrolledDate";
import sized from "./examples/sized";

function Date() {
  return (
    <ComponentDoc>
      <ComponentHeader title="Date" status="deprecated" />
      <DxcAlert type="warning" margin={{ bottom: "small" }}>
        This component has been deprecated. Use{" "}
        <DxcLink
          href="#/components/dateInput"
          underlined={false}
          inheritedColor={true}
          text="Date Input"
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
                <DatePropsTable />
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
                <Example title="Controlled Date" example={controlled}></Example>
                <Example
                  title="Uncontrolled Date"
                  example={uncontrolled}
                ></Example>
                <Example title="Sized Date" example={sized}></Example>
              </Section>
            ),
          },
        ]}
      ></DxcTabsForSections>
    </ComponentDoc>
  );
}

export default Date;
