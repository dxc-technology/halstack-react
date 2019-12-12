import React from "react";
import ComponentDoc from "../../common/ComponentDoc";
import DocTitle from "../../common/DocTitle";
import Section from "../../common/Section";
import Example from "../../common/Example";

import TabsPropsTable from "./api.jsx";

import controlledTabs from "./examples/controlledTabs";
import uncontrolledTabs from "./examples/uncontrolledTabs";
import darkThemeTabs from "./examples/darkThemeTabs";
import underlinedTabs from "./examples/underlinedTabs";
import withContentTabs from "./examples/withContentTabs";

function Tabs() {
  return (
    <ComponentDoc>
      <DocTitle size={1}>Tabs</DocTitle>
      <Section>
        <DocTitle size={2}>Props</DocTitle>
        <TabsPropsTable />
      </Section>
      <Section>
        <DocTitle size={2}>Elements</DocTitle>
        <Example title="Controlled Tabs" example={controlledTabs}></Example>
        <Example title="Uncontrolled Tabs" example={uncontrolledTabs}></Example>
        <Example title="Dark Theme Tabs" example={darkThemeTabs}></Example>
        <Example title="Underlined Tabs" example={underlinedTabs}></Example>
        <Example title="Tabs with content" example={withContentTabs}></Example>
      </Section>
    </ComponentDoc>
  );
}

export default Tabs;
