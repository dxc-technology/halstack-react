import React from "react";
import { DxcTabsForSections, DxcHeading } from "@dxc-technology/halstack-react";
import ComponentDoc from "../../common/ComponentDoc";
import Example from "../../common/Example";
import Section from "../../common/Section";
import ComponentHeader from "../../common/ComponentHeader";
import ProgressBarPropsTable from "./api.jsx";
import defaultProgressBar from "./examples/progressUndeterminedDefault";
import determinedDefaultProgressBar from "./examples/progressDeterminedDefault";
import progressWithOverlay from "./examples/progressWithOverlay";

function ProgressBar() {
  return (
    <ComponentDoc>
      <ComponentHeader title="Progress Bar" status="ready"></ComponentHeader>
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
                <ProgressBarPropsTable />
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
                  title="Undeterminate default Progress Bar"
                  example={defaultProgressBar}
                ></Example>
                <Example
                  title="Determinate default Progress Bar"
                  example={determinedDefaultProgressBar}
                ></Example>
                <Example
                  title="Progress Bar with Overlay"
                  example={progressWithOverlay}
                ></Example>
              </Section>
            ),
          },
        ]}
      ></DxcTabsForSections>
    </ComponentDoc>
  );
}
export default ProgressBar;
