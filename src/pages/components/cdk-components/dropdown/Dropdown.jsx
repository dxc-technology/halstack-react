import React from "react";
import { DxcTabsForSections } from "@diaas/dxc-react-cdk";

import ComponentDoc from "../../common/ComponentDoc";
import DocTitle from "../../common/DocTitle";
import Section from "../../common/Section";
import Example from "../../common/Example";

import DropdownPropsTable from "./api.jsx";

import defaultDropdown from "././examples/default";
import outlinedDropdown from "./examples/outlinedDropdown";
import imagesDropdown from "./examples/imagesDropdown";
import darkThemeDropdown from "./examples/darkThemeDropdown";

function Dropdown() {
  return (
    <ComponentDoc>
      <DocTitle size={1}>Dropdown</DocTitle>
      <DxcTabsForSections
        stickAtPx={64}
        tabsMode="underlined"
        sections={[
          {
            tabLabel: "Props",
            section: () => (
              <Section>
                <DocTitle size={2}>Props</DocTitle>
                <DropdownPropsTable />
              </Section>
            )
          },
          {
            tabLabel: "Examples",
            section: () => (
              <Section>
                <DocTitle size={2}>Examples</DocTitle>
                <Example
                  title="Default dropdown"
                  example={defaultDropdown}
                ></Example>
                <Example
                  title="Outlined dropdown"
                  example={outlinedDropdown}
                ></Example>
                <Example
                  title="Dropdown with icons"
                  example={imagesDropdown}
                ></Example>
                <Example
                  title="Dark Theme dropdown"
                  example={darkThemeDropdown}
                ></Example>
              </Section>
            )
          }
        ]}
      ></DxcTabsForSections>
    </ComponentDoc>
  );
}

export default Dropdown;
