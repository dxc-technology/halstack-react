import React from "react";
import { DxcTabsForSections } from "@diaas/dxc-react-cdk";

import ComponentDoc from "../../common/ComponentDoc";
import DocTitle from "../../../../common/DocTitle";
import Section from "../../common/Section";
import Example from "../../common/Example";
import ComponentHeader from "../../common/ComponentHeader";

import DropdownPropsTable from "./api.jsx";

import defaultDropdown from "././examples/default";
import outlinedDropdown from "./examples/outlinedDropdown";
import imagesDropdown from "./examples/imagesDropdown";
import darkThemeDropdown from "./examples/darkThemeDropdown";
import expandOnHoverDropdown from "./examples/expandOnHoverDropdown";

function Dropdown() {
  return (
    <ComponentDoc>
      <ComponentHeader
        title="Dropdown"
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
                  title="Default Dropdown"
                  example={defaultDropdown}
                ></Example>
                <Example
                  title="Default Dropdown with expand on hover"
                  example={expandOnHoverDropdown}
                ></Example>
                <Example
                  title="Outlined Dropdown"
                  example={outlinedDropdown}
                ></Example>
                <Example
                  title="Dropdown with icons"
                  example={imagesDropdown}
                ></Example>
                <Example
                  title="Dark theme Dropdown"
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
