import React from "react";
import { DxcTabsForSections } from "@dxc-technology/halstack-react";

import ComponentDoc from "../../common/ComponentDoc";
import DocTitle from "../../../../common/DocTitle";
import Section from "../../common/Section";
import Example from "../../common/Example";
import ComponentHeader from "../../common/ComponentHeader";

import DropdownPropsTable from "./api.jsx";
import DropdownTokensTable from "./Tokens.jsx";

import defaultDropdown from "././examples/default";
import imagesDropdown from "./examples/imagesDropdown";
import expandOnHoverDropdown from "./examples/expandOnHoverDropdown";

function Dropdown() {
  return (
    <ComponentDoc>
      <ComponentHeader title="Dropdown" status="ready"></ComponentHeader>
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
            ),
          },
          {
            tabLabel: "Theming",
            section: () => (
              <Section>
                <DocTitle size={2}>Theming</DocTitle>
                <DropdownTokensTable />
              </Section>
            ),
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
                  title="Dropdown with icons"
                  example={imagesDropdown}
                ></Example>
              </Section>
            ),
          },
        ]}
      ></DxcTabsForSections>
    </ComponentDoc>
  );
}

export default Dropdown;
