import React from "react";
import  { DxcTabsForSections, DxcHeading } from "@dxc-technology/halstack-react";
import ComponentDoc from "../../common/ComponentDoc";

import Section from "../../common/Section";
import Example from "../../common/Example";
import ComponentHeader from "../../common/ComponentHeader";
import HeadingPropsTable from "./api.jsx";

import defaultHeadings from "./examples/defaultHeadings";
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
                              <DxcHeading level={3} text="Props" margin={{ bottom: "small" }} />
                              <HeadingPropsTable />
                          </Section>
                      )
                  },
                  {
                    tabLabel: "Theming",
                    section: () => (
                      <Section>
                        <DxcHeading level={3} text="Theming" margin={{ bottom: "small" }} />
                        <p>Not available tokens.</p>
                      </Section>
                    ),
                  },
                  {
                      tabLabel: "Examples",
                      section: () => (
                          <Section>
                              <DxcHeading level={3} text="Examples" margin={{ bottom: "small" }} />
                              <Example
                                title="Default Headings"
                                example={defaultHeadings}
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