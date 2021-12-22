import React from "react";
import { DxcHeading } from "@dxc-technology/halstack-react";
import ComponentDoc from "../../common/ComponentDoc";
import Section from "../../common/Section";
import Example from "../../common/Example";
import ComponentHeader from "../../common/ComponentHeader";
import TogglePropsTable from "./api.jsx";
import defaultToggle from "././examples/default";
import toggleWithIcons from "././examples/toggleWithIcons";
import toggleDarkTheme from "././examples/toggleDarkTheme";
import outlinedToggle from "././examples/outlinedToggle";

function Dropdown() {
  return (
    <ComponentDoc>
      <ComponentHeader title="Toggle" status="ready"></ComponentHeader>
      <Section>
        <DxcHeading level={3} text="Props" margin={{ bottom: "small" }} />
        <TogglePropsTable />
      </Section>
      <Section>
        <DxcHeading level={3} text="Examples" margin={{ bottom: "small" }} />
        <Example title="Default Toggle" example={defaultToggle}></Example>
        <Example title="Toggle with Icons" example={toggleWithIcons}></Example>
        <Example title="Outlined Toggle" example={outlinedToggle}></Example>
        <Example title="Dark theme Toggle" example={toggleDarkTheme}></Example>
      </Section>
    </ComponentDoc>
  );
}

export default Dropdown;
