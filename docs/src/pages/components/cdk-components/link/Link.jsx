import React from "react";
import { DxcTabsForSections } from "@dxc-technology/halstack-react";
import ComponentDoc from "../../common/ComponentDoc";
import DocTitle from "../../../../common/DocTitle";
import Section from "../../common/Section";
import Example from "../../common/Example";
import ComponentHeader from "../../common/ComponentHeader";
import LinkPropsTable from "./api.jsx";

import defaultLink from "./examples/default";
import undecoratedLink from "./examples/undecorated";
import iconLink from "./examples/iconLink";
import disabledLink from "./examples/disabledLink";
import actionLink from "./examples/actionLink";

function Link() {
  return (
    <ComponentDoc>
      <ComponentHeader title="Link" status="ready"></ComponentHeader>
      <DxcTabsForSections
        stickAtPx={64}
        tabsMode="underlined"
        sections={[
          {
            tabLabel: "Props",
            section: () => (
              <Section>
                <DocTitle size={2}>Props</DocTitle>
                <LinkPropsTable />
              </Section>
            ),
          },
          {
            tabLabel: "Theming",
            section: () => (
              <Section>
                <DocTitle size={2}>Theming</DocTitle>
                <p>Not available tokens.</p>
              </Section>
            ),
          },
          {
            tabLabel: "Examples",
            section: () => (
              <Section>
                <DocTitle size={2}>Examples</DocTitle>
                <Example title="Default Link" example={defaultLink}></Example>
                <Example
                  title="Undecorated link with new window"
                  example={undecoratedLink}
                ></Example>
                <Example title="Disabled Link" example={disabledLink}></Example>
                <Example title="Link with action" example={actionLink}></Example>
                <Example title="Link with icon" example={iconLink}></Example>
              </Section>
            ),
          },
        ]}
      ></DxcTabsForSections>
    </ComponentDoc>
  );
}

export default Link;
