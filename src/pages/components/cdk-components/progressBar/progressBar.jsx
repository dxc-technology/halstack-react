import React from "react";
import { DxcTabsForSections } from "@diaas/dxc-react-cdk";

import ComponentDoc from "../../common/ComponentDoc";
import DocTitle from "../../../../common/DocTitle";
import Example from "../../common/Example";
import Section from "../../common/Section";
import ComponentHeader from "../../common/ComponentHeader";

import ProgressBarPropsTable from "./api.jsx";

import defaultProgressBar from "./examples/progressUndeterminedDefault";
import determinedDefaultProgressBar from "./examples/progressDeterminedDefault";
import darkThemeProgressBar from "./examples/darkThemeProgressBar";
import progressWithOverlay from "./examples/progressWithOverlay";

function ProgressBar() {
  return (
    <ComponentDoc>
      <ComponentHeader
        title="Progress Bar"
        status="Status"
      ></ComponentHeader>
      <DxcTabsForSections
        stickAtPx={64}
        tabsMode="underlined"
        sections={[
          {
            tabLabel: "Props",
            section: () => (
              <Section>
                <DocTitle size={2}>Props</DocTitle>
                <ProgressBarPropsTable />
              </Section>
            )
          },
          {
            tabLabel: "Examples",
            section: () => (
              <Section>
                <DocTitle size={2}>Examples</DocTitle>
                <Example
                  title="Undeterminate default Progress Bar"
                  example={defaultProgressBar}
                ></Example>
                <Example
                  title="Determinate default Progress Bar"
                  example={determinedDefaultProgressBar}
                ></Example>
                <Example
                  title="Dark theme Progress Bar"
                  example={darkThemeProgressBar}
                ></Example>
                <Example
                  title="Progress Bar with Overlay"
                  example={progressWithOverlay}
                ></Example>
              </Section>
            )
          }
        ]}
      ></DxcTabsForSections>
    </ComponentDoc>
  );
}
export default ProgressBar;
