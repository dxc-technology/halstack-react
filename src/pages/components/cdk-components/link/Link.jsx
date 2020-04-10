import React from "react";
import  { DxcTabsForSections } from "@diaas/dxc-react-cdk";
import ComponentDoc from "../../common/ComponentDoc";
import DocTitle from "../../../../common/DocTitle";
import Section from "../../common/Section";
import Example from "../../common/Example";
import ComponentHeader from "../../common/ComponentHeader";
import LinkPropsTable from "./api.jsx";

import defaultLink from "./examples/default";
import underlinedLink from "./examples/underline";
import darkLink from "./examples/darkTheme";
import iconLink from "./examples/iconLink";

function Link() {
    return (
        <ComponentDoc>
            <ComponentHeader
              title="Link"
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
                              <LinkPropsTable />
                          </Section>
                      )
                  },
                  {
                      tabLabel: "Examples",
                      section: () => (
                          <Section>
                              <DocTitle size={2}>Examples</DocTitle>
                              <Example
                                title="Default Link"
                                example={defaultLink}
                              ></Example>
                              <Example
                                title="Underlined Link with new window"
                                example={underlinedLink}
                              ></Example>
                              <Example
                                title="Dark themed Link"
                                example={darkLink}
                              ></Example>
                              <Example
                                title="Link with icon"
                                example={iconLink}
                              ></Example>
                          </Section>
                      )
                  }
              ]}
            >
            </DxcTabsForSections>
        </ComponentDoc>
    );
}

export default Link;