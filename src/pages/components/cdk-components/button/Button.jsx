import React from "react";
import { DxcTabsForSections } from "@diaas/dxc-react-cdk";

import ComponentDoc from "../../common/ComponentDoc";
import Section from "../../common/Section";
import DocTitle from "../../../../common/DocTitle";
import Example from "../../common/Example";
import ComponentHeader from "../../common/ComponentHeader";
import ButtonPropsTable from "./api.jsx";

import modes from "./examples/modes";
import sized from "./examples/sizedButton";
import filled from "./examples/fillParent";
import withIcon from "./examples/withIcon";
import darkTheme from "./examples/darkTheme";

function Button() {
  return (
    <ComponentDoc>
      <ComponentHeader
        title="Button"
        status="ready"
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
                <ButtonPropsTable />
              </Section>
            )
          },
          {
            tabLabel: "Examples",
            section: () => (
              <Section>
                <DocTitle size={2}>Examples</DocTitle>
                <Example title="Button Modes" example={modes}></Example>
                <Example title="Button with Icon" example={withIcon}></Example>
                <Example title="Dark theme Button" example={darkTheme}></Example>
                <Example title="Sized Button" example={sized}></Example>
                <Example title="Fill Parent Button" example={filled}></Example>
              </Section>
            )
          }
        ]}
      ></DxcTabsForSections>
    </ComponentDoc>
  );
}

export default Button;
