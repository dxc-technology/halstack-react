import React from "react";
import { DxcTabsForSections } from "@diaas/dxc-react-cdk";

import ComponentDoc from "../../common/ComponentDoc";
import DocTitle from "../../../../common/DocTitle";
import Example from "../../common/Example";
import AlertPropsTable from "./api.jsx";
import Section from "../../common/Section";
import inlineInfo from "./examples/inlineInfo";
import inlineSuccess from "./examples/inlineSuccess";
import inlineWarning from "./examples/inlineWarning";
import inlineError from "./examples/inlineError";
import sized from "./examples/sized";
import closableInline from "./examples/closableInline";
import children from "./examples/children";
import modal from "./examples/modal";

function Alert() {
  return (
    <ComponentDoc>
      <DocTitle size={1}>Alert</DocTitle>
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
                  title="Information Alert"
                  example={inlineInfo}
                ></Example>
                <Example
                  title="Success Alert"
                  example={inlineSuccess}
                ></Example>
                <Example
                  title="Warning Alert"
                  example={inlineWarning}
                ></Example>
                <Example title="Error Alert" example={inlineError}></Example>
                <Example title="Sized Alert" example={sized}></Example>
                <Example title="Modal Alert" example={modal}></Example>
                <Example
                  title="Closable inline Alert"
                  example={closableInline}
                ></Example>
                <Example
                  title="Alert with children"
                  example={children}
                ></Example>
              </Section>
            )
          }
        ]}
      ></DxcTabsForSections>
    </ComponentDoc>
  );
}

export default Alert;
