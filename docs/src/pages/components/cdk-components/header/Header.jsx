import React from "react";
import {
  DxcTabsForSections,
  DxcHeading,
  DxcLink,
} from "@dxc-technology/halstack-react";
import ComponentDoc from "../../common/ComponentDoc";
import Section from "../../common/Section";
import Example from "../../common/Example";
import ComponentHeader from "../../common/ComponentHeader";
import HeaderPropsTable from "./api.jsx";
import defaultHeader from "./examples/default.js";
import children from "./examples/children.js";
import dropdown from "./examples/children-dropdown.js";

function Input() {
  return (
    <ComponentDoc>
      <ComponentHeader title="Header" status="ready"></ComponentHeader>
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
                <HeaderPropsTable />
              </Section>
            ),
          },
          {
            tabLabel: "Children",
            section: () => (
              <Section>
                <DxcHeading
                  level={3}
                  text="Children"
                  margin={{ bottom: "small" }}
                />
                <DxcHeading text="DxcHeader.Dropdown" level={4} weight="bold" />
                <p>
                  Everything between this tags will be displayed as a dropdown.
                  If you want to show a{" "}
                  <DxcLink
                    href={`#/components/dropdown`}
                    underlined={false}
                    text="DxcDropdown"
                  ></DxcLink>
                  , as a shortcut, you can also use it as a direct child of the
                  DxcHeader without the tags, but we recommend to use it with
                  the tags since some styles will be applied for a better fit in
                  the header.
                </p>
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
                  title="Default Header"
                  example={defaultHeader}
                ></Example>
                <Example
                  title="Header with custom content"
                  example={children}
                ></Example>
                <Example
                  title="Header with dropdown"
                  example={dropdown}
                ></Example>
              </Section>
            ),
          },
        ]}
      ></DxcTabsForSections>
    </ComponentDoc>
  );
}

export default Input;
