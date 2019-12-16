import React from "react";
import { DxcTabsForSections } from "@diaas/dxc-react-cdk";

import ComponentDoc from "../../common/ComponentDoc";
import DocTitle from "../../common/DocTitle";
import Example from "../../common/Example";
import AlertPropsTable from "./api.jsx";
import Section from "../../common/Section";
import discrete from "./examples/discrete";
import continuous from "./examples/continuous";
import disabled from "./examples/disabled";
import withoutLimits from "./examples/without-limits";
import input from "./examples/input";
import dark from "./examples/dark";

function Slider() {
  return (
    <ComponentDoc>
      <DocTitle size={1}>Slider</DocTitle>
      <DxcTabsForSections
        stickAtPx={64}
        tabsMode="underlined"
        sections={[
          {
            tabLabel: "Props",
            section: () => (
              <Section>
                <DocTitle size={2}>Props</DocTitle>
                <AlertPropsTable />
              </Section>
            )
          },
          {
            tabLabel: "Examples",
            section: () => (
              <Section>
                <DocTitle size={2}>Examples</DocTitle>
                <Example title="Discrete Slider" example={discrete}></Example>
                <Example
                  title="Continuous Slider"
                  example={continuous}
                ></Example>
                <Example title="Disabled Slider" example={disabled}></Example>
                <Example
                  title="Slider without limit values"
                  example={withoutLimits}
                ></Example>
                <Example title="Slider with input" example={input}></Example>
                <Example title="Dark Theme Slider" example={dark}></Example>
              </Section>
            )
          }
        ]}
      ></DxcTabsForSections>
    </ComponentDoc>
  );
}

export default Slider;
