import React from "react";
import  { DxcTabsForSections } from "@diaas/dxc-react-cdk";
import ComponentDoc from "../../common/ComponentDoc";
import DocTitle from "../../../../common/DocTitle";
import Section from "../../common/Section";
import Example from "../../common/Example";
import ComponentHeader from "../../common/ComponentHeader";
import HeadingPropsTable from "./api.jsx";

import defaultHeadings from "./examples/defaultHeadings";
import darkHeadings from "./examples/darkHeadings";
import weightHeadings from "./examples/weightHeadings";

function Heading() {
    return (
        <ComponentDoc>
            <ComponentHeader
              title="Heading"
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
                              <HeadingPropsTable />
                          </Section>
                      )
                  },
                  {
                      tabLabel: "Examples",
                      section: () => (
                          <Section>
                              <DocTitle size={2}>Examples</DocTitle>
                              <Example
                                title="Default Headings"
                                example={defaultHeadings}
                              ></Example>
                              <Example
                                title="Dark Headings"
                                example={darkHeadings}
                              ></Example>
                              <Example
                                title="Headings with different weights"
                                example={weightHeadings}
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

export default Heading;