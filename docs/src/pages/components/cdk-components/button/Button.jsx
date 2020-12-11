import React from "react";
import { DxcTabsForSections, DxcHeading } from "@dxc-technology/halstack-react";

import ComponentDoc from "../../common/ComponentDoc";
import Section from "../../common/Section";

import Example from "../../common/Example";
import ComponentHeader from "../../common/ComponentHeader";
import ButtonPropsTable from "./api.jsx";
import ButtonTokensTable from "./Tokens.jsx";

import modes from "./examples/modes";
import sized from "./examples/sizedButton";
import filled from "./examples/fillParent";
import withIcon from "./examples/withIcon";

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
                <DxcHeading level={3} text="Props" margin={{ bottom: "small" }} />
                <ButtonPropsTable />
              </Section>
            )
          },
          {
            tabLabel: "Theming",
            section: () => (
              <Section>
                <DxcHeading level={3} text="Theming" margin={{ bottom: "small" }} />
                <ButtonTokensTable />
              </Section>
            )
          },
          {
            tabLabel: "Examples",
            section: () => (
              <Section>
                <DxcHeading level={3} text="Examples" margin={{ bottom: "small" }} />
                <Example title="Button Modes" example={modes}></Example>
                <Example title="Button with Icon" example={withIcon}></Example>
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
