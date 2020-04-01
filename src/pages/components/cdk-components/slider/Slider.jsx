import React, { useEffect } from "react";
import { DxcTabsForSections } from "@diaas/dxc-react-cdk";

import ComponentDoc from "../../common/ComponentDoc";
import DocTitle from "../../../../common/DocTitle";
import Example from "../../common/Example";
import AlertPropsTable from "./api.jsx";
import Section from "../../common/Section";
import controlled from "./examples/controlled";
import uncontrolled from "./examples/uncontrolled";
import discrete from "./examples/discrete";
import continuous from "./examples/continuous";
import withoutLimits from "./examples/without-limits";
import input from "./examples/input";
import disabled from "./examples/disabled";
import dark from "./examples/dark";
import sized from "./examples/sized";

function Slider() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);
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
                <Example
                  title="Controlled Slider"
                  example={controlled}
                ></Example>
                <Example
                  title="Uncontrolled Slider"
                  example={uncontrolled}
                ></Example>
                <Example title="Discrete Slider" example={discrete}></Example>
                <Example
                  title="Continuous Slider"
                  example={continuous}
                ></Example>
                <Example
                  title="Slider without limit values"
                  example={withoutLimits}
                ></Example>
                <Example title="Slider with input" example={input}></Example>
                <Example title="Sized Slider" example={sized}></Example>
                <Example title="Disabled Slider" example={disabled}></Example>
                <Example title="Dark theme Slider" example={dark}></Example>
              </Section>
            )
          }
        ]}
      ></DxcTabsForSections>
    </ComponentDoc>
  );
}

export default Slider;
