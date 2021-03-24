import React from "react";
import { DxcTabsForSections, DxcHeading } from "@dxc-technology/halstack-react";
import ComponentDoc from "../../common/ComponentDoc";
import Example from "../../common/Example";
import Section from "../../common/Section";
import ComponentHeader from "../../common/ComponentHeader";
import SpinnerPropsTable from "./api.jsx";
import defaultSpinner from "./examples/defaultSpinner";
import valueSpinner from "./examples/valueSpinner";
import smallSpinner from "./examples/smallSpinner";
import spinnerWithOverlay from "./examples/spinnerWithOverlay";

function Spinner() {
  return (
    <ComponentDoc>
      <ComponentHeader title="Spinner" status="ready"></ComponentHeader>
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
                <SpinnerPropsTable />
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
                  title="Undetermined Spinner"
                  example={defaultSpinner}
                ></Example>
                <Example
                  title="Determined Spinner"
                  example={valueSpinner}
                ></Example>
                <Example title="Small Spinner" example={smallSpinner}></Example>
                <Example
                  title="Spinner with Overlay"
                  example={spinnerWithOverlay}
                ></Example>
              </Section>
            ),
          },
        ]}
      ></DxcTabsForSections>
    </ComponentDoc>
  );
}

export default Spinner;
